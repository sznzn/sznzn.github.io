import React from 'react';
import { LanguageProvider } from './context/LanguageProvider';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer/index.jsx';
import './styles/global.css';

const App = () => {
  return (
    <LanguageProvider>
      <body id="top">
        <Header />
        <Main />
        <Footer />
        <a href="#top" className="back-to-top" title="Back to top">↑</a>
      </body>
    </LanguageProvider> // 这是一个语言提供者，它提供了一个语言上下文，并管理语言状态
  );
};

export default App;
