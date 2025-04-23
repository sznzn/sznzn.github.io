import React from 'react';
import { useLanguage } from '../../hooks/useLanguage';

const Profile = () => {
    const { currentLang } = useLanguage();

    return (
        <div className="profile-section">
            <div className="profile-image">
                <img src="images/lovely.png" alt="My Photo"/>
            </div>
            <div class="profile-text">
                <h1>{currentLang === 'en' ? 'Welcome to My Sweet Portfolio' : 
                    currentLang === 'fr' ? 'Bienvenue sur Mon Portfolio' : '欢迎来到我的作品集'}</h1>
                <p class="subtitle">{currentLang === 'en' ? 'Web Developer | Currently focusing on Symfony & exploring React' : 
                    currentLang === 'fr' ? 'Développeur Web | Focus sur Symfony & découverte de React' : '网页开发者 | 专注于 Symfony 开发并探索 React'}</p>
            </div>
        </div>
    );
};

export default Profile;
    