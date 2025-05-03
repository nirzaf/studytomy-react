import { useEffect, useRef } from 'react';

interface CanvasPlexusProps {
  className?: string;
}

const CanvasPlexus = ({ className = '' }: CanvasPlexusProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas dimensions
    const resizeCanvas = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      
      canvas.width = parent.offsetWidth;
      canvas.height = parent.offsetHeight;
    };
    
    // Call resize initially and add event listener
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    // Particle class
    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      color: string;
      
      constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.radius = Math.random() * 2 + 2;
        this.color = '#f97316'; // Orange color
      }
      
      update() {
        // Update position
        this.x += this.vx;
        this.y += this.vy;
        
        // Bounce off edges (with null check for canvas)
        if (canvas && (this.x < 0 || this.x > canvas.width)) this.vx = -this.vx;
        if (canvas && (this.y < 0 || this.y > canvas.height)) this.vy = -this.vy;
      }
      
      draw() {
        if (!ctx) return;
        
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.globalAlpha = 0.6;
        ctx.fill();
        ctx.closePath();
      }
    }
    
    // Create particles
    const particleCount = 80;
    const particles: Particle[] = [];
    
    for (let i = 0; i < particleCount; i++) {
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      particles.push(new Particle(x, y));
    }
    
    // Animation loop
    const animate = () => {
      if (!ctx) return;
      
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw particles
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();
        
        // Draw connections
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 150) {
            ctx.beginPath();
            ctx.strokeStyle = '#f97316';
            ctx.globalAlpha = 0.2 * (1 - distance / 150);
            ctx.lineWidth = 1;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
            ctx.closePath();
          }
        }
      }
      
      requestAnimationFrame(animate);
    };
    
    // Start animation
    const animationId = requestAnimationFrame(animate);
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, []);
  
  return (
    <canvas 
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full ${className}`}
      style={{ zIndex: -1 }}
    />
  );
};

export default CanvasPlexus;
