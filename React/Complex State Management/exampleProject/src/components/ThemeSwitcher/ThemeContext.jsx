import { createContext, useState, useContext } from "react";

//1. create a theme context 
const ThemeContext= createContext();

//2. create a provider that will wrap all the components that need access to the context
export function ThemeProvider({ children }){
    const [theme, setTheme] = useState("light");
    function toggleTheme(){
        setTheme(theme === "light" ? "dark": "light");
    }
    return (
        <ThemeContext.Provider value = {{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )

}


//3. Optional but useful, create a custom hook for switching between themes 
// eslint-disable-next-line react-refresh/only-export-components
export function useTheme(){
    return useContext(ThemeContext);
}