import React, {createContext} from "react";
import { toast } from "react-toastify";
import axios from "axios";
import data from "../data.js";
import useLocalStorage from "../hooks/useLocalStorage.jsx";

export const OptionsContext = createContext();

export const OptionsContextProvider = ({children}) => {
    const [language, setLanguage] = useLocalStorage("language", "en");
    const [darkMode, setDarkMode] = useLocalStorage("darkMode", false);

    const toggleLanguage = () => {
        axios.post("https://reqres.in/api/workintech", data, {
            headers: {
                "x-api-key": "reqres-free-v1"
            }
        })
        .then((response) => {
            console.log(response.data);
            toast.success("Language changed successfully!");
            setLanguage((prevLanguage) => (prevLanguage === "en" ? "tr" : "en"));
        })
        .catch((error) => {
            console.log(error);
            toast.error("An error has occured!");
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