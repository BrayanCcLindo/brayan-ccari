import { ReactNode, createContext, useContext } from "react";
import { useTranslation } from "react-i18next";

export type Project = {
  title: string;
  slug: string;
  slogan: string;
  description: string[];
  languages: string[];
  cover: string;
  github: string;
  web: string;
  category: string;
  date: string;
  name: string;
  website: string;
  photos: string[];
};

export type Experience = {
  year: string;
  job: string;
  detail: string;
  description: string[];
};
export type TechStackType = {
  logo: string;
  title: string;
};
export type Education = {
  year: string;
  job: string;
  detail: string;
};
export type SkillsType = {
  skill: string;
  date: string;
};

type AppContextType = {
  education: Education[];
  experience: Experience[];
  skills: SkillsType[];
  projectNames: Project[];
  certifications: CertificationType[];
  techStackImg: TechStackType[];
};
export type CertificationType = {
  title: string;
  link: string;
  certificaded: string;
  year: string;
};

const PortfolioContext = createContext<AppContextType>({} as AppContextType);

export function PortfolioProvider({ children }: { children: ReactNode }) {
  const { t } = useTranslation("global");

  const experience = [
    {
      year: t("experience1.year"),
      job: t("experience1.job"),
      detail: t("experience1.detail"),
      description: [
        t("experience1.description1"),
        t("experience1.description2"),
        t("experience1.description3"),
        t("experience1.description4"),
      ],
    },
    {
      year: t("experience2.year"),
      job: t("experience2.job"),
      detail: t("experience2.detail"),
      description: [
        t("experience2.description1"),
        t("experience2.description2"),
        t("experience2.description3"),
        t("experience2.description4"),
      ],
    },
  ];

  const education = [
    {
      year: "2021",
      job: "Bachelor Degree in International Business",
      detail: "Continental University",
    },
    {
      year: "2022",
      job: "React Frontend Developer",
      detail: "Epic React Workshop",
    },
    {
      year: "2023",
      job: "Programming and Software Development",
      detail: "Platzi",
    },
    {
      year: "2023",
      job: "React Developer",
      detail: "LeonidasEsteban.com",
    },
  ];
  const skills = [
    {
      skill: "HTML",
      date: "2021 - Present",
    },
    {
      skill: "CSS",
      date: "2021 - Present",
    },
    {
      skill: "Styled-Components",
      date: "2022 - Present",
    },
    {
      skill: "Tailwind CSS",
      date: "2022 - Present",
    },
    {
      skill: "JavaScript",
      date: "2021 - Present",
    },
    {
      skill: "TypeScript",
      date: "2022 - Present",
    },
    {
      skill: "UI - UX",
      date: "2021 - Present",
    },
    {
      skill: "React Js",
      date: "2022 - Present",
    },
    {
      skill: "Git / GitHub",
      date: "2022 - Present",
    },
    {
      skill: "Responsive Design",
      date: "2022 - Present",
    },
    {
      skill: "Performance Optimization",
      date: "2022 - Present",
    },
  ];
  const projectNames = [
    {
      title: "Weather App",
      slug: "weather-app",
      slogan: t("Weather.slogan"),
      description: [
        t("Weather.description1"),
        t("Weather.description2"),
        t("Weather.description3"),
      ],
      category: t("Weather.category"),
      date: "11/2022",
      name: "Weather App",
      website: "brayancclindo.github.io/weather-app/",

      languages: ["Vanilla Javascript", "HTML", "CSS", "APIs RESTful"],
      cover: "../../images/weather-app.jpg",

      photos: [
        "../../images/weather-app/weatherApp-Photo1.jpg",
        "../../images/weather-app/weatherApp-Photo2.jpg",
        "../../images/weather-app/weatherApp-Photo3.jpg",
        "../../images/weather-app/weatherApp-Photo4.jpg",
      ],
      github: "https://github.com/BrayanCcLindo/weather-app",
      web: "https://brayancclindo.github.io/weather-app/",
    },
    {
      title: "Memory Game",
      slug: "memory-game",
      slogan: t("Memory.slogan"),
      description: [t("Memory.description1"), t("Memory.description2")],
      languages: [
        "NextJs",
        "TailwindCSS",
        "TypeScript",
        "Radix UI",
        "Responsive Design",
        "Vercel",
      ],
      cover: "../../images/memory-game/memory-game.jpg",
      category: t("Memory.category"),
      date: "06/2023",
      name: "Memory Game",
      website: "memory-game-gules-two.vercel.app/",
      photos: [
        "../../images/memory-game/memoryGamePhoto1.jpg",
        "../../images/memory-game/memoryGamePhoto2.jpg",
        "../../images/memory-game/memoryGamePhoto3.jpg",
        "../../images/memory-game/memoryGamePhoto4.jpg",
      ],
      github: "https://github.com/BrayanCcLindo/memory-game",
      web: "https://memory-game-gules-two.vercel.app/",
    },
    {
      title: "Task Board",
      slug: "task-board",
      slogan: t("TaskBoard.slogan"),
      description: [
        t("TaskBoard.description1"),
        t("TaskBoard.description2"),
        t("TaskBoard.description3"),
      ],
      languages: [
        "NextJs",
        "TailwindCSS",
        "TypeScript",
        "Radix UI",
        "Responsive Design",
        "Vercel",
      ],
      cover: "../../images/task-board/taskBoard-Portada.jpg",

      category: t("TaskBoard.category"),
      date: "05/2023",
      name: "Task Board",
      website: "board-task-bcl.vercel.app/",

      photos: [
        "../../images/task-board/TaskBoard-2.jpg",
        "../../images/task-board/TaskBoard-1.jpg",
        "../../images/task-board/TaskBoard-3.jpg",
      ],
      github: "https://github.com/BrayanCcLindo/task-board",
      web: "https://board-task-bcl.vercel.app/",
    },
    {
      title: "Pokedex",
      slug: "pokedex",
      slogan: t("Pokedex.slogan"),
      description: [t("Pokedex.description1"), t("Pokedex.description2")],
      category: t("Pokedex.category"),

      date: "01/2023",
      name: "Pokedex",
      website: "brayancclindo.github.io/pokedex/",
      languages: ["Vanilla Javascript", "HTML", "CSS", "APIs RESTful"],
      cover: "../../images/pokedex/pokedex.jpg",
      photos: [
        "../../images/pokedex/pokedexPhoto1.jpg",
        "../../images/pokedex/pokedexPhoto2.jpg",
        "../../images/pokedex/pokedexPhoto3.jpg",
        "../../images/pokedex/pokedexPhoto4.jpg",
      ],
      github: "https://github.com/BrayanCcLindo/pokedex",
      web: "https://brayancclindo.github.io/pokedex/",
    },
    {
      title: "GitHub Clone",
      slug: "github-clone",
      slogan: t("GitHub.slogan"),

      description: [
        t("GitHub.description1"),
        t("GitHub.description2"),

        t("GitHub.description3"),
      ],
      category: t("GitHub.category"),

      date: "06/2023",
      name: "GitHub Clone",
      website: "github-clone-nine-neon.vercel.app/",
      languages: [
        "HTML",
        "Styled-Components",
        "React.Js",
        "Radix UI",
        "APIs RESTful",
        "Vercel",
      ],
      cover: "../../images/github/github-clone.jpg",

      photos: [
        "../../images/github/githubPhoto1.jpg",
        "../../images/github/githubPhoto2.jpg",
        "../../images/github/githubPhoto3.jpg",
        "../../images/github/githubPhoto4.jpg",
      ],
      github: "https://github.com/BrayanCcLindo/git-hub-clone",
      web: "https://github-clone-nine-neon.vercel.app/",
    },
    {
      title: "Game Store",
      slug: "game-store",
      slogan: t("GameStore.slogan"),

      description: [t("GameStore.description1"), t("GameStore.description2")],
      category: t("GameStore.category"),
      date: "07/2023",
      name: "Game Store",
      website: "tl-videogames.netlify.app/",
      languages: [
        "Vanilla Javascript",
        "HTML",
        "CSS",
        "APIs RESTful",
        "Netlify",
      ],
      cover: "../../images/game-app/gameApp.jpg",
      photos: [
        "../../images/game-app/gameAppPhoto1.jpg",
        "../../images/game-app/gameAppPhoto2.jpg",
        "../../images/game-app/gameAppPhoto3.jpg",
        "../../images/game-app/gameAppPhoto4.jpg",
      ],
      github: "https://github.com/frontendUI-labs/invoices-app",
      web: "https://tl-videogames.netlify.app/",
    },
    {
      title: "iBookShelf",
      slug: "iBookShelf-app",
      slogan: t("iBookShelf.slogan"),
      description: [t("iBookShelf.description1"), t("iBookShelf.description2")],
      category: t("iBookShelf.category"),
      date: "10/2023",
      name: "iBookShelf",
      website: "ibookshelf-app.netlify.app",

      languages: [
        "ReactJs",
        "TypeScript",
        "Redux",
        "React Query",
        "Tailwind CSS",
        "Radix UI",
        "APIs RESTful",
        "Vite",
        "Netlify",
      ],
      cover: "../../images/test.jpg",

      photos: [
        "../../images/iBook/iBookPhoto2.jpg",
        "../../images/iBook/iBookPhoto3.jpg",

        "../../images/iBook/iBookPhoto4.jpg",
        "../../images/iBook/iBookPhoto5.jpg",
      ],
      github: "https://github.com/frontendUI-labs/iBookshelf",
      web: "https://ibookshelf-app.netlify.app/",
    },
  ];

  const certifications = [
    {
      title: "HTML & CSS",
      link: "https://leonidasesteban.com/certificados/be449594-6e0b-4588-bce6-57df039aa662",
      year: "2022",

      certificaded: "LeonidasEsteban.com",
    },
    {
      title: "React Fundamentals",
      link: "https://leonidasesteban.com/certificados/7bf90d3c-d777-4758-a848-df5d4f486a45",
      year: "2023",

      certificaded: "LeonidasEsteban.com",
    },
    {
      title: "React Frontend Developer",
      link: "https://platzi.com/p/brayanclindo/curso/1758-html-practico/diploma/detalle/",
      year: "2023",

      certificaded: "Platzi",
    },
  ];
  const techStackImg = [
    {
      logo: "../../images/svg/html.svg",
      title: "HTML",
    },
    {
      logo: "./../images/svg/css.svg",
      title: "CSS",
    },
    {
      logo: "../../images/svg/javascript.svg",
      title: "JAVASCRIPT",
    },
    {
      logo: "../../images/svg/react.svg",
      title: "REACT",
    },
    {
      logo: "../../images/svg/nextJs.svg",
      title: "NEXT.JS",
    },
    {
      logo: "../../images/svg/tailwind.svg",
      title: "TAILWIND",
    },
    {
      logo: "../../vite.svg",
      title: "VITE",
    },
    {
      logo: "../../images/svg/git.svg",
      title: "GIT",
    },
    {
      logo: "../../images/svg/figma.svg",
      title: "FIGMA",
    },
  ];
  return (
    <PortfolioContext.Provider
      value={{
        education,
        experience,
        skills,
        projectNames,
        certifications,
        techStackImg,
      }}
    >
      {children}
    </PortfolioContext.Provider>
  );
}

export function useProtfolioContext() {
  const data = useContext(PortfolioContext);
  return data;
}
