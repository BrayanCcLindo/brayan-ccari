import { ReactNode, createContext, useContext } from "react";

export type Project = {
  title: string;
  slug: string;
  slogan: string;
  description: string;
  languages: string[];
  cover: string;
  github: string;
  web: string;
  image: string;
  photos: string[];
};

export type Experience = {
  year: string;
  job: string;
  detail: string;
  description: string;
};
export type Education = {
  year: string;
  job: string;
  detail: string;
};
export type SkillsType = {
  percentage: string;
  skill: string;
  date: string;
};

type AppContextType = {
  education: Education[];
  experience: Experience[];
  skills: SkillsType[];
  projectNames: Project[];
  certifications: CertificationType[];
};
export type CertificationType = {
  title: string;
  link: string;
  certificaded: string;
  year: string;
};

const PortfolioContext = createContext<AppContextType>({} as AppContextType);

export function PortfolioProvider({ children }: { children: ReactNode }) {
  const experience = [
    {
      year: "2021 - 2023",
      job: "WordPress & Frontend Developer",
      detail: "REMOTE",
      description:
        "I built landing pages and web applications for tourism agencies from design to production, applying UI and UX design principles, executing sales growth strategies  and product development using  React JS.",
    },
    {
      year: "2023 - Present",
      job: "Front End Developer, Freelancer",
      detail: "REMOTE",
      description:
        "My focus is on implementing attractive and responsive designs, using cutting-edge technologies such as HTML, CSS3 , JavaScript, TypeScript, ReactJs, TailwindCss, Styled-components to ensure that the user interfaces I develop are intuitive and attractive.",
    },
  ];
  const education = [
    {
      year: "2021",
      job: "Bachelor Degree in International Business",
      detail: "Continental University",
    },
    {
      year: "2023",
      job: "React Frontend Developer",
      detail: "Epic React Workshop",
    },
  ];
  const skills = [
    {
      percentage: "85%",
      skill: "HTML",
      date: "2021 - Present",
    },
    {
      percentage: "85%",
      skill: "CSS",
      date: "2021 - Present",
    },
    {
      percentage: "85%",
      skill: "Styled-Components",
      date: "2021 - Present",
    },
    {
      percentage: "85%",
      skill: "Tailwind CSS",
      date: "2021 - Present",
    },
    {
      percentage: "85%",
      skill: "JavaScript",
      date: "2021 - Present",
    },
    {
      percentage: "85%",
      skill: "TypeScript",
      date: "2021 - Present",
    },
  ];
  const projectNames = [
    {
      title: "Weather App",
      slug: "weather-app",
      slogan:
        "A weather application that provides real-time information on weather conditions based on the user's location and time.",
      description:
        "A weather application that provides real-time information on weather conditions based on the user's location and time. Built in Vanilla JavaScript, CSS, HTML, ViteJs.",
      languages: ["Vanilla Javascript", "HTML", "CSS"],
      cover: "../../images/weather-app.jpg",
      image: "../../images/iBook/iBookPortrait.jpg",

      photos: [
        "../../images/iBook/iBookPhoto2.jpg",
        "../../images/iBook/iBookPhoto3.jpg",

        "../../images/iBook/iBookPhoto4.jpg",
        "../../images/iBook/iBookPhoto5.jpg",
      ],
      github: "https://github.com/BrayanCcLindo/weather-app",
      web: "https://brayancclindo.github.io/weather-app/",
    },
    {
      title: "ibookshelf",
      slug: "ibookshelf-app",
      slogan:
        "Apple Books es el lugar ideal para acceder a tus libros favoritos y los que estás por descubrir",
      description:
        "ibookshelf is the ideal place to access your favorite and undiscovered books. Explore the Store tab and find the perfect book for you. Keep track of your favorite books and what you want to read, and set your own Reading Goals, all in one app.",
      languages: ["ReactJs", "TypeScript", "Tailwind CSS"],
      cover: "../../images/test.jpg",
      image: "../../images/iBook/iBookPortrait.jpg",

      photos: [
        "../../images/iBook/iBookPhoto2.jpg",
        "../../images/iBook/iBookPhoto3.jpg",

        "../../images/iBook/iBookPhoto4.jpg",
        "../../images/iBook/iBookPhoto5.jpg",
      ],
      github: "https://github.com/frontendUI-labs/iBookshelf",
      web: "https://ibookshelf-app.netlify.app/",
    },
    {
      title: "Game Store",
      slug: "game-store",
      slogan:
        "Web app providing video game info, platform availability, and filtering via RESTful APIs.",
      description:
        "ibookshelf is the ideal place to access your favorite and undiscovered books. Explore the Store tab and find the perfect book for you. Keep track of your favorite books and what you want to read, and set your own Reading Goals, all in one app.",
      languages: ["Vanilla Javascript", "HTML", "CSS"],
      cover: "../../images/game-app/gameApp.jpg",
      image: "../../images/game-app/gameApp-portrait.jpg",
      photos: [
        "../../images/game-app/gameAppPhoto1.jpg",
        "../../images/game-app/gameAppPhoto2.jpg",
        "../../images/game-app/gameAppPhoto3.jpg",
        "../../images/game-app/gameAppPhoto4.jpg",
      ],
      github: "https://github.com/frontendUI-labs/invoices-app",
      web: "https://invoices-ui.netlify.app/",
    },

    {
      title: "Pokedex",
      slug: "pokedex",
      slogan:
        "¡Explora el emocionante mundo Pokémon y conoce más de tu Pokémon favorito!",
      description:
        "ibookshelf is the ideal place to access your favorite and undiscovered books. Explore the Store tab and find the perfect book for you. Keep track of your favorite books and what you want to read, and set your own Reading Goals, all in one app.",
      languages: ["Vanilla Javascript", "HTML", "CSS"],
      cover: "../../images/pokedex/pokedex.jpg",
      image: "../../images/pokedex/pokedexPortrait.jpg",
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
      slogan:
        "Un clon de GitHub que te brinda la capacidad de explorar perfiles y repositorios.",
      description:
        "ibookshelf is the ideal place to access your favorite and undiscovered books. Explore the Store tab and find the perfect book for you. Keep track of your favorite books and what you want to read, and set your own Reading Goals, all in one app.",
      languages: ["ReactJs", "TypeScript", "Tailwind CSS"],
      cover: "../../images/github/github-clone.jpg",
      image: "../../images/github/githubPortrait.jpg",
      photos: [
        "../../images/github/githubPhoto1.jpg",
        "../../images/github/githubPhoto2.jpg",
        "../../images/github/githubPhoto3.jpg",
        "../../images/github/githubPhoto4.jpg",
      ],
      github: "https://github.com/BrayanCcLindo/git-hub-clone",
      web: "https://github-clone-nine-neon.vercel.app/",
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
      title: "FlexBox Layout &Components",
      link: "https://leonidasesteban.com/certificados/7bf90d3c-d777-4758-a848-df5d4f486a45",
      year: "2023",

      certificaded: "LeonidasEsteban.com",
    },
    {
      title: "FlexBox Layout &Components",
      link: "https://platzi.com/p/brayanclindo/curso/1758-html-practico/diploma/detalle/",
      year: "2023",

      certificaded: "Platzi",
    },
  ];
  return (
    <PortfolioContext.Provider
      value={{ education, experience, skills, projectNames, certifications }}
    >
      {children}
    </PortfolioContext.Provider>
  );
}

export function useProtfolioContext() {
  const data = useContext(PortfolioContext);
  return data;
}
