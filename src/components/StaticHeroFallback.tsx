import { motion } from 'framer-motion';

export default function StaticHeroFallback() {
    return (
        <div className="absolute inset-0 -z-20 bg-gradient-to-b from-[#E3F2FD] to-[#BBDEFB]">
            {/* Static gradient background matching 3D scene colors */}
            <motion.div
                className="absolute inset-0"
                style={{
                    background: 'radial-gradient(circle at 50% 50%, rgba(0, 48, 73, 0.1) 0%, rgba(247, 127, 0, 0.05) 40%, transparent 70%)',
                }}
                animate={{
                    opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />

            {/* Grid pattern overlay */}
            <div
                className="absolute inset-0 opacity-20"
                style={{
                    backgroundImage: `
            linear-gradient(rgba(0, 48, 73, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 48, 73, 0.1) 1px, transparent 1px)
          `,
                    backgroundSize: '40px 40px',
                }}
            />
        </div>
    );
}
