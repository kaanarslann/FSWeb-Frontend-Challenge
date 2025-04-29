import {Link} from "react-router-dom";

export default function Footer() {
    return (
        <footer className="bg-[#F9F9F9]">
            <h2>Let's work together on your next product.</h2>
            <section className="footer-links">
                <div className="email">
                    <Link>kaanarslan@hotmail.com</Link>
                </div>
                <div className="socials">
                    <Link>Personal Blog</Link>
                    <Link>Github</Link>
                    <Link>Linkedin</Link>
                </div>
            </section>
        </footer>
    )
}