import { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Grid } from '@react-three/drei';
import * as THREE from 'three';

function EducationalElement3D({ initialPosition, index }: { initialPosition: [number, number, number]; index: number }) {
    const meshRef = useRef<THREE.Group>(null);
    const [targetPosition, setTargetPosition] = useState(new THREE.Vector3(...initialPosition));
    const currentPosition = useRef(new THREE.Vector3(...initialPosition));

    // Educational element types
    const elementTypes = [
        { type: 'book', color: '#F77F00', scale: [1.5, 0.3, 1] },
        { type: 'graduation', color: '#003049', scale: [1, 1.5, 1] },
        { type: 'brain', color: '#D62828', scale: [1.2, 1.2, 1.2] },
        { type: 'lightbulb', color: '#FCBF49', scale: [0.8, 1.4, 0.8] },
        { type: 'target', color: '#F77F00', scale: [1.3, 0.2, 1.3] },
        { type: 'globe', color: '#003049', scale: [1.2, 1.2, 1.2] },
        { type: 'network', color: '#D62828', scale: [1.5, 0.5, 1.5] },
        { type: 'knowledge', color: '#FCBF49', scale: [1, 1, 1] },
        { type: 'pencil', color: '#F77F00', scale: [0.3, 1.8, 0.3] },
        { type: 'calculator', color: '#003049', scale: [1, 0.2, 1.4] }
    ];

    const element = elementTypes[index % elementTypes.length];

    const getAdjacentIntersection = (current: THREE.Vector3) => {
        const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];
        const randomDirection = directions[Math.floor(Math.random() * directions.length)];
        return new THREE.Vector3(
            current.x + randomDirection[0] * 3,
            0.5 + Math.sin(Date.now() * 0.001 + index) * 0.5,
            current.z + randomDirection[1] * 3
        );
    };

    useEffect(() => {
        const interval = setInterval(() => {
            const newPosition = getAdjacentIntersection(currentPosition.current);
            newPosition.x = Math.max(-15, Math.min(15, newPosition.x));
            newPosition.z = Math.max(-15, Math.min(15, newPosition.z));
            setTargetPosition(newPosition);
        }, 2000 + Math.random() * 2000);

        return () => clearInterval(interval);
    }, []);

    useFrame((state, delta) => {
        if (meshRef.current) {
            currentPosition.current.lerp(targetPosition, 0.02);
            meshRef.current.position.copy(currentPosition.current);

            meshRef.current.rotation.y += delta * 0.2;
            meshRef.current.position.y = currentPosition.current.y + Math.sin(state.clock.elapsedTime * 1 + index) * 0.15;

            const pulseScale = 1 + Math.sin(state.clock.elapsedTime * 2 + index) * 0.05;
            meshRef.current.scale.setScalar(pulseScale);
        }
    });

    const renderElement = () => {
        switch (element.type) {
            case 'book':
                return (
                    <>
                        <boxGeometry args={element.scale as [number, number, number]} />
                        <meshStandardMaterial color={element.color} opacity={0.3} transparent />
                        <mesh position={[0, 0.05, 0]}>
                            <boxGeometry args={[1.4, 0.1, 0.9]} />
                            <meshStandardMaterial color="#EAE2B7" opacity={0.4} transparent />
                        </mesh>
                    </>
                );
            case 'graduation':
                return (
                    <>
                        <coneGeometry args={[0.8, 1.2, 4]} />
                        <meshStandardMaterial color={element.color} opacity={0.7} transparent />
                        <mesh position={[0, 0.8, 0]}>
                            <boxGeometry args={[1.2, 0.1, 1.2]} />
                            <meshStandardMaterial color={element.color} opacity={0.8} transparent />
                        </mesh>
                    </>
                );
            case 'lightbulb':
                return (
                    <>
                        <sphereGeometry args={[0.6, 8, 6]} />
                        <meshStandardMaterial color={element.color} opacity={0.7} transparent emissive={element.color} emissiveIntensity={0.2} />
                        <mesh position={[0, -0.5, 0]}>
                            <cylinderGeometry args={[0.3, 0.3, 0.4, 8]} />
                            <meshStandardMaterial color="#666" opacity={0.8} transparent />
                        </mesh>
                    </>
                );
            case 'pencil':
                return (
                    <>
                        <cylinderGeometry args={[0.15, 0.15, 1.8, 8]} />
                        <meshStandardMaterial color={element.color} opacity={0.3} transparent />
                        <mesh position={[0, 0.9, 0]}>
                            <coneGeometry args={[0.15, 0.3, 8]} />
                            <meshStandardMaterial color="#333" opacity={0.4} transparent />
                        </mesh>
                    </>
                );
            case 'calculator':
                return (
                    <>
                        <boxGeometry args={element.scale as [number, number, number]} />
                        <meshStandardMaterial color={element.color} opacity={0.3} transparent />
                        <mesh position={[0, 0.15, 0.5]}>
                            <boxGeometry args={[0.8, 0.1, 0.4]} />
                            <meshStandardMaterial color="#000" opacity={0.5} transparent />
                        </mesh>
                    </>
                );
            default:
                return (
                    <>
                        <boxGeometry args={element.scale as [number, number, number]} />
                        <meshStandardMaterial color={element.color} opacity={0.7} transparent />
                    </>
                );
        }
    };

    return (
        <group ref={meshRef} position={initialPosition}>
            <mesh>
                {renderElement()}
            </mesh>
            <lineSegments>
                <edgesGeometry attach="geometry" args={[new THREE.BoxGeometry(...element.scale as [number, number, number])]} />
                <lineBasicMaterial attach="material" color={element.color} linewidth={2} opacity={0.6} transparent />
            </lineSegments>
        </group>
    );
}

function Scene() {
    const initialPositions: [number, number, number][] = [
        [-6, 0.5, -6], [0, 0.5, 0], [6, 0.5, 6],
        [-9, 0.5, 0], [9, 0.5, 0], [0, 0.5, 9],
        [-3, 0.5, -9], [3, 0.5, 9], [-12, 0.5, -3],
        [12, 0.5, 3]
    ];

    return (
        <>
            <OrbitControls enableZoom={false} enablePan={false} />
            <ambientLight intensity={0.6} />
            <pointLight position={[10, 10, 10]} intensity={0.8} />
            <pointLight position={[-10, 5, -10]} intensity={0.4} color="#F77F00" />
            <spotLight position={[0, 20, 0]} intensity={0.5} angle={0.3} penumbra={1} color="#FCBF49" />

            <Grid
                renderOrder={-1}
                position={[0, 0, 0]}
                infiniteGrid
                cellSize={1}
                cellThickness={0.6}
                sectionSize={3}
                sectionThickness={1.2}
                sectionColor="#003049"
                fadeDistance={60}
            />

            {initialPositions.map((position, index) => {
                if (index < initialPositions.length - 1) {
                    const nextPosition = initialPositions[index + 1];
                    return (
                        <line key={`connection-${index}`}>
                            <bufferGeometry attach="geometry">
                                <bufferAttribute
                                    attach="attributes-position"
                                    args={[
                                        new Float32Array([
                                            position[0], position[1], position[2],
                                            nextPosition[0], nextPosition[1], nextPosition[2]
                                        ]),
                                        3
                                    ]}
                                />
                            </bufferGeometry>
                            <lineBasicMaterial attach="material" color="#F77F00" opacity={0.3} transparent />
                        </line>
                    );
                }
                return null;
            })}

            {initialPositions.map((position, index) => (
                <EducationalElement3D key={index} initialPosition={position} index={index} />
            ))}
        </>
    );
}

export default function Scene3D() {
    return (
        <div className="absolute inset-0 -z-20">
            <Canvas shadows camera={{ position: [30, 30, 30], fov: 50 }}>
                <Scene />
            </Canvas>
        </div>
    );
}
