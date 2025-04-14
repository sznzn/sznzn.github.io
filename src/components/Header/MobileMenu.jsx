// src/components/Header/MobileMenu.jsx
import React, { useState } from 'react';
import { useLanguage } from '../../hooks/useLanguage';
import './style.css';

const MobileMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { currentLang, switchLanguage } = useLanguage();

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <div className="mobile-menu-container">
            {/* 菜单按钮 */}
            <button 
                className={`candy-menu-btn ${isOpen ? 'active' : ''}`}
                onClick={toggleMenu}
            >
            </button>

            {/* 移动端菜单 */}
            <div className={`mobile-menu ${isOpen ? 'active' : ''}`}>
                <ul>
                    <li>
                        <a href="#about" onClick={closeMenu}>
                            {currentLang === 'en' ? 'About me' : 
                             currentLang === 'fr' ? 'À Propos' : '关于我'}
                        </a>
                    </li>
                    <li>
                        <a href="#skills" onClick={closeMenu}>
                            {currentLang === 'en' ? 'Skills' : 
                             currentLang === 'fr' ? 'Compétences' : '技能'}
                        </a>
                    </li>
                    <li>
                        <a href="#projects" onClick={closeMenu}>
                            {currentLang === 'en' ? 'Projects' : 
                             currentLang === 'fr' ? 'Projets' : '项目'}
                        </a>
                    </li>
                    <li>
                        <a href="#contact" onClick={closeMenu}>
                            {currentLang === 'en' ? 'Contact' : 
                             currentLang === 'fr' ? 'Contact' : '联系'}
                        </a>
                    </li>
                    <li>
                        <a href="#blog" onClick={closeMenu}>
                            {currentLang === 'en' ? 'Blog' : 
                             currentLang === 'fr' ? 'Blog' : '博客'}
                        </a>
                    </li>
                </ul>

                {/* 语言切换按钮 */}
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
            </div>
        </div>
    );
};

export default MobileMenu;