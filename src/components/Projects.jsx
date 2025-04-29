import {Link} from "react-router-dom";
import data from "../data.js"
import { useContext } from "react"
import { OptionsContext } from "../context/OptionsContext"

export default function Projects() {

    const {language} = useContext(OptionsContext);

    return (
        <main>
            <h2 className="font-semibold text-5xl mb-8">{data[language].projectsSection.title}</h2>
            <section className="projects-list">
                <div className="project-item flex justify-between">
                    {data[language].projectsSection.projects.map((project, index) => (
                        <div key={index} className="w-72">
                            <img className="mb-4" src={project.image}/>
                            <h3 className="text-indigo-700 text-3xl font-medium mb-4">{project.name}</h3>
                            <p className="text text-gray-500 font-normal leading-[125%] mb-4">{project.description}</p>
                            <div className="buttons  text text-indigo-800 font-medium leading-[100%] flex gap-2 mb-4">
                                {project.buttons.map((button, index) => (
                                    <button key={index} className="border border-indigo-800 rounded-[4px] w-17 h-7 cursor-pointer">{button.text}</button>
                                ))}
                            </div>
                                <div className="links flex justify-between">
                                {project.links.map((link, index) => (
                                    <Link key={index} className="text-indigo-800 text-lg leading-4 underline">{link.text}</Link>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    )
}