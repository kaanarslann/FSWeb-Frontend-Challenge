
import { useContext } from "react"
import { OptionsContext } from "../context/OptionsContext"

export default function Profile() {

    const {language, darkMode, apiData} = useContext(OptionsContext);

    return (
        <section className="px-28 pt-25 dark:bg-[#252128]" data-theme={darkMode ? "dark" : "light"}>
            <h2 className="font-semibold text-5xl text-gray-800 dark:text-[#AEBCCF] sm:text-center lg:text-start">{apiData[language].profileSection.title}</h2>
            <section className="flex justify-between mt-4 lg:flex-row sm:flex-col">
                <section className="profile-left flex flex-col lg:w-[50%] sm:w-fit lg:pl-0 sm:pl-25">
                    <h3 className="text-indigo-700 text-3xl font-medium mt-8 mb-8 dark:text-[#B7AAFF]">{apiData[language].profileSection.profile}</h3>
                    <div>
                        <div className="mb-4 flex text-black lg:text-lg sm:text-sm leading-[200%] dark:text-white">
                            <span className="font-semibold w-1/2">{apiData[language].profileSection.birthday1}</span>
                            <span className="font-normal">{apiData[language].profileSection.birthday2}</span>
                        </div>
                        <div className="mb-4 flex text-black lg:text-lg sm:text-sm leading-[200%] dark:text-white">
                            <span className="font-semibold w-1/2">{apiData[language].profileSection.city1}</span>
                            <span className="font-normal">{apiData[language].profileSection.city2}</span>
                        </div>
                        <div className="mb-4 flex text-black lg:text-lg sm:text-sm leading-[200%] dark:text-white">
                            <span className="font-semibold lg:w-1/2 sm:w-2/3">{apiData[language].profileSection.education1}</span>
                            <span className="font-normal">{apiData[language].profileSection.education2}<br/>{apiData[language].profileSection.education3}</span>
                        </div>
                        <div className="mb-4 flex text-black lg:text-lg sm:text-sm leading-[200%] dark:text-white">
                            <span className="font-semibold w-1/2">{apiData[language].profileSection.role1}</span>
                            <span className="font-normal">{apiData[language].profileSection.role2}</span>
                        </div>
                    </div>
                </section>
                <section className="profile-righ lg:w-[50%] sm:w-fit pl-25">
                    <h3 className="text-indigo-700 text-3xl font-medium mt-8 mb-8 dark:text-[#B7AAFF]">{apiData[language].profileSection.aboutMe}</h3>
                    <div className="lg:w-[34rem] sm:w-fit">
                        <p className="text-gray-500 lg:text-lg sm:text-base font-normal leading-[150%] mb-10 dark:text-white">{apiData[language].profileSection.aboutMeText1}</p>
                        <p className="text-gray-500 lg:text-lg sm:text-base font-normal leading-[150%] dark:text-white">{apiData[language].profileSection.aboutMeText2}</p>
                    </div>
                </section>
            </section>
        </section>
    )
}