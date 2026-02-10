import { useEffect } from 'react';
import './TechBackground.css';

const TechBackground = () => {
    useEffect(() => {
        // Performance optimization: Check if mobile
        const isMobile = window.innerWidth < 768;
        const particleCount = isMobile ? 10 : 30; // Fewer initial particles on mobile
        const intervalTime = isMobile ? 3000 : 1000; // Slower creation on mobile

        // Create floating particles
        const createParticle = () => {
            const container = document.querySelector('.tech-background-container');
            if (!container) return;

            const particle = document.createElement('div');
            particle.className = 'tech-particle';

            // Random starting position
            particle.style.left = Math.random() * 100 + '%';
            particle.style.animationDuration = (Math.random() * 10 + 15) + 's';
            particle.style.animationDelay = Math.random() * 5 + 's';

            // Random size
            const size = Math.random() * 4 + 2;
            particle.style.width = size + 'px';
            particle.style.height = size + 'px';

            container.appendChild(particle);

            // Remove particle after animation
            setTimeout(() => {
                particle.remove();
            }, (parseFloat(particle.style.animationDuration) + parseFloat(particle.style.animationDelay)) * 1000);
        };

        // Create initial particles
        for (let i = 0; i < particleCount; i++) {
            setTimeout(() => createParticle(), i * 200);
        }

        // Create new particles periodically
        const interval = setInterval(() => {
            // Limit total particles to prevent DOM overload
            if (document.querySelectorAll('.tech-particle').length < (isMobile ? 15 : 50)) {
                createParticle();
            }
        }, intervalTime);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="tech-background-container">
            {/* Corner accents */}
            <div className="corner-accent corner-tl"></div>
            <div className="corner-accent corner-tr"></div>
            <div className="corner-accent corner-bl"></div>
            <div className="corner-accent corner-br"></div>
        </div>
    );
};

export default TechBackground;
