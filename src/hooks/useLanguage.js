// src/hooks/useLanguage.js
import { useContext } from 'react'; //导入 useContext hook
import { LanguageContext } from '../context/LanguageContext'; //导入我们之前创建的语言上下文

//创建一个自定义的hook，用于在组件中使用语言上下文
export const useLanguage = () => {
    const context = useContext(LanguageContext); //使用 useContext 获取语言上下文

    //如果上下文不存在，抛出一个错误
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context; //返回上下文
};