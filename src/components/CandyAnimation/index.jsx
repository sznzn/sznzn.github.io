// src/components/CandyAnimation/index.jsx
import React, { useEffect, useRef } from 'react';
import './style.css';

const CandyAnimation = () => {
    const containerRef = useRef(null);
    const ANIMATION_DURATION = 3000;

    useEffect(() => {
        const createCandy = () => {
            const candy = document.createElement('div');
            const candyTypes = ['lollipop', 'candy-wrap', 'chocolate'];
            candy.className = `candy ${candyTypes[Math.floor(Math.random() * candyTypes.length)]}`;
            
            const isMobile = window.innerWidth <= 768;
            const fallDistance = isMobile ? 
                Math.min(window.innerHeight, 300) : 
                400;
            
            const startX = Math.random() * 100;
            candy.style.left = `${startX}%`;
            candy.style.top = '0';
            
            const swayDistance = -30 + Math.random() * 60;
            const rotate = -180 + Math.random() * 360;
            const duration = 1.5 + Math.random();
            
            candy.style.setProperty('--fallDistance', `${fallDistance}px`);
            candy.style.setProperty('--swayDistance', `${swayDistance}px`);
            candy.style.setProperty('--rotate', `${rotate}deg`);
            candy.style.animation = `fall ${duration}s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards`;
            
            containerRef.current.appendChild(candy);
            
            candy.addEventListener('animationend', () => {
                candy.remove();
            });
        };

        const dropInterval = setInterval(() => {
            const count = 2 + Math.floor(Math.random() * 2);
            for(let i = 0; i < count; i++) {
                setTimeout(createCandy, i * 100);
            }
        }, 300);

        setTimeout(() => {
            clearInterval(dropInterval);
            setTimeout(() => {
                if (containerRef.current) {
                    containerRef.current.remove();
                }
            }, 2500);
        }, ANIMATION_DURATION);

        // 清理函数
        return () => {
            clearInterval(dropInterval);
            if (containerRef.current) {
                containerRef.current.remove();
            }
        };
    }, []);

    return <div className="candy-container" ref={containerRef} />;
};

export default CandyAnimation;