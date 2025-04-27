import React, {createContext, useState} from "react";

export const OptionsContext = createContext();

export const OptionsContextProvider = ({children}) => {
    const [language, setLanguage] = useState("en");
    const [darkMode, setDarkMode] = useState(false);

    const toggleLanguage = () => {
        setLanguage((prevLanguage) => (prevLanguage === "en" ? "tr" : "en"));
    }

    const toggleDarkMode = () => {
        setDarkMode((prevMode) => !prevMode);
    }
    
    return (
        <OptionsContext.Provider value={{language,darkMode,toggleLanguage,toggleDarkMode}}>
            {children}
        </OptionsContext.Provider>
    );
}