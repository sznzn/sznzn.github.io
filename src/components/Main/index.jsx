import React from 'react';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import './style.css';

const Main = () => {
    return (
        <main className="main-container">
            <About />
            <Skills />
            <Projects />
        </main>
    );
};

export default Main;


