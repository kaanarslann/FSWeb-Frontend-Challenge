import {Link} from "react-router-dom";
import data from "../data.js"
import { useContext } from "react"
import { OptionsContext } from "../context/OptionsContext"

export default function Projects() {

    const {language} = useContext(OptionsContext);

    return (
        <main>
            <h2>{data[language].projectsSection.title}</h2>
            <section className="projects-list">
                <div className="project-item">
                    {data[language].projectsSection.projects.map((project, index) => (
                        <div key={index}>
                            <img src={project.image}/>
                            <h3>{project.name}</h3>
                            <p>{project.description}</p>
                            <div className="buttons">
                                {project.buttons.map((button, index) => (
                                    <button key={index}>{button.text}</button>
                                ))}
                            </div>
                                <div className="links">
                                {project.links.map((link, index) => (
                                    <Link key={index}>{link.text}</Link>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    )
}