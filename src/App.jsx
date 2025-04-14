import React from 'react';
import { LanguageProvider } from './context/LanguageProvider';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import CandyAnimation from './components/CandyAnimation';
import './styles/global.css';

const App = () => {
  return (
    <LanguageProvider>
      <div id="top" className="app-container">
        <CandyAnimation />
        <Header />
        <Main />
        <Footer />
        <a href="#top" className="back-to-top" title="Back to top">↑</a>
      </div>
    </LanguageProvider>
  );
};

export default App;
