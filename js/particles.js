// ==========================================
// Particle System for Background
// ==========================================

class ParticleSystem {
    constructor(containerId, particleCount = 50) {
        this.container = document.getElementById(containerId);
        this.particleCount = particleCount;
        this.particles = [];
        this.colors = ['#00F5FF', '#8B5CF6', '#00FF94'];
        
        this.init();
    }
    
    init() {
        if (!this.container) return;
        
        // Create particles
        for (let i = 0; i < this.particleCount; i++) {
            this.createParticle();
        }
        
        // Start animation
        this.animate();
        
        // Handle resize
        window.addEventListener('resize', () => this.handleResize());
        
        // Handle mouse interaction
        this.handleMouseMove();
    }
    
    createParticle() {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        
        // Random properties
        const size = Math.random() * 4 + 2;
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;
        const color = this.colors[Math.floor(Math.random() * this.colors.length)];
        const duration = Math.random() * 20 + 10;
        const delay = Math.random() * 5;
        
        // Apply styles
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${x}px`;
        particle.style.top = `${y}px`;
        particle.style.background = color;
        particle.style.animationDuration = `${duration}s`;
        particle.style.animationDelay = `${delay}s`;
        particle.style.opacity = Math.random() * 0.5 + 0.2;
        
        // Store particle data
        const particleData = {
            element: particle,
            x: x,
            y: y,
            vx: (Math.random() - 0.5) * 0.5,
            vy: (Math.random() - 0.5) * 0.5,
            size: size,
            color: color
        };
        
        this.particles.push(particleData);
        this.container.appendChild(particle);
    }
    
    animate() {
        this.particles.forEach(particle => {
            // Update position
            particle.x += particle.vx;
            particle.y += particle.vy;
            
            // Bounce off edges
            if (particle.x < 0 || particle.x > window.innerWidth) {
                particle.vx *= -1;
            }
            if (particle.y < 0 || particle.y > window.innerHeight) {
                particle.vy *= -1;
            }
            
            // Apply new position
            particle.element.style.left = `${particle.x}px`;
            particle.element.style.top = `${particle.y}px`;
        });
        
        // Draw connections between nearby particles
        this.drawConnections();
        
        // Continue animation
        requestAnimationFrame(() => this.animate());
    }
    
    drawConnections() {
        // Remove existing connection lines
        const existingLines = this.container.querySelectorAll('.connection-line');
        existingLines.forEach(line => line.remove());
        
        // Create new connections
        for (let i = 0; i < this.particles.length; i++) {
            for (let j = i + 1; j < this.particles.length; j++) {
                const p1 = this.particles[i];
                const p2 = this.particles[j];
                
                const dx = p1.x - p2.x;
                const dy = p1.y - p2.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                
                if (distance < 150) {
                    this.createConnection(p1, p2, distance);
                }
            }
        }
    }
    
    createConnection(p1, p2, distance) {
        const line = document.createElement('div');
        line.classList.add('connection-line');
        
        const opacity = 1 - (distance / 150);
        const length = distance;
        const angle = Math.atan2(p2.y - p1.y, p2.x - p1.x) * (180 / Math.PI);
        
        line.style.cssText = `
            position: absolute;
            width: ${length}px;
            height: 1px;
            background: linear-gradient(90deg, ${p1.color}, ${p2.color});
            opacity: ${opacity * 0.3};
            left: ${p1.x}px;
            top: ${p1.y}px;
            transform-origin: 0 0;
            transform: rotate(${angle}deg);
            pointer-events: none;
        `;
        
        this.container.appendChild(line);
    }
    
    handleMouseMove() {
        let mouseX = 0;
        let mouseY = 0;
        
        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            
            // Repel particles from mouse
            this.particles.forEach(particle => {
                const dx = particle.x - mouseX;
                const dy = particle.y - mouseY;
                const distance = Math.sqrt(dx * dx + dy * dy);
                
                if (distance < 100) {
                    const force = (100 - distance) / 100;
                    const angle = Math.atan2(dy, dx);
                    
                    particle.vx += Math.cos(angle) * force * 0.5;
                    particle.vy += Math.sin(angle) * force * 0.5;
                }
            });
        });
    }
    
    handleResize() {
        // Update particle positions on resize
        this.particles.forEach(particle => {
            if (particle.x > window.innerWidth) {
                particle.x = window.innerWidth - 10;
            }
            if (particle.y > window.innerHeight) {
                particle.y = window.innerHeight - 10;
            }
        });
    }
    
    destroy() {
        this.particles.forEach(particle => {
            particle.element.remove();
        });
        this.particles = [];
        
        const lines = this.container.querySelectorAll('.connection-line');
        lines.forEach(line => line.remove());
    }
}

// ==========================================
// Initialize Particle System
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    // Check if screen is large enough for particles
    if (window.innerWidth > 768) {
        const particleSystem = new ParticleSystem('particles', 50);
    }
});

// ==========================================
// Alternative Simple Particle System
// ==========================================
class SimpleParticles {
    constructor(containerId, count = 30) {
        this.container = document.getElementById(containerId);
        this.count = count;
        this.particles = [];
        
        this.init();
    }
    
    init() {
        if (!this.container) return;
        
        for (let i = 0; i < this.count; i++) {
            this.createParticle();
        }
    }
    
    createParticle() {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        
        const size = Math.random() * 3 + 1;
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        const duration = Math.random() * 15 + 10;
        const delay = Math.random() * 5;
        
        particle.style.cssText = `
            width: ${size}px;
            height: ${size}px;
            left: ${x}%;
            top: ${y}%;
            animation-duration: ${duration}s;
            animation-delay: ${delay}s;
            opacity: ${Math.random() * 0.5 + 0.1};
        `;
        
        this.container.appendChild(particle);
        this.particles.push(particle);
    }
}

// ==========================================
// Floating Bubbles Effect
// ==========================================
class FloatingBubbles {
    constructor(containerId, count = 20) {
        this.container = document.getElementById(containerId);
        this.count = count;
        this.bubbles = [];
        
        this.init();
    }
    
    init() {
        if (!this.container) return;
        
        for (let i = 0; i < this.count; i++) {
            this.createBubble();
        }
    }
    
    createBubble() {
        const bubble = document.createElement('div');
        bubble.classList.add('bubble');
        
        const size = Math.random() * 60 + 20;
        const x = Math.random() * 100;
        const duration = Math.random() * 10 + 5;
        const delay = Math.random() * 5;
        
        bubble.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            left: ${x}%;
            bottom: -${size}px;
            background: radial-gradient(circle at 30% 30%, rgba(0, 245, 255, 0.3), rgba(139, 92, 246, 0.1));
            border-radius: 50%;
            animation: rise ${duration}s ease-in-out ${delay}s infinite;
            pointer-events: none;
        `;
        
        // Add keyframe animation dynamically
        if (!document.querySelector('#bubble-animations')) {
            const style = document.createElement('style');
            style.id = 'bubble-animations';
            style.textContent = `
                @keyframes rise {
                    0% {
                        transform: translateY(0) rotate(0deg);
                        opacity: 0;
                    }
                    10% {
                        opacity: 1;
                    }
                    90% {
                        opacity: 1;
                    }
                    100% {
                        transform: translateY(-100vh) rotate(360deg);
                        opacity: 0;
                    }
                }
            `;
            document.head.appendChild(style);
        }
        
        this.container.appendChild(bubble);
        this.bubbles.push(bubble);
    }
}

// ==========================================
// Star Field Effect
// ==========================================
class StarField {
    constructor(containerId, count = 100) {
        this.container = document.getElementById(containerId);
        this.count = count;
        this.stars = [];
        
        this.init();
    }
    
    init() {
        if (!this.container) return;
        
        for (let i = 0; i < this.count; i++) {
            this.createStar();
        }
        
        this.animate();
    }
    
    createStar() {
        const star = document.createElement('div');
        star.classList.add('star');
        
        const size = Math.random() * 2 + 1;
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        const twinkleDuration = Math.random() * 3 + 2;
        
        star.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            left: ${x}%;
            top: ${y}%;
            background: white;
            border-radius: 50%;
            animation: twinkle ${twinkleDuration}s ease-in-out infinite;
            pointer-events: none;
        `;
        
        // Add keyframe animation dynamically
        if (!document.querySelector('#star-animations')) {
            const style = document.createElement('style');
            style.id = 'star-animations';
            style.textContent = `
                @keyframes twinkle {
                    0%, 100% {
                        opacity: 0.3;
                        transform: scale(1);
                    }
                    50% {
                        opacity: 1;
                        transform: scale(1.2);
                    }
                }
            `;
            document.head.appendChild(style);
        }
        
        this.container.appendChild(star);
        this.stars.push(star);
    }
    
    animate() {
        // Parallax effect on mouse move
        document.addEventListener('mousemove', (e) => {
            const mouseX = e.clientX / window.innerWidth;
            const mouseY = e.clientY / window.innerHeight;
            
            this.stars.forEach((star, index) => {
                const speed = (index % 3 + 1) * 10;
                const x = (mouseX - 0.5) * speed;
                const y = (mouseY - 0.5) * speed;
                star.style.transform = `translate(${x}px, ${y}px)`;
            });
        });
    }
}

// ==========================================
// Matrix Rain Effect (Optional)
// ==========================================
class MatrixRain {
    constructor(containerId) {
        this.container = document.getElementById(containerId);
        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext('2d');
        this.columns = [];
        this.fontSize = 14;
        
        this.init();
    }
    
    init() {
        if (!this.container) return;
        
        this.canvas.style.cssText = `
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            opacity: 0.1;
        `;
        
        this.container.appendChild(this.canvas);
        this.resize();
        
        window.addEventListener('resize', () => this.resize());
        
        this.animate();
    }
    
    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        
        const columnCount = Math.floor(this.canvas.width / this.fontSize);
        this.columns = Array(columnCount).fill(1);
    }
    
    animate() {
        this.ctx.fillStyle = 'rgba(5, 8, 22, 0.05)';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        
        this.ctx.fillStyle = '#00F5FF';
        this.ctx.font = `${this.fontSize}px monospace`;
        
        this.columns.forEach((y, index) => {
            const char = String.fromCharCode(0x30A0 + Math.random() * 96);
            const x = index * this.fontSize;
            
            this.ctx.fillText(char, x, y * this.fontSize);
            
            if (y * this.fontSize > this.canvas.height && Math.random() > 0.975) {
                this.columns[index] = 0;
            }
            
            this.columns[index]++;
        });
        
        requestAnimationFrame(() => this.animate());
    }
}

// ==========================================
// Choose Particle System Based on Performance
// ==========================================
function initParticleSystem() {
    const container = document.getElementById('particles');
    if (!container) return;
    
    // Check device performance
    const isMobile = window.innerWidth < 768;
    const isLowEnd = navigator.hardwareConcurrency && navigator.hardwareConcurrency < 4;
    
    if (isMobile || isLowEnd) {
        // Use simple particles for mobile/low-end devices
        new SimpleParticles('particles', 20);
    } else {
        // Use full particle system for desktop
        new ParticleSystem('particles', 50);
    }
}

// ==========================================
// Initialize on DOM Ready
// ==========================================
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initParticleSystem);
} else {
    initParticleSystem();
}

// ==========================================
// Export for use in other modules
// ==========================================
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        ParticleSystem,
        SimpleParticles,
        FloatingBubbles,
        StarField,
        MatrixRain
    };
}
