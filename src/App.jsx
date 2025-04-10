import React from 'react';
import { LanguageProvider } from './context/LanguageProvider';
import Header from './components/Header';

import './styles/global.css';

const App = () => {
  return (
    <LanguageProvider>
      
      <div id="top">
        <Header />
        <a href="#top" className="back-to-top" title="Back to top">↑</a>
      </div>
    {/*这是一个语言提供者，它提供了一个语言上下文，并管理语言状态 */}
    </LanguageProvider>
  );
};

export default App;
