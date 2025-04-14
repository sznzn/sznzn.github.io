import React from 'react';
import Navigation from './Navigation';
import Profile from './Profile';
import MobileMenu from './MobileMenu';

const Header = () => {
    return  (
        <header className="candy-header">
            <MobileMenu />
            <Navigation />
            <Profile />
            <div className='candy-container'></div>
        </header>
    );
};

export default Header;