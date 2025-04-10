import React from 'react';
import Navigation from './Navigation';
import Profile from './Profile';
import './style.css';

const Header = () => {
    return  (
        <header className="candy-header">
            <Navigation />
            <Profile />
            <div className='candy-container'></div>
        </header>
    );
};

export default Header;