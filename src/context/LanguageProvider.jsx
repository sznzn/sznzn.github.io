// src/context/LanguageProvider.jsx
import React, { useState } from 'react';
import { LanguageContext } from './LanguageContext';

export const LanguageProvider = ({ children }) => {
    //首先创建语言状态
    const [currentLang, setCurrentLang] = useState('en');

    //其次创建切换语言的方法
    const switchLanguage = (lang) => {
        setCurrentLang(lang);
    };

    //通过 Context.Provider 的 value 属性，将当前语言状态和切换语言的方法传递给子组件
    return (
        <LanguageContext.Provider value={{ currentLang, switchLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
    // 上下文提供组织者组件，用来包装其他组件的。
};

