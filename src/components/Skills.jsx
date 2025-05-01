import data from "../data.js"
import { useContext } from "react"
import { OptionsContext } from "../context/OptionsContext"

export default function Skills() {

    const {language, darkMode} = useContext(OptionsContext);

    return (
        <main className="px-28 pt-25 dark:bg-[#252128]" data-theme={darkMode ? "dark" : "light"}>
            <h2 className="font-semibold text-5xl text-gray-800 dark:text-[#AEBCCF] md:text-center lg:text-start">{data[language].skillsSection.title}</h2>
            <section className="skills mt-4">
                <div className="skill-item flex justify-between lg:flex-row md:flex-col">
                    {data[language].skillsSection.skills.map((skill, index) => (
                        <div key={index} className="w-[18.75rem] h-[6.5rem]">
                            <h3 className="text-indigo-700 text-3xl mt-8 font-medium leading-7 dark:text-[#B7AAFF]">{skill.name}</h3>
                            <p className="text-gray-500 font-normal mt-8 text-xs leading-5 dark:text-white">{skill.info}</p>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    )
}