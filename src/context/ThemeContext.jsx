//从React库中导入必要的函数和hooks
import React, { createContext, useState, useContext } from 'react';
// createContext 创建上下文 Context的函数 ， 从创建全局状态容器
// useState 用于管理状态
// useContext 用于可以访问主题的状态
const ThemeContext = createContext();
// 创建一个新的Context对象
// 这个对象用于在整个应用中共享主题相关的数据。


// 定义ThemeProvider组件
// 这是一个高阶组件，用于包装需要访问主题的组件
export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
    };

    return (
        // 返回ThemeContext.Provider组件
        // value 提供给子组件的数据，包括主题状态和切换主题的函数
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
}; 