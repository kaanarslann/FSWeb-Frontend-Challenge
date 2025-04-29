import {Link} from "react-router-dom";
import data from "../data.js"
import { useContext } from "react"
import { OptionsContext } from "../context/OptionsContext"

export default function Footer() {

    const {language} = useContext(OptionsContext);

    return (
        <footer className="bg-[#F9F9F9] pt-20 pb-30 px-60">
            <h2 className="text-[#1F2937] font-semibold text-5xl leading-[125%] w-[33rem] mb-10">{data[language].footerSection.title}</h2>
            <section className="footer-links flex justify-between">
                <div className="email">
                    <Link className="text-[#AF0C48] text-2xl font-medium tracking-[5%] underline underline-offset-5">{data[language].footerSection.email}</Link>
                </div>
                <div className="socials flex gap-4">
                    <Link className="text-[#0A0A14] text-lg leading-[150%] font-medium">{data[language].footerSection.blog}</Link>
                    <Link className="text-[#00AB6B] text-lg leading-[150%] font-medium">{data[language].footerSection.github}</Link>
                    <Link className="text-[#0077B5] text-lg leading-[150%] font-medium">{data[language].footerSection.linkedin}</Link>
                </div>
            </section>
        </footer>
    )
}