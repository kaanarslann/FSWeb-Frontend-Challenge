import data from "../data.js"
import { useContext } from "react"
import { OptionsContext } from "../context/OptionsContext"

export default function Hero() {

    const {language} = useContext(OptionsContext);

    return (
        <main className="flex justify-between items-center">
            <section className="hero-left">
            <div className="flex items-center space-x-4">
                <div className="w-25 h-[2px] bg-indigo-800"></div>
                <span className="text-indigo-700 font-medium text-xl">Kaan Arslan</span>
            </div>
                <h1 className="text-7xl font-bold mt-8 leading-none w-[37.25rem]">{data[language].heroSection.title1}<br/>{data[language].heroSection.title2}</h1>
                <p className="text-gray-500 text-lg font-normal w-[34.5rem] mt-8 leading-7">{data[language].heroSection.intro}</p>
                <div className="hero-buttons mt-8 flex gap-3">
                    {data[language].heroSection.buttons.map((button, index) => (
                        <button key={index} className="w-[131px] h-[52px] text-indigo-800 border border-indigo-800 rounded-md hover:bg-indigo-800 hover:text-white">{button.text}</button>
                    ))}
                </div>
            </section>
            <section className="hero-right">
                <img src={data.en.heroSection.profileImage}/>
            </section>
        </main>
    )
}