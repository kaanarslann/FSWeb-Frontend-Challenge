import {Link} from "react-router-dom";
import data from "../data.js"
import { useContext } from "react"
import { OptionsContext } from "../context/OptionsContext"

export default function Projects() {

    const {language, darkMode} = useContext(OptionsContext);

    return (
        <section className="px-28 py-25 dark:bg-[#252128]" data-theme={darkMode ? "dark" : "light"}>
            <h2 className="font-semibold text-5xl mb-8 text-gray-800 dark:text-[#AEBCCF] md:text-center lg:text-start">{data[language].projectsSection.title}</h2>
            <section className="projects-list">
                <div className="project-item flex lg:justify-between md:justify-center lg:flex-row md:flex-col lg:ml-0 md:ml-34">
                    {data[language].projectsSection.projects.map((project, index) => (
                        <div key={index} className="w-72 md:text-center lg:text-start">
                            <img className="mb-4" src={project.image}/>
                            <h3 className="text-indigo-700 text-3xl font-medium mb-4 dark:text-[#CFCBFF]">{project.name}</h3>
                            <p className="text-sm text-gray-500 font-normal leading-[125%] mb-4 dark:text-[white]">{project.description}</p>
                            <div className="buttons text-sm text-indigo-800 font-medium leading-[100%] flex gap-2 mb-4 dark:text-[#8F88FF] lg:justify-between md:justify-center">
                                {project.buttons.map((button, index) => (
                                    <button key={index} className="border border-indigo-800 rounded-[4px] w-17 h-7 cursor-pointer dark:bg-[#383838] dark:border-[#8F88FF]">{button.text}</button>
                                ))}
                            </div>
                                <div className="links flex justify-between lg:mb-0 md:mb-4">
                                {project.links.map((link, index) => (
                                    <Link key={index} className="text-indigo-800 text-base leading-4 underline dark:text-[#E1E1FF]">{link.text}</Link>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </section>
    )
}