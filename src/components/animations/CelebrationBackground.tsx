import { useEffect, useRef } from 'react';

interface CelebrationBackgroundProps {
  className?: string;
}

const CelebrationBackground = ({ className = '' }: CelebrationBackgroundProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvasElement = canvasRef.current;
    if (!canvasElement) return;
    const canvasTarget: HTMLCanvasElement = canvasElement;
    
    const ctx = canvasTarget.getContext('2d');
    if (!ctx) return;
    
    // Set canvas dimensions
    const resizeCanvas = () => {
      const parent = canvasTarget.parentElement;
      if (!parent) return;
      
      canvasTarget.width = parent.offsetWidth;
      canvasTarget.height = parent.offsetHeight;
    };
    
    // Call resize initially and add event listener
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    // Confetti/sparkle particles
    class Particle {
      x: number;
      y: number;
      size: number;
      color: string;
      speedX: number;
      speedY: number;
      rotation: number;
      rotationSpeed: number;
      opacity: number;
      shape: 'circle' | 'star' | 'square';
      
      constructor() {
        this.x = Math.random() * canvasTarget.width;
        this.y = Math.random() * canvasTarget.height;
        this.size = Math.random() * 5 + 2;
        
        // Color palette - celebration colors
        const colors = [
          '#FCBF49', // Maize
          '#F77F00', // Orange Peel
          '#D62828', // Fire Engine Red
          '#EAE2B7', // Champagne
          '#FFFFFF'  // White
        ];
        
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.speedX = Math.random() * 0.5 - 0.25;
        this.speedY = Math.random() * 0.5 - 0.25;
        this.rotation = Math.random() * Math.PI * 2;
        this.rotationSpeed = Math.random() * 0.02 - 0.01;
        this.opacity = Math.random() * 0.5 + 0.3;
        
        const shapes = ['circle', 'star', 'square'] as const;
        this.shape = shapes[Math.floor(Math.random() * shapes.length)];
      }
      
      update() {
        // Update position
        this.x += this.speedX;
        this.y += this.speedY;
        
        // Update rotation
        this.rotation += this.rotationSpeed;
        
        // Wrap around edges
        if (this.x < -this.size) this.x = canvasTarget.width + this.size;
        if (this.x > canvasTarget.width + this.size) this.x = -this.size;
        if (this.y < -this.size) this.y = canvasTarget.height + this.size;
        if (this.y > canvasTarget.height + this.size) this.y = -this.size;
        
        // Random slight opacity change for twinkling effect
        this.opacity += Math.random() * 0.02 - 0.01;
        if (this.opacity < 0.2) this.opacity = 0.2;
        if (this.opacity > 0.8) this.opacity = 0.8;
      }
      
      draw() {
        if (!ctx) return;
        
        ctx.save();
        ctx.globalAlpha = this.opacity;
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rotation);
        
        switch (this.shape) {
          case 'circle':
            ctx.beginPath();
            ctx.arc(0, 0, this.size, 0, Math.PI * 2);
            ctx.fillStyle = this.color;
            ctx.fill();
            break;
            
          case 'star':
            this.drawStar(0, 0, 5, this.size, this.size / 2);
            break;
            
          case 'square':
            ctx.fillStyle = this.color;
            ctx.fillRect(-this.size / 2, -this.size / 2, this.size, this.size);
            break;
        }
        
        ctx.restore();
      }
      
      drawStar(cx: number, cy: number, spikes: number, outerRadius: number, innerRadius: number) {
        if (!ctx) return;
        
        let rot = Math.PI / 2 * 3;
        let x = cx;
        let y = cy;
        const step = Math.PI / spikes;
        
        ctx.beginPath();
        ctx.moveTo(cx, cy - outerRadius);
        
        for (let i = 0; i < spikes; i++) {
          x = cx + Math.cos(rot) * outerRadius;
          y = cy + Math.sin(rot) * outerRadius;
          ctx.lineTo(x, y);
          rot += step;
          
          x = cx + Math.cos(rot) * innerRadius;
          y = cy + Math.sin(rot) * innerRadius;
          ctx.lineTo(x, y);
          rot += step;
        }
        
        ctx.lineTo(cx, cy - outerRadius);
        ctx.closePath();
        ctx.fillStyle = this.color;
        ctx.fill();
      }
    }
    
    // Create particles
    const particles: Particle[] = [];
    const particleCount = 50; // Adjust for more or fewer particles
    
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }
    
    // Animation loop
    const animate = () => {
      if (!ctx) return;
      
      // Clear canvas with very slight opacity to create trails
      ctx.fillStyle = 'rgba(0, 0, 0, 0.01)';
      ctx.fillRect(0, 0, canvasTarget.width, canvasTarget.height);
      
      // Update and draw particles
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });
      
      requestAnimationFrame(animate);
    };
    
    // Start animation
    ctx.fillStyle = 'rgba(0, 0, 0, 0)';
    ctx.fillRect(0, 0, canvasTarget.width, canvasTarget.height);
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
      className={`absolute inset-0 w-full h-full pointer-events-none ${className}`}
      style={{ zIndex: -1 }}
    />
  );
};

export default CelebrationBackground;
