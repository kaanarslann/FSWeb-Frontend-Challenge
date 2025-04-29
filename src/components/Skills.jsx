import data from "../data.js"
import { useContext } from "react"
import { OptionsContext } from "../context/OptionsContext"

export default function Skills() {

    const {language} = useContext(OptionsContext);

    return (
        <main className="px-60">
            <h2 className="font-semibold text-5xl">{data[language].skillsSection.title}</h2>
            <section className="skills mt-4">
                <div className="skill-item flex justify-between">
                    {data[language].skillsSection.skills.map((skill, index) => (
                        <div key={index} className="w-[300px] h-[104px]">
                            <h3 className="text-indigo-700 text-3xl mt-8 font-medium leading-7">{skill.name}</h3>
                            <p className="text-gray-500 font-normal mt-8 text leading-5">{skill.info}</p>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    )
}