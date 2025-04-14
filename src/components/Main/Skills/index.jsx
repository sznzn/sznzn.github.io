import React, { useState } from 'react';
import { LanguageContext } from '../../../context/LanguageContext';
import './style.css';

const Skills = () => {
    const { currentLang } = React.useContext(LanguageContext);
    const [hoveredSkill, setHoveredSkill] = useState(null);

    const content = {
        en: {
            title: "My Sweet Skills",
            description: "Here are my technical skills and proficiency levels. Hover to see my true potential! 😉"
        },
        fr: {
            title: "Mes Douces Compétences",
            description: "Voici mes compétences techniques et mes niveaux de maîtrise. Survolez pour voir mon vrai potentiel ! 😉"
        },
        zh: {
            title: "我的技能专长",
            description: "以下是我的技术技能和熟练程度。悬停查看我的真实潜力！😉"
        }
    };

    const skills = [
        { name: "CSS/SASS", icon: "✨", level: 80, hoverLevel: 95 },
        { name: "JavaScript", icon: "🌟", level: 60, hoverLevel: 85 },
        { name: "React", icon: "⚛️", level: 30, hoverLevel: 90 },
        { name: "PHP", icon: "🐘", level: 60, hoverLevel: 88 },
        { name: "Symfony", icon: "🚀", level: 40, hoverLevel: 95 }
    ];

    return (
        <section id="skills" className="candy-section">
            <h2>{content[currentLang].title}</h2>
            <p className="skills-description">{content[currentLang].description}</p>
            <div className="skills-container">
                {skills.map((skill, index) => (
                    <div 
                        key={index}
                        className="skill-bubble"
                        onMouseEnter={() => setHoveredSkill(index)}
                        onMouseLeave={() => setHoveredSkill(null)}
                    >
                        <div className="skill-header">
                            <span className="skill-icon">{skill.icon}</span>
                            <span className="skill-name">{skill.name}</span>
                        </div>
                        <div className="progress-bar">
                            <div 
                                className="progress" 
                                style={{ 
                                    width: `${hoveredSkill === index ? skill.hoverLevel : skill.level}%`,
                                    transition: 'width 0.5s ease-in-out'
                                }}
                            >
                                <div className="progress-glow"></div>
                            </div>
                        </div>
                        <span className="skill-percent">
                            {hoveredSkill === index ? skill.hoverLevel : skill.level}%
                        </span>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
