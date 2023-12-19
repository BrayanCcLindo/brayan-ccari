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
  const experience = [
    {
      year: "12/2021 - 04/2023",
      job: "Frontend Developer - WordPress",
      detail: "Remote",
      description: [
        "Built landing pages and websites fortourism agencies from design toproduction.",
        "Implemented sales growth and productdevelopment strategies using React.",
        "Performed SEO optimization by improvingthe keyword research & performance ofmany websites.",
        "Contributed to the integration of Firebase,significantly improving both the quality andspeed of web page development.",
      ],
    },
    {
      year: "04/2023 - Present",
      job: "Front End Developer, Freelancer",
      detail: "Remote",
      description: [
        "Built an accessible and functional site for an electronic book store.",
        "Work on frontend with React, TypeScript,Tailwind & React-i18next.",
        "Documented usage of performance APIs inReact, which increase code quality.",
        "Integrated multiple filtering functionalitiesto enhance the user experience.",
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
      title: "iBookShelf",
      slug: "iBookShelf-app",
      slogan:
        "iBookShelf is the ideal place to access your favorite books and those you are about to discover.",
      description: [
        "iBookShelf has multiple robust and versatile filtering features that allow you to browse our extensive collection of books in an efficient and personalized way. With our filter options, you will easily find your next favorite read.",
        "One of the challenges lies in the management of different statuses for each book and the categories where they are located, followed by the creation of a user experience that ensures smooth and responsive navigation. In addition, the aim is to offer personalization and flexibility that allows you to build your own library according to your preferences, and thus manage your reading activities in an efficient way.",
      ],
      category: "Web Development",
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
    {
      title: "Weather App",
      slug: "weather-app",
      slogan:
        "A weather application that provides real-time information on weather conditions based on the user's location and time.",
      description: [
        "Weather App is an intuitive and comprehensive weather app that keeps you always one step ahead when it comes to weather conditions. From the convenience of your smartphone or tablet,",
        " Weather App gives you instant access to a wide range of weather information, providing an exceptional user experience.",
        " Managing varied status by location and weather information elements presents a challenge. I seek to create a smooth user experience, allowing easy access to weather details. I also prioritize flexibility and customization to adjust the app to individual preferences, adapting it to the specific needs of each user.",
      ],
      category: "Mobile App",
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
      slogan:
        "Accept the challenge and tell me how many moves it will take you to solve it?",
      description: [
        "The memory game is an exciting and challenging mental exercise that tests our ability to remember patterns and details.",
        "The development of this game involved multiple challenges such as the correct management of the state that help me to synchronize each user action, followed by a responsive design making it much more accessible to enjoy the game on different devices, and finally, the incorporation of the logic of the game that synchronized and efficient way to each event that the user performs that allow you to show the cards that are equal, with number of moves and the total time it took to solve it.",
      ],
      languages: [
        "NextJs",
        "TailwindCSS",
        "TypeScript",
        "Radix UI",
        "Responsive Design",
        "Vercel",
      ],
      cover: "../../images/memory-game/memory-game.jpg",
      category: "Web Development",
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
      slogan:
        "Imagine a platform designed to simplify and organize your daily life in an efficient way",
      description: [
        "Task Board is a highly intuitive and flexible tool that allows you to manage your to-do, in-progress and completed activities in an organized and effective way.",
        "Task Board web application brings a series of technical and design challenges that help you improve your skills as a frontend developer. ",
        "One of the challenges is the management of complex states for each card and the columns where these cards are hosted, followed by a good user experience that provides smooth and responsive drag and drop, and finally the customization and flexibility to build your cards to your liking and manage your activities.",
      ],
      languages: [
        "NextJs",
        "TailwindCSS",
        "TypeScript",
        "Radix UI",
        "Responsive Design",
        "Vercel",
      ],
      cover: "../../images/task-board/task-board.jpg",

      category: "Web App",
      date: "05/2023",
      name: "Task Board",
      website: "task-board-three.vercel.app/",

      photos: [
        "../../images/task-board/taksBoardPhoto1.jpg",
        "../../images/task-board/taksBoardPhoto2.jpg",
        "../../images/task-board/taksBoardPhoto3.jpg",
        "../../images/task-board/taksBoardPhoto4.jpg",
      ],
      github: "https://github.com/BrayanCcLindo/task-board",
      web: "https://task-board-three.vercel.app/",
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
      category: "Web App",
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
      slogan:
        "A GitHub clone that gives you the ability to browse profiles and repositories",
      description: [
        "At our development platform, we know that every developer has unique needs when managing and collaborating on source code projects.",
        "That's why we've created a comprehensive and versatile filtering feature that allows you to navigate and find your repositories and projects efficiently.",
        "With our filtering options, customize your experience, quickly find any repository or user using our powerful search bar.",
      ],
      category: "Web Development",
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
      slogan:
        "Web app providing video game info, platform availability, and filtering via RESTful APIs.",
      description: [
        "We understand that every gamer has unique tastes and preferences. That's why we have developed a comprehensive and versatile filtering feature that allows you to efficiently browse and find your ideal games. With our filtering options, customize your gaming experience according to your desires.",
        "Filter video games by genre, whether action, adventure, role-playing, strategy, sports, simulation, and many more. Find games that suit your style and preferences.",
      ],
      category: "Web Development",
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
