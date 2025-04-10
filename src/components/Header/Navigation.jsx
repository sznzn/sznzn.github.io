import React from 'react';
import { useLanguage } from '../../hooks/useLanguage';

const Navigation = () => {
    const { currentLang, switchLanguage } = useLanguage();

    return (
        <nav className="nav-menu">
            <ul>
                <li>
                    <a href="#about">
                        {currentLang === 'en' ? 'About me' : 
                            currentLang === 'fr' ? 'À Propos' : '关于我'}
                    </a>
                </li>
                <li>
                    <a href="#skills">
                        {currentLang === 'en' ? 'Skills' : 
                            currentLang === 'fr' ? 'Compétences' : '技能'}
                    </a>
                </li>
                <li>
                    <a href="#projects">
                        {currentLang === 'en' ? 'Projects' : 
                            currentLang === 'fr' ? 'Projets' : '项目'}
                    </a>
                </li>
                <li>
                    <a href="#contact">
                        {currentLang === 'en' ? 'Contact' : 
                            currentLang === 'fr' ? 'Contact' : '联系'}
                    </a>
                </li>
                <li>
                    <a href="#blog">
                        {currentLang === 'en' ? 'Blog' : 
                            currentLang === 'fr' ? 'Blog' : '博客'}
                    </a>
                </li>
            </ul>
            <div className="lang-switch">
                <button 
                    className={`lang-btn ${currentLang === 'en' ? 'active' : ''}`}
                    onClick={() => switchLanguage('en')}
                >
                    EN
                </button>
                <button 
                    className={`lang-btn ${currentLang === 'fr' ? 'active' : ''}`}
                    onClick={() => switchLanguage('fr')}
                >
                    FR
                </button>
                <button 
                    className={`lang-btn ${currentLang === 'zh' ? 'active' : ''}`}
                    onClick={() => switchLanguage('zh')}
                >
                    中
                </button>
            </div>
        </nav>
    );
};

export default Navigation;