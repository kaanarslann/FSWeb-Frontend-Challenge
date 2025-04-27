import { useContext } from "react"
import { OptionsContext } from "../context/OptionsContext"
import data from "../data.js"

export default function Header() {

    const {language} = useContext(OptionsContext);

    return (
        <header>
            <section className='toggle-options flex justify-end'>
                <label className="inline-flex items-center cursor-pointer">
                <input type="checkbox" value="" className="sr-only peer" />
                <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-[#FFE86E] after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#4731D3] dark:peer-checked:bg-blue-600"></div>
                <span className="ms-3 text-lg font-medium text-gray-900 dark:text-gray-300">DARK MODE | TÜRKÇE'YE GEÇ</span>
                </label>
            </section>
            <section className='flex justify-between mt-4'>
                <div className='m-3 flex h-16 w-16 items-center justify-center rounded-full bg-[#EEEBFF]'>
                <span className='text-[#7B61FF] text-2xl rotate-30 font-semibold'>K</span>
                </div>
                <nav className='flex items-center gap-8 text-lg text-gray-500 font-medium'>
                {data[language].headerSection.navButtons.map((button, index) => (
                    <button key={index} className='hover:border border-indigo-800 rounded-md px-8 py-3'>{button.text}</button>
                ))}
                </nav>
            </section>
        </header>
    )
}