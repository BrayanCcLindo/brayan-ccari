import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState
} from "react";
import { useTranslation } from "react-i18next";
import { AppContextType, Theme } from "../types/type";

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
        t("experience1.description4")
      ]
    },
    {
      year: t("experience2.year"),
      job: t("experience2.job"),
      detail: t("experience2.detail"),
      description: [
        t("experience2.description1"),
        t("experience2.description2"),
        t("experience2.description3"),
        t("experience2.description4")
      ]
    }
  ];

  const projectNames = [
    {
      title: "Weather App",
      slug: "weather-app",
      slogan: t("Weather.slogan"),
      description: [t("Weather.description1")],
      bullets: [
        {
          title: t("Weather.title1"),
          bullet: t("Weather.bullet1")
        },
        {
          title: t("Weather.title2"),
          bullet: t("Weather.bullet2")
        },
        {
          title: t("Weather.title3"),
          bullet: t("Weather.bullet3")
        },
        {
          title: t("Weather.title4"),
          bullet: t("Weather.bullet4")
        },
        {
          title: t("Weather.title5"),
          bullet: t("Weather.bullet5")
        }
      ],
      category: t("Weather.category"),
      date: "11/2022",
      name: "Weather App",
      website: "brayancclindo.github.io/weather-app/",

      languages: ["Vanilla Javascript", "HTML", "CSS", "APIs RESTful"],
      cover: "../../images/weather-app.jpg",

      photos: [
        "../../images/weather-app/weatherApp-Photo1.jpg",
        "../../images/weather-app/weatherApp-Photo3.jpg",
        "../../images/weather-app/weatherApp-Photo4.jpg"
      ],
      github: "https://github.com/BrayanCcLindo/weather-app",
      web: "https://brayancclindo.github.io/weather-app/"
    },
    {
      title: "Memory Game",
      slug: "memory-game",
      slogan: t("Memory.slogan"),
      description: [t("Memory.description1")],
      bullets: [
        {
          title: t("Memory.title1"),
          bullet: t("Memory.bullet1")
        },
        {
          title: t("Memory.title2"),
          bullet: t("Memory.bullet2")
        },
        {
          title: t("Memory.title3"),
          bullet: t("Memory.bullet3")
        },
        {
          title: t("Memory.title4"),
          bullet: t("Memory.bullet4")
        }
      ],
      languages: [
        "NextJs",
        "TailwindCSS",
        "TypeScript",
        "Radix UI",
        "Responsive Design",
        "Vercel"
      ],
      cover: "../../images/memory-game/memory-game.jpg",
      category: t("Memory.category"),
      date: "06/2023",
      name: "Memory Game",
      website: "memory-game-gules-two.vercel.app/",
      photos: [
        "../../images/memory-game/memoryGamePhoto2.jpg",
        "../../images/memory-game/memoryGamePhoto3.jpg",
        "../../images/memory-game/memoryGamePhoto4.jpg"
      ],
      github: "https://github.com/BrayanCcLindo/memory-game",
      web: "https://memory-game-gules-two.vercel.app/"
    },

    {
      title: "Kuzi Fund",
      slug: "kuzi-fund",
      slogan: t("kuziFund.slogan"),
      description: [t("kuziFund.description1")],
      bullets: [
        {
          title: t("kuziFund.title1"),
          bullet: t("kuziFund.bullet1")
        },
        {
          title: t("kuziFund.title2"),
          bullet: t("kuziFund.bullet2")
        },
        {
          title: t("kuziFund.title3"),
          bullet: t("kuziFund.bullet3")
        },
        {
          title: t("kuziFund.title4"),
          bullet: t("kuziFund.bullet4")
        },
        {
          title: t("kuziFund.title5"),
          bullet: t("kuziFund.bullet5")
        }
      ],
      category: t("kuziFund.category"),
      date: "03/2024",
      name: "Kuzi Fund",
      website: "smile-two.vercel.app",

      languages: [
        "ReactJs",
        "TypeScript",
        "Redux",
        "React Query",
        "Tailwind CSS",
        "Firebase",
        "APIs RESTful",
        "Framer Motion",
        "Express",
        "Vite"
      ],
      cover: "../../images/kuzi/kuzi-cover.jpeg",

      photos: [
        "../../images/kuzi/kuzi-photo2.jpg",
        "../../images/kuzi/kuzi-photo3.jpg",
        "../../images/kuzi/kuzi-photo4.jpg"
      ],
      github: "https://github.com/BrayanCcLindo/smile",
      web: "https://smile-two.vercel.app/"
    },
    {
      title: "Task Board",
      slug: "task-board",
      slogan: t("TaskBoard.slogan"),
      description: [t("TaskBoard.description1")],
      bullets: [
        {
          title: t("TaskBoard.title1"),
          bullet: t("TaskBoard.bullet1")
        },
        {
          title: t("TaskBoard.title2"),
          bullet: t("TaskBoard.bullet2")
        },
        {
          title: t("TaskBoard.title3"),
          bullet: t("TaskBoard.bullet3")
        },
        {
          title: t("TaskBoard.title4"),
          bullet: t("TaskBoard.bullet4")
        },
        {
          title: t("TaskBoard.title5"),
          bullet: t("TaskBoard.bullet5")
        }
      ],
      languages: [
        "NextJs",
        "TailwindCSS",
        "TypeScript",
        "Radix UI",
        "Responsive Design",
        "Vercel"
      ],
      cover: "../../images/task-board/taskBoard-Portada.jpg",

      category: t("TaskBoard.category"),
      date: "05/2023",
      name: "Task Board",
      website: "board-task-bcl.vercel.app/",

      photos: [
        "../../images/task-board/TaskBoard-2.jpg",
        "../../images/task-board/TaskBoard-1.jpg",
        "../../images/task-board/TaskBoard-3.jpg"
      ],
      github: "https://github.com/BrayanCcLindo/task-board",
      web: "https://board-task-bcl.vercel.app/"
    },
    {
      title: "Pokedex",
      slug: "pokedex",
      slogan: t("Pokedex.slogan"),
      description: [t("Pokedex.description1")],
      bullets: [
        {
          title: t("Pokedex.title1"),
          bullet: t("Pokedex.bullet1")
        },
        {
          title: t("Pokedex.title2"),
          bullet: t("Pokedex.bullet2")
        },
        {
          title: t("Pokedex.title3"),
          bullet: t("Pokedex.bullet3")
        },
        {
          title: t("Pokedex.title4"),
          bullet: t("Pokedex.bullet4")
        }
      ],
      category: t("Pokedex.category"),

      date: "01/2023",
      name: "Pokedex",
      website: "brayancclindo.github.io/pokedex/",
      languages: ["Vanilla Javascript", "HTML", "CSS", "APIs RESTful"],
      cover: "../../images/pokedex/pokedex.jpg",
      photos: [
        "../../images/pokedex/pokedexPhoto1.jpg",
        "../../images/pokedex/pokedexPhoto3.jpg",
        "../../images/pokedex/pokedexPhoto4.jpg"
      ],
      github: "https://github.com/BrayanCcLindo/pokedex",
      web: "https://brayancclindo.github.io/pokedex/"
    },
    {
      title: "GitHub Clone",
      slug: "github-clone",
      slogan: t("GitHub.slogan"),

      description: [t("GitHub.description1")],
      bullets: [
        {
          title: t("GitHub.title1"),
          bullet: t("GitHub.bullet1")
        },
        {
          title: t("GitHub.title2"),
          bullet: t("GitHub.bullet2")
        },
        {
          title: t("GitHub.title3"),
          bullet: t("GitHub.bullet3")
        },
        {
          title: t("GitHub.title4"),
          bullet: t("GitHub.bullet4")
        }
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
        "Vercel"
      ],
      cover: "../../images/github/github-clone.jpg",

      photos: [
        "../../images/github/githubPhoto1.jpg",
        "../../images/github/githubPhoto3.jpg",
        "../../images/github/githubPhoto4.jpg"
      ],
      github: "https://github.com/BrayanCcLindo/git-hub-clone",
      web: "https://github-clone-nine-neon.vercel.app/"
    },
    {
      title: "Game Store",
      slug: "game-store",
      slogan: t("GameStore.slogan"),

      description: [t("GameStore.description1")],
      bullets: [
        {
          title: t("GameStore.title1"),
          bullet: t("GameStore.bullet1")
        },
        {
          title: t("GameStore.title2"),
          bullet: t("GameStore.bullet2")
        },
        {
          title: t("GameStore.title3"),
          bullet: t("GameStore.bullet3")
        },
        {
          title: t("GameStore.title4"),
          bullet: t("GameStore.bullet4")
        }
      ],
      category: t("GameStore.category"),
      date: "07/2023",
      name: "Game Store",
      website: "tl-videogames.netlify.app/",
      languages: [
        "Vanilla Javascript",
        "HTML",
        "CSS",
        "APIs RESTful",
        "Netlify"
      ],
      cover: "../../images/game-app/gameApp.jpg",
      photos: [
        "../../images/game-app/gameAppPhoto1.jpg",
        "../../images/game-app/gameAppPhoto2.jpg",
        "../../images/game-app/gameAppPhoto4.jpg"
      ],
      github: "https://github.com/frontendUI-labs/invoices-app",
      web: "https://tl-videogames.netlify.app/"
    },
    {
      title: "iBookShelf",
      slug: "iBookShelf-app",
      slogan: t("iBookShelf.slogan"),
      description: [t("iBookShelf.description1")],
      bullets: [
        {
          title: t("iBookShelf.title1"),
          bullet: t("iBookShelf.bullet1")
        },
        {
          title: t("iBookShelf.title2"),
          bullet: t("iBookShelf.bullet2")
        },
        {
          title: t("iBookShelf.title3"),
          bullet: t("iBookShelf.bullet3")
        },
        {
          title: t("iBookShelf.title4"),
          bullet: t("iBookShelf.bullet4")
        }
      ],
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
        "Netlify"
      ],
      cover: "../../images/test.jpg",

      photos: [
        "../../images/iBook/iBookPhoto2.jpg",
        "../../images/iBook/iBookPhoto3.jpg",
        "../../images/iBook/iBookPhoto4.jpg"
      ],
      github: "https://github.com/frontendUI-labs/iBookshelf",
      web: "https://ibookshelf-app.netlify.app/"
    }
  ];

  const [mode, setMode] = useState<Theme>(
    () => (localStorage.getItem("theme") as Theme) || "light"
  );

  useEffect(() => {
    const root = window.document.documentElement;

    root.classList.remove("light", "dark");

    if (mode === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "light";

      root.classList.add(systemTheme);
      return;
    }

    root.classList.add(mode);
  }, [mode]);

  const value = {
    mode,
    setMode: (theme: Theme) => {
      localStorage.setItem("theme", theme);
      setMode(theme);
    }
  };
  return (
    <PortfolioContext.Provider
      value={{
        experience,
        projectNames,
        value
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
