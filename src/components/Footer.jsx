import {Link} from "react-router-dom";
import data from "../data.js"
import { useContext } from "react"
import { OptionsContext } from "../context/OptionsContext"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faHandPointRight} from "@fortawesome/free-solid-svg-icons"

export default function Footer() {

    const {language, darkMode} = useContext(OptionsContext);

    return (
        <footer className="bg-[#F9F9F9] pt-20 pb-30 px-28 dark:bg-[#141414]" data-theme={darkMode ? "dark" : "light"}>
            <h2 className="text-[#1F2937] font-semibold text-[2.6rem] leading-[125%] lg:w-[33rem] sm:w-fit mb-10 dark:text-[#AEBCCF] sm:text-center lg:text-start">{data[language].footerSection.title}</h2>
            <section className="footer-links flex lg:flex-row sm:flex-col justify-between">
                <div className="email sm:text-center lg:text-start">
                    <Link className="text-[#AF0C48] text-xl font-medium tracking-[5%] underline underline-offset-5 dark:text-[#BAB2E7]"><FontAwesomeIcon icon={faHandPointRight} className="text-yellow-500 mr-2"/> {data[language].footerSection.email}</Link>
                </div>
                <div className="socials flex gap-4 lg:justify-between sm:justify-center lg:pt-0 sm:pt-4">
                    <Link className="text-[#0A0A14] text-lg leading-[150%] font-medium dark:text-[#E1E1FF]">{data[language].footerSection.blog}</Link>
                    <Link className="text-[#00AB6B] text-lg leading-[150%] font-medium dark:text-[#17D18B]">{data[language].footerSection.github}</Link>
                    <Link className="text-[#0077B5] text-lg leading-[150%] font-medium dark:text-[#0BA6F6]">{data[language].footerSection.linkedin}</Link>
                </div>
            </section>
        </footer>
    )
}