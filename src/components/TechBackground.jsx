import { useEffect } from 'react';
import './TechBackground.css';

const TechBackground = () => {
    useEffect(() => {
        // Create floating particles
        const createParticle = () => {
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

            document.querySelector('.tech-background-container')?.appendChild(particle);

            // Remove particle after animation
            setTimeout(() => {
                particle.remove();
            }, (parseFloat(particle.style.animationDuration) + parseFloat(particle.style.animationDelay)) * 1000);
        };

        // Create initial particles
        for (let i = 0; i < 30; i++) {
            setTimeout(() => createParticle(), i * 200);
        }

        // Create new particles periodically
        const interval = setInterval(() => {
            createParticle();
        }, 1000);

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
