import React, { createContext, useContext, useEffect } from 'react';

const ThemeContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
    // Locked to light (white premium) as per user request
    const theme = 'light';

    useEffect(() => {
        // Apply theme class to document element
        const root = window.document.documentElement;
        root.classList.remove('dark');
        root.classList.add('light');
    }, []);

    return (
        <ThemeContext.Provider value={{ theme }}>
            {children}
        </ThemeContext.Provider>
    );
};
