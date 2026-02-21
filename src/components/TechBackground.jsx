import { useEffect, memo } from 'react';
import { Terminal, Cpu, Shield, Activity, Binary, Code2, Hash, Lock } from 'lucide-react';
import { renderToStaticMarkup } from 'react-dom/server';
import './TechBackground.css';

const TECH_ICONS = [Terminal, Cpu, Shield, Activity, Binary, Code2, Hash, Lock];

const TechBackground = memo(() => {
    useEffect(() => {
        const isMobile = window.innerWidth < 768;
        const particleCount = isMobile ? 8 : 20; // Drastically reduced for performance
        const intervalTime = isMobile ? 4000 : 2000; // Slower interval

        const createParticle = () => {
            const container = document.querySelector('.tech-background-container');
            if (!container) return;

            const particle = document.createElement('div');
            particle.className = 'tech-particle';

            // Random icon selection
            const IconComponent = TECH_ICONS[Math.floor(Math.random() * TECH_ICONS.length)];
            const svgString = renderToStaticMarkup(<IconComponent size={24} />);
            particle.innerHTML = svgString;

            particle.style.left = Math.random() * 100 + '%';
            particle.style.animationDuration = (Math.random() * 10 + 20) + 's';
            particle.style.animationDelay = Math.random() * 5 + 's';

            // Random scale
            const scale = Math.random() * 0.5 + 0.5;
            particle.style.transform = `scale(${scale})`;

            container.appendChild(particle);

            setTimeout(() => {
                particle.remove();
            }, (parseFloat(particle.style.animationDuration) + parseFloat(particle.style.animationDelay)) * 1000);
        };

        for (let i = 0; i < particleCount; i++) {
            setTimeout(() => createParticle(), i * 300);
        }

        const interval = setInterval(() => {
            if (document.querySelectorAll('.tech-particle').length < (isMobile ? 10 : 25)) {
                createParticle();
            }
        }, intervalTime);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="tech-background-container">
            <div className="corner-accent corner-tl"></div>
            <div className="corner-accent corner-tr"></div>
            <div className="corner-accent corner-bl"></div>
            <div className="corner-accent corner-br"></div>
        </div>
    );
});

export default TechBackground;
