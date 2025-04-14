import React from 'react';
import { LanguageContext } from '../../context/LanguageContext';
import './style.css';

const Footer = () => {
    const { currentLang } = React.useContext(LanguageContext);

    const content = {
        en: {
            copyright: "© 2025 All rights reserved",
            madeWith: "Made with ❤️ by Xin",
            github: "GitHub",
            linkedin: "LinkedIn",
            email: "Email"
        },
        fr: {
            copyright: "© 2025 Tous droits réservés",
            madeWith: "Fait avec ❤️ par Xin",
            github: "GitHub",
            linkedin: "LinkedIn",
            email: "Email"
        },
        zh: {
            copyright: "© 2025 保留所有权利",
            madeWith: "由 ❤️ 制作",
            github: "GitHub",
            linkedin: "LinkedIn",
            email: "邮箱"
        }
    };

    return (
        <footer className="candy-footer">
            <div className="social-links" id="contact">
                <a target="_blank" href="https://github.com/sznzn" className="social-icon">
                    <span className="candy-icon">🍬</span>
                    {content[currentLang].github}
                </a>
                <a target="_blank" href="https://www.linkedin.com/in/xinxin-liu200" className="social-icon">
                    <span className="candy-icon">🍭</span>
                    {content[currentLang].linkedin}
                </a>
                <a href="mailto:xinxin.liu@outlook.fr" className="social-icon">
                    <span className="candy-icon">🍫</span>
                    {content[currentLang].email}
                </a>
            </div>
            <div className="footer-content">
                <p>{content[currentLang].copyright}</p>
                <p>{content[currentLang].madeWith} Xin</p>
            </div>
        </footer>
    );
};

export default Footer;
