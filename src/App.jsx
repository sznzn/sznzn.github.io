import React from 'react';
import AnimatedContent from './components/common/AnimatedContent';
import { LanguageProvider } from './context/LanguageProvider';
import { useLanguage } from './hooks/useLanguage';  
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import CandyAnimation from './components/CandyAnimation';


const AppContent = () => {
  const { currentLang } = useLanguage();
  return (
    <AnimatedContent currentLang={currentLang}>
    
      <div id="top" className="app-container">
        <CandyAnimation />
        <Header />
        <Main />
        <Footer />
        <a href="#top" className="back-to-top" title="Back to top">↑</a>
      </div>
    
    </AnimatedContent>
  );
};

const App = () => {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
};

export default App;
