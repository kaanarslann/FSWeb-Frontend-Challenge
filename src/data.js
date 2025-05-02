import profile from "./assets/profile.png";
import project1 from "./assets/project1.png";
import project2 from "./assets/project2.png";
import project3 from "./assets/project3.png";
import {faGithub, faLinkedinIn} from "@fortawesome/free-brands-svg-icons"

const data = {
    en: {
        headerSection: {
            navButtons: [
                {
                    text: "Skills",
                },
                {
                    text: "Projects",
                },
                {
                    text: "Hire me",
                },
            ],
            nameIcon: "K",
            darkMode: "DARK MODE",
            lightMode: "LIGHT MODE",
            language1: "TÜRKÇE'YE",
            language2: "GEÇ",
        },
        heroSection: {
            name: "Kaan Arslan",
            title1: "Creative thinker",
            title2: "Minimalist lover",
            intro: "Hi, I’m Kaan. I’m a full-stack developer. If you are looking for a Developer who to craft solid and scalable frontend products with great user experiences. Let’s shake hands with me.",
            buttons: [
                {
                    text: "Hire me",
                    link: "#",
                    icon: "",
                },
                {
                    text: "Github",
                    link: "https://github.com/kaanarslann?tab=repositories",
                    icon: faGithub,
                },
                {
                    text: "Linkedin",
                    link: "https://www.linkedin.com/in/kaan-arslan-6a3b60138/",
                    icon: faLinkedinIn,
                }
            ],
            profileImage: profile,
        },
        skillsSection: {
            title: "Skills",
            skills: [
                {
                    name: "JavaScript",
                    info: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                },
                {
                    name: "React.Js",
                    info: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                },
                {
                    name: "Node.Js",
                    info: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                }
            ],
        },
        profileSection: {
            title: "Profile",
            profile: "Profile",
            birthday1: "Birth Date",
            birthday2: "14.09.1992",
            city1: "City ​​of Residence",
            city2: "İstanbul",
            education1: "Education Status",
            education2: "İstanbul Aydın Uni.",
            education3: "Mechanical Eng. Master's Degree, 2020",
            role1: "Preferred Role",
            role2: "Frontend, UI",
            aboutMe: "About Me",
            aboutMeText1: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam aut, odit laborum aliquam voluptatum nisi mollitia.",
            aboutMeText2: "Minima accusamus ratione soluta aperiam sit voluptate? Dicta quod deserunt quam temporibus cumque magnam!",
        },
        projectsSection: {
            title: "Projects",
            projects: [
                {
                    name: "Workintech",
                    description: "A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline. This was created with vanilla JS, SCSS and Parcel Bundler and is available as a NPM package and the git repository makes any type of customization to code and themes possible.",
                    image: project1,
                    buttons: [
                        {
                            text: "react",
                            link: "#",
                        },
                        {
                            text: "redux",
                            link: "#",
                        },
                        {
                            text: "axios",
                            link: "#",
                        },
                    ],
                    links: [
                        {
                            text: "Github",
                            link: "#",
                        },
                        {
                            text: "View Site",
                            link: "#",
                        },
                    ],
                },
                {
                    name: "Random Jokes",
                    description: "A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline. This was created with vanilla JS, SCSS and Parcel Bundler and is available as a NPM package and the git repository makes any type of customization to code and themes possible.",
                    image: project2,
                    buttons: [
                        {
                            text: "react",
                            link: "#",
                        },
                        {
                            text: "redux",
                            link: "#",
                        },
                        {
                            text: "axios",
                            link: "#",
                        },
                    ],
                    links: [
                        {
                            text: "Github",
                            link: "#",
                        },
                        {
                            text: "View Site",
                            link: "#",
                        },
                    ],
                },
                {
                    name: "Journey",
                    description: "A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline. This was created with vanilla JS, SCSS and Parcel Bundler and is available as a NPM package and the git repository makes any type of customization to code and themes possible.",
                    image: project3,
                    buttons: [
                        {
                            text: "react",
                            link: "#",
                        },
                        {
                            text: "redux",
                            link: "#",
                        },
                        {
                            text: "axios",
                            link: "#",
                        },
                    ],
                    links: [
                        {
                            text: "Github",
                            link: "#",
                        },
                        {
                            text: "View Site",
                            link: "#",
                        },
                    ],
                },
            ]
        },
        footerSection: {
            title: "Let's work together on your next product.",
            email: "kaanarslan_hp@hotmail.com",
            blog: "Personal Blog",
            github: "Github",
            githubLink: "#",
            linkedin: "Linkedin",
            linkedinLink: "#",
        },
    },
    tr: {
        headerSection: {
            navButtons: [
                {
                    text: "Yetenekler",
                },
                {
                    text: "Projeler",
                },
                {
                    text: "İşe al",
                },
            ],
            nameIcon: "K",
            darkMode: "KARANLIK MOD",
            lightMode: "AYDINLIK MOD",
            language1: "SWITCH TO",
            language2: "ENGLISH",
        },
        heroSection: {
            name: "Kaan Arslan",
            title1: "Yaratıcı düşünür",
            title2: "Minimalist sever",
            intro: "Merhaba, ben Kaan. Ben bir full-stack geliştiriciyim. Harika kullanıcı deneyimiyle, sağlam ve ölçeklenebilir frontend ürünler geliştiribelen bir geliştirici arıyorsanız, gelin el sıkışalım.",
            buttons: [
                {
                    text: "İşe al",
                    link: "#",
                    icon: "",
                },
                {
                    text: "Github",
                    link: "https://github.com/kaanarslann?tab=repositories",
                    icon: faGithub,
                },
                {
                    text: "Linkedin",
                    link: "https://www.linkedin.com/in/kaan-arslan-6a3b60138/",
                    icon: faLinkedinIn,
                }
            ],
            profileImage: profile,
        },
        skillsSection: {
            title: "Yetenekler",
            skills: [
                {
                    name: "JavaScript",
                    info: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                },
                {
                    name: "React.Js",
                    info: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                },
                {
                    name: "Node.Js",
                    info: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                }
            ],
        },
        profileSection: {
            title: "Profil",
            profile: "Profil",
            birthday1: "Doğum Tarihi",
            birthday2: "14.09.1992",
            city1: "İkamet Şehri",
            city2: "İstanbul",
            education1: "Eğitim Durumu",
            education2: "İstanbul Aydın Ünv.",
            education3: "Makine Müh. Yüksek Lisans 2020",
            role1: "Tercih Ettiği Rol ",
            role2: "Frontend, UI",
            aboutMe: "Hakkımda",
            aboutMeText1: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam aut, odit laborum aliquam voluptatum nisi mollitia.",
            aboutMeText2: "Minima accusamus ratione soluta aperiam sit voluptate? Dicta quod deserunt quam temporibus cumque magnam!",
        },
        projectsSection: {
            title: "Projeler",
            projects: [
                {
                    name: "Workintech",
                    description: "A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline. This was created with vanilla JS, SCSS and Parcel Bundler and is available as a NPM package and the git repository makes any type of customization to code and themes possible.",
                    image: project1,
                    buttons: [
                        {
                            text: "react",
                            link: "#",
                        },
                        {
                            text: "redux",
                            link: "#",
                        },
                        {
                            text: "axios",
                            link: "#",
                        },
                    ],
                    links: [
                        {
                            text: "Github",
                            link: "#",
                        },
                        {
                            text: "Websiteye Git",
                            link: "#",
                        },
                    ],
                },
                {
                    name: "Random Jokes",
                    description: "A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline. This was created with vanilla JS, SCSS and Parcel Bundler and is available as a NPM package and the git repository makes any type of customization to code and themes possible.",
                    image: project2,
                    buttons: [
                        {
                            text: "react",
                            link: "#",
                        },
                        {
                            text: "redux",
                            link: "#",
                        },
                        {
                            text: "axios",
                            link: "#",
                        },
                    ],
                    links: [
                        {
                            text: "Github",
                            link: "#",
                        },
                        {
                            text: "Websiteye Git",
                            link: "#",
                        },
                    ],
                },
                {
                    name: "Journey",
                    description: "A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline. This was created with vanilla JS, SCSS and Parcel Bundler and is available as a NPM package and the git repository makes any type of customization to code and themes possible.",
                    image: project3,
                    buttons: [
                        {
                            text: "react",
                            link: "#",
                        },
                        {
                            text: "redux",
                            link: "#",
                        },
                        {
                            text: "axios",
                            link: "#",
                        },
                    ],
                    links: [
                        {
                            text: "Github",
                            link: "#",
                        },
                        {
                            text: "Websiteye Git",
                            link: "#",
                        },
                    ],
                },
            ]
        },
        footerSection: {
            title: "Haydi bir sonraki ürününüzde birlikte çalışalım.",
            email: "kaanarslan_hp@hotmail.com",
            blog: "Kişisel Blog",
            github: "Github",
            githubLink: "#",
            linkedin: "Linkedin",
            linkedinLink: "#",
        },
    }, 
}

export default data;