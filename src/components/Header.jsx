import { useContext } from "react"
import { OptionsContext } from "../context/OptionsContext"
import data from "../data.js"

export default function Header() {

    const {language, toggleLanguage, toggleDarkMode, darkMode} = useContext(OptionsContext);

    return (
        <header className="pt-6 px-28 dark:bg-[#252128]" data-theme={darkMode ? "dark" : "light"}>
            <section className='toggle-options flex justify-end mr-7'>
                <label className="inline-flex items-center cursor-pointer">
                <input type="checkbox" value="" className="sr-only peer" checked={darkMode} onChange={toggleDarkMode}/>
                <div className="relative w-11 h-6 bg-[#4731D3] dark:bg-[#3A3A3A] peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-[#FFE86E] after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#4731D3] dark:peer-checked:bg-[#3A3A3A] after:duration-300 after:ease-in-out after:translate-x-full peer-checked:after:translate-x-0 dark:after:mask-[radial-gradient(ellipse_at_30%_30%,_transparent_40%,_black_41%)]"></div>
                </label>
                <span className="text-lg font-medium text-[#777777] dark:text-gray-300 ml-4">{!darkMode ? data[language].headerSection.darkMode : data[language].headerSection.lightMode}</span>
                <span className="text-lg font-medium text-gray-900 dark:text-gray-300 ml-4">|</span>
                <span className="text-lg font-medium text-gray-900 dark:text-gray-300 ml-5"><span className="text-[#4731D3] cursor-pointer" onClick={toggleLanguage}>{data[language].headerSection.language1}</span> {data[language].headerSection.language2}</span>
            </section>
            <section className='flex justify-between mt-4'>
                <div className='m-3 flex h-16 w-16 items-center justify-center rounded-full bg-[#EEEBFF] dark:bg-[#4731D3]'>
                <span className='text-[#7B61FF] text-2xl rotate-30 font-semibold dark:text-[#8F88FF]'>K</span>
                </div>
                <nav className='flex items-center gap-8 text-lg text-gray-500 font-medium dark:hover:text-indigo-800 dark:text-[#6B7280]'>
                {data[language].headerSection.navButtons.map((button, index) => (
                    <button key={index} className='hover:border border-indigo-800 rounded-md px-8 py-3 dark:hover:bg-white cursor-pointer'>{button.text}</button>
                ))}
                </nav>
            </section>
        </header>
    )
}