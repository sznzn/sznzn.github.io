import React from 'react';

const Profile = () => {
    return (
        <div class="profile-section">
            <div class="profile-image">
                <img src="images/my-photo.png" alt="My Photo"/>
            </div>
            <div class="profile-text">
                <h1 data-lang="en">Welcome to My Sweet Portfolio</h1>
                <h1 data-lang="fr">Bienvenue sur Mon Portfolio</h1>
                <h1 data-lang="zh">欢迎来到我的作品集</h1>
                <p class="subtitle" data-lang="en">Web Developer | Currently focusing on Symfony & exploring React</p>
                <p class="subtitle" data-lang="fr">Développeur Web | Focus sur Symfony & découverte de React</p>
                <p class="subtitle" data-lang="zh">网页开发者 | 专注于 Symfony 开发并探索 React</p>
            </div>
        </div>
    );
};

export default Profile;
    