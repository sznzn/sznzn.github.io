import React from 'react';
import { LanguageContext } from '../../../context/LanguageContext';
import './style.css';

const About = () => {
    const { currentLang } = React.useContext(LanguageContext);

    const content = {
        en: {
            title: "About Me",
            intro: "Hello! I'm a passionate web developer focused on building practical web solutions. I specialize in Symfony development while actively learning React to create better user experiences.",
            journey: {
                title: "My Journey 🚀",
                text: "Starting with HTML and CSS fundamentals, progressing to SASS for enhanced development efficiency. After mastering JavaScript basics, I ventured into backend development with Symfony. Currently, I'm exploring React as I work towards becoming a full-stack developer."
            },
            philosophy: {
                title: "Development Philosophy 💡",
                text: "I believe in writing maintainable and scalable code. While still growing my technical skills, I maintain a dedicated approach to creating clean, well-documented solutions."
            },
            learning: {
                title: "Continuous Learning 📚",
                text: "Technology evolves rapidly, and I keep pace through continuous learning. I use platforms like Codecademy and regularly read technical documentation to enhance my skills."
            },
            portfolio: {
                title: "This Portfolio 🎨",
                text: "This website is my first completed React project! It represents my journey into modern frontend development, showcasing my ability to learn and implement new technologies. Built with React, it features responsive design, multilingual support, and interactive elements."
            }
        },
        fr: {
            title: "À Propos",
            intro: "Bonjour ! Je suis un développeur web passionné par la création de solutions web pratiques. Je me spécialise dans le développement Symfony tout en apprenant React pour créer de meilleures expériences utilisateur.",
            journey: {
                title: "Mon Parcours 🚀",
                text: "Débutant avec les fondamentaux HTML et CSS, progressant vers SASS pour une efficacité accrue. Après avoir maîtrisé les bases de JavaScript, je me suis tourné vers le développement backend avec Symfony. Actuellement, j'explore React dans mon parcours vers le développement full-stack."
            },
            philosophy: {
                title: "Philosophie de Développement 💡",
                text: "Je crois en l'écriture de code maintenable et évolutif. Tout en développant mes compétences techniques, je maintiens une approche dédiée à la création de solutions propres et bien documentées."
            },
            learning: {
                title: "Apprentissage Continu 📚",
                text: "La technologie évolue rapidement, et je reste à jour grâce à un apprentissage continu. J'utilise des plateformes comme Codecademy et lis régulièrement la documentation technique pour améliorer mes compétences."
            },
            portfolio: {
                title: "Ce Portfolio 🎨",
                text: "Ce site web est mon premier projet React terminé ! Il représente mon parcours dans le développement frontend moderne, démontrant ma capacité à apprendre et à implémenter de nouvelles technologies. Construit avec React, il présente un design responsive, un support multilingue et des éléments interactifs."
            }
        },
        zh: {
            title: "关于我",
            intro: "你好！我是一名热衷于构建实用网络解决方案的网页开发者。我专注于 Symfony 开发，同时积极学习 React 以创造更好的用户体验。",
            journey: {
                title: "我的历程 🚀",
                text: "从 HTML 和 CSS 基础开始，到使用 SASS 提高开发效率。在掌握 JavaScript 基础后，我投入到使用 Symfony 的后端开发中。目前，我正在学习 React，朝着全栈开发者的方向迈进。"
            },
            philosophy: {
                title: "开发理念 💡",
                text: "我始终坚信编写可维护和可扩展的代码的重要性。在不断提升技术能力的同时，我始终致力于创造整洁、文档完善的解决方案。"
            },
            learning: {
                title: "持续学习 📚",
                text: "技术发展日新月异，我通过持续学习来保持进步。我使用 Codecademy 等平台，并定期阅读技术文档来提升自己的技能。"
            },
            portfolio: {
                title: "这个作品集 🎨",
                text: "这个网站是我的第一个完成的 React 项目！它代表了我进入现代前端开发的旅程，展示了我学习和实施新技术的能力。使用 React 构建，具有响应式设计、多语言支持和交互元素。"
            }
        }
    };

    return (
        <section id="about" className="candy-section">
            <h2>{content[currentLang].title}</h2>
            
            <div className="about-content">
                <p className="intro">{content[currentLang].intro}</p>
                
                <div className="about-details">
                    <div className="about-item">
                        <h3>{content[currentLang].journey.title}</h3>
                        <p>{content[currentLang].journey.text}</p>
                    </div>

                    <div className="about-item">
                        <h3>{content[currentLang].philosophy.title}</h3>
                        <p>{content[currentLang].philosophy.text}</p>
                    </div>

                    <div className="about-item">
                        <h3>{content[currentLang].learning.title}</h3>
                        <p>{content[currentLang].learning.text}</p>
                    </div>

                    <div className="about-item">
                        <h3>{content[currentLang].portfolio.title}</h3>
                        <p>{content[currentLang].portfolio.text}</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
