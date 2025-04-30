import data from "../data.js"
import { useContext } from "react"
import { OptionsContext } from "../context/OptionsContext"

export default function Profile() {

    const {language, darkMode} = useContext(OptionsContext);

    return (
        <main className="px-60 pt-25 dark:bg-[#252128]" data-theme={darkMode ? "dark" : "light"}>
            <h2 className="font-semibold text-5xl text-gray-800 dark:text-[#AEBCCF]">{data[language].profileSection.title}</h2>
            <section className="flex justify-between mt-4">
                <section className="profile-left flex flex-col w-[40%]">
                    <h3 className="text-indigo-700 text-3xl font-medium mt-8 mb-8 dark:text-[#B7AAFF]">{data[language].profileSection.profile}</h3>
                    <div>
                        <div className="mb-4 flex text-black text-lg leading-[200%] dark:text-white">
                            <span className="font-semibold w-1/2">{data[language].profileSection.birthday}</span>
                            <span className="font-normal">14.09.1992</span>
                        </div>
                        <div className="mb-4 flex text-black text-lg leading-[200%] dark:text-white">
                            <span className="font-semibold w-1/2">{data[language].profileSection.city}</span>
                            <span className="font-normal">İstanbul</span>
                        </div>
                        <div className="mb-4 flex text-black text-lg leading-[200%] dark:text-white">
                            <span className="font-semibold w-1/2">{data[language].profileSection.education}</span>
                            <span className="font-normal">İstanbul Aydın Ünv.<br/>Makine Müh. Yüksek Lisans, 2020</span>
                        </div>
                        <div className="mb-4 flex text-black text-lg leading-[200%] dark:text-white">
                            <span className="font-semibold w-1/2">{data[language].profileSection.role}</span>
                            <span className="font-normal">Frontend, UI</span>
                        </div>
                    </div>
                </section>
                <section className="profile-righ w-[60%] pl-25">
                    <h3 className="text-indigo-700 text-3xl font-medium mt-8 mb-8 dark:text-[#B7AAFF]">{data[language].profileSection.aboutMe}</h3>
                    <div className="w-[34rem]">
                        <p className="text-gray-500 text-lg font-normal leading-[150%] mb-10 dark:text-white">{data[language].profileSection.aboutMeText1}</p>
                        <p className="text-gray-500 text-lg font-normal leading-[150%] dark:text-white">{data[language].profileSection.aboutMeText2}</p>
                    </div>
                </section>
            </section>
        </main>
    )
}