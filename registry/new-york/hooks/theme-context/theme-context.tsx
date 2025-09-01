import React, { createContext, useContext, useState, useCallback, ReactNode } from 'react';

// Define types for the context
type Theme = 'light' | 'dark';

interface ThemeContextType {
    theme: Theme;
    toggleTheme: () => void;
}

// Default state for context
const defaultState: ThemeContextType = {
    theme: 'light',
    toggleTheme: () => { },  // Placeholder for toggle function
};

// Create context with default value
const ThemeContext = createContext<ThemeContextType>(defaultState);

// Context Provider component
interface ThemeProviderProps {
    children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
    const [theme, setTheme] = useState<Theme>('light');

    // Memoize the toggleTheme function to avoid unnecessary re-renders
    const toggleTheme = useCallback(() => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    }, []);

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

// Custom hook to use the theme context in other components
export const useTheme = () => {
    const context = useContext(ThemeContext);

    // Throw an error if the hook is used outside of a provider
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }

    return context;
};
