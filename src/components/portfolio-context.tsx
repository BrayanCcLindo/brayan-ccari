import { ReactNode, createContext, useContext } from "react";

export type Project = {
  title: string;
  slug: string;
  slogan: string;
  description: string[];
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
      description: [
        "Weather App is an intuitive and comprehensive weather app that keeps you always one step ahead when it comes to weather conditions. From the convenience of your smartphone or tablet,",
        " Weather App gives you instant access to a wide range of weather information, providing an exceptional user experience.",
      ],

      languages: ["Vanilla Javascript", "HTML", "CSS"],
      cover: "../../images/weather-app.jpg",
      image: "../../images/weather-Photo.jpg",

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
      title: "ibookshelf",
      slug: "ibookshelf-app",
      slogan:
        "Apple Books es el lugar ideal para acceder a tus libros favoritos y los que estás por descubrir",
      description: [
        "ibookshelf is the ideal place to access your favorite and undiscovered books. Explore the Store tab and find the perfect book for you. Keep track of your favorite books and what you want to read, and set your own Reading Goals, all in one app",
        "This application has multiple robust and versatile filtering features that allow you to browse our extensive collection of books in an efficient and personalized way. With our filter options, you will easily find your next favorite read.",
      ],
      languages: ["HMTL", "Tailwind CSS", "ReactJs", "TypeScript", "Radix UI"],
      cover: "../../images/test.jpg",
      image: "../../images/iBookShelf-photo.jpg",

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
      description: [
        "We understand that every gamer has unique tastes and preferences. That's why we have developed a comprehensive and versatile filtering feature that allows you to efficiently browse and find your ideal games. With our filtering options, customize your gaming experience according to your desires.",
        "Filter video games by genre, whether action, adventure, role-playing, strategy, sports, simulation, and many more. Find games that suit your style and preferences.",
      ],
      languages: ["Vanilla Javascript", "HTML", "CSS"],
      cover: "../../images/game-app/gameApp.jpg",
      image: "../../images/gameStore-photo.jpg",
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
        "Explore the exciting world of Pokémon and learn more about your favorite Pokémon!",
      description: [
        "Every Pokémon Trainer has their special companion, their favorite Pokémon that has accompanied them on countless adventures. That's why we've created an exceptional tool that allows you to find your favorite Pokémon and explore all its characteristics and evolutions in detail.",
        "That's why we've incorporated a special feature that lets you find your favorite Pokémon and listen to all of its characteristics in detail. Whether you prefer Pikachu, Charizard, Eevee, or any other Pokémon, you'll be able to find your favorite Pokémon.",
      ],
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
        "A GitHub clone that gives you the ability to browse profiles and repositories",
      description: [
        "At our development platform, we know that every developer has unique needs when managing and collaborating on source code projects. That's why we've created a comprehensive and versatile filtering feature that allows you to navigate and find your repositories and projects efficiently.",
        "With our filtering options, customize your experience, quickly find any repository or user using our powerful search bar.",
      ],
      languages: ["HTML", "Styled-Components", "React.Js", "Radix UI"],
      cover: "../../images/github/github-clone.jpg",
      image: "../../images/githubClone-photo.jpg",

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
