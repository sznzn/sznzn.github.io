import React from 'react';
import { useLanguage } from '../../hooks/useLanguage';

const Navigation = () => {
    const { currentLang, switchLanguage } = useLanguage();

    return (
        <nav className="nav-menu">
            <ul>
                <li>
                    <a href="#about" data-lang="en">About me</a>
                    <a href="#about" data-lang="fr">À Propos</a>
                    <a href="#about" data-lang="zh">关于我</a>
                </li>
                <li>
                    <a href="#skills" data-lang="en">Skills</a>
                    <a href="#skills" data-lang="fr">Compétences</a>
                    <a href="#skills" data-lang="zh">技能</a>
                </li>
                <li>
                    <a href="#projects" data-lang="en">Projects</a>
                    <a href="#projects" data-lang="fr">Projets</a>
                    <a href="#projects" data-lang="zh">项目</a>
                </li>
                <li>
                    <a href="#contact" data-lang="en">Contact</a>
                    <a href="#contact" data-lang="fr">Contact</a>
                    <a href="#contact" data-lang="zh">联系</a>
                </li>
                <li>
                    <a href="#blog" data-lang="en">Blog</a>
                    <a href="#blog" data-lang="fr">Blog</a>
                    <a href="#blog" data-lang="zh">博客</a>
                </li>
            </ul>
            <div className="lang-switch">
                <button 
                    className={`lang-btn ${currentLang === 'en' ? 'active' : ''}`}
                    onClick={() => switchLanguage('en')}
                    data-lang="en"
                >
                    EN
                </button>
                <button 
                    className={`lang-btn ${currentLang === 'fr' ? 'active' : ''}`}
                    onClick={() => switchLanguage('fr')}
                    data-lang="fr"
                >
                    FR
                </button>
                <button 
                    className={`lang-btn ${currentLang === 'zh' ? 'active' : ''}`}
                    onClick={() => switchLanguage('zh')}
                    data-lang="zh"
                >
                    中
                </button>
            </div>
        </nav>
    );
};

export default Navigation;