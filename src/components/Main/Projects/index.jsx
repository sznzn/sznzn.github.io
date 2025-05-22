import React from 'react';
import { LanguageContext } from '../../../context/LanguageContext';
import './style.css';

const Projects = () => {
    const { currentLang } = React.useContext(LanguageContext);

    const content = {
        en: {
            title: "Sweet Projects",
            description: "My projects are currently being organized and updated. They are mainly divided into four categories:",
            categories: [
                "CSS Positioning Tutorial",
                "JavaScript Mini Programs",
                "Symfony Management System",
                "Blog System (In Progress)"
            ],
            comingSoon: "More projects coming soon... 🚀",
            project1: {
                title: "CSS Positioning Tutorial",
                description: "A comprehensive tutorial on CSS positioning, explaining the concepts and practical applications of fixed, absolute, relative, and other positioning properties.",
                tech: ["HTML", "CSS", "JavaScript"]
            },
            project2: {
                title: "JavaScript Mini Apps",
                description: "A series of small JavaScript applications demonstrating different functionalities and interactive features.",
                tech: ["JavaScript", "HTML", "CSS"]
            },
            project3: {
                title: "Symfony Management System",
                description: "A comprehensive management system built with Symfony framework, featuring user management and data visualization.",
                tech: ["PHP", "Symfony", "MySQL", "JavaScript"]
            }
        },
        fr: {
            title: "Mes Projets Doux",
            description: "Mes projets sont actuellement en cours d'organisation et de mise à jour. Ils sont principalement divisés en quatre catégories :",
            categories: [
                "Tutoriel de Positionnement CSS",
                "Mini Programmes JavaScript",
                "Système de Gestion Symfony",
                "Système de Blog (En Cours)"
            ],
            comingSoon: "Plus de projets à venir... 🚀",
            project1: {
                title: "Tutoriel sur le Positionnement CSS",
                description: "Un tutoriel complet sur le positionnement CSS, expliquant les concepts et les applications pratiques des propriétés de positionnement fixed, absolute, relative et autres.",
                tech: ["HTML", "CSS", "JavaScript"]
            },
            project2: {
                title: "Mini Applications JavaScript",
                description: "Une série de petites applications JavaScript démontrant différentes fonctionnalités et caractéristiques interactives.",
                tech: ["JavaScript", "HTML", "CSS"]
            },
            project3: {
                title: "Système de Gestion Symfony",
                description: "Un système de gestion complet construit avec le framework Symfony, comprenant la gestion des utilisateurs et la visualisation des données.",
                tech: ["PHP", "Symfony", "MySQL", "JavaScript"]
            }
        },
        zh: {
            title: "我的甜品项目",
            description: "我的项目正在整理和更新中，主要分为四个类别：",
            categories: [
                "CSS定位教程",
                "JavaScript小程序",
                "Symfony管理系统",
                "博客系统（开发中）"
            ],
            comingSoon: "更多项目即将到来... 🚀",
            project1: {
                title: "CSS定位详解教程",
                description: "一个全面的CSS定位教程，深入讲解fixed、absolute、relative等定位属性的概念和实际应用场景。",
                tech: ["HTML", "CSS", "JavaScript"]
            },
            project2: {
                title: "JavaScript小程序",
                description: "一系列小型JavaScript应用，展示不同的功能和交互特性。",
                tech: ["JavaScript", "HTML", "CSS"]
            },
            project3: {
                title: "Symfony管理系统",
                description: "使用Symfony框架构建的综合性管理系统，包含用户管理和数据可视化功能。",
                tech: ["PHP", "Symfony", "MySQL", "JavaScript"]
            }
        }
    };

    return (
        <section id="projects" className="candy-section">
            <h2>{content[currentLang].title}</h2>
            <p className="projects-description">{content[currentLang].description}</p>
            <div className="categories-container">
                {content[currentLang].categories.map((category, index) => (
                    <div key={index} className="category-tag">
                        {category}
                    </div>
                ))}
            </div>
            <div className="card-container">
                <div className="candy-card">
                    <div className="card-content">
                        <h3>{content[currentLang].project1.title}</h3>
                        <img src="images/css-positioning-tutorial.png" alt="CSS Positioning Tutorial" className="project-image" />
                        <p className="project-description">{content[currentLang].project1.description}</p>
                        <div className="tech-stack">
                            {content[currentLang].project1.tech.map((tech, index) => (
                                <span key={index} className="tech-tag">{tech}</span>
                            ))}
                        </div>
                        <div className="card-links">
                            <a href="https://github.com/sznzn/position-css" target="_blank" className="btn-code">
                                <span>GitHub</span>
                            </a>
                            <a href="https://sznzn.github.io/position-css/" target="_blank" className="btn-demo">
                                <span>Demo</span>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="candy-card">
                    <div className="card-content">
                        <h3>{content[currentLang].project2.title}</h3>
                        <img src="https://picsum.photos/200/150?random=2" alt="project screenshot" className="project-image" />
                        <p className="project-description">{content[currentLang].project2.description}</p>
                        <div className="tech-stack">
                            {content[currentLang].project2.tech.map((tech, index) => (
                                <span key={index} className="tech-tag">{tech}</span>
                            ))}
                        </div>
                        <div className="card-links">
                            <a className="btn-code disabled">
                                <span>Not Available</span>
                            </a>
                            <a className="btn-demo disabled">
                                <span>Coming Soon</span>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="candy-card">
                    <div className="card-content">
                        <h3>{content[currentLang].project3.title}</h3>
                        <img src="https://picsum.photos/200/150?random=3" alt="project screenshot" className="project-image" />
                        <p className="project-description">{content[currentLang].project3.description}</p>
                        <div className="tech-stack">
                            {content[currentLang].project3.tech.map((tech, index) => (
                                <span key={index} className="tech-tag">{tech}</span>
                            ))}
                        </div>
                        <div className="card-links">
                            <a className="btn-code disabled">
                                <span>Not Available</span>
                            </a>
                            <a className="btn-demo disabled">
                                <span>Coming Soon</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <p className="coming-soon">{content[currentLang].comingSoon}</p>
        </section>
    );
};

export default Projects;
