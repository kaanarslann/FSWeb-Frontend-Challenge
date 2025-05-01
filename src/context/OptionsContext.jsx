import React, {createContext, useState} from "react";
import axios from "axios";
import data from "../data.js";

export const OptionsContext = createContext();

export const OptionsContextProvider = ({children}) => {
    const [language, setLanguage] = useState("en");
    const [darkMode, setDarkMode] = useState(false);

    const toggleLanguage = () => {
        axios.post("https://reqres.in/api/workintech", data, {
            headers: {
                "x-api-key": "reqres-free-v1"
            }
        })
        .then((response) => {
            console.log(response.data);
            setLanguage((prevLanguage) => (prevLanguage === "en" ? "tr" : "en"));
        })
        .catch((error) => {
            console.log(error);
        });
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