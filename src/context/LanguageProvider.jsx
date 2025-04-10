// src/context/LanguageProvider.jsx
import React, { useState } from 'react';
import { LanguageContext } from './LanguageContext';

export const LanguageProvider = ({ children }) => {
    const [currentLang, setCurrentLang] = useState('en');

    const switchLanguage = (lang) => {
        setCurrentLang(lang);
    };

    return (
        <LanguageContext.Provider value={{ currentLang, switchLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
    // 上下文提供组织者组件，用来包装其他组件的。
};

