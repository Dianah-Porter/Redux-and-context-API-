import { useState } from "react";
import { themeContext } from "./Createcontext";

function ThemeProvider({ children }) {
    const [theme, setTheme] = useState("light");
    const toggleTheme = () =>{
        setTheme(t => t === 'light' ? 'dark' : 'light');
    }

    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}

        </ThemeContext.Provider>
    )
}