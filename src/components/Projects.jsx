import {Link} from "react-router-dom";

export default function Projects() {
    return (
        <main>
            <h2>Projects</h2>
            <section className="projects-list">
                <div className="project-item">
                    <img />
                    <h3>Workintech</h3>
                    <p>
                    A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline. This was created with vanilla JS, SCSS and Parcel Bundler and is available as a NPM package and the git repository makes any type of customization to code and themes possible.
                    </p>
                    <div className="buttons">
                        <button>react</button>
                        <button>redux</button>
                        <button>axios</button>
                    </div>
                    <div className="links">
                        <Link>Github</Link>
                        <Link>View Site</Link>
                    </div>
                </div>
            </section>
        </main>
    )
}