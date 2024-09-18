export type Project = {
  title: string;
  slug: string;
  slogan: string;
  description: string[];
  bullets: {
    title: string;
    bullet: string;
  }[];
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

export type Message = {
  text: string;
  isUser: boolean;
  options?: Option[];
};

export type Option = {
  text: string;
  action: () => void;
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

export type AppContextType = {
  experience: Experience[];
  projectNames: Project[];
  value: { mode: Theme; setMode: (theme: Theme) => void };
  switchLang: (newLang: lang) => void;
};
export type CertificationType = {
  title: string;
  link: string;
  certificaded: string;
  year: string;
};

export type Theme = "dark" | "light" | "system";
export type lang = "en" | "es";
export type ThemeProviderState = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};
