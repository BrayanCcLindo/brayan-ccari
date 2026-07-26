export interface ProjectPhoto {
  id: number;
  src: string;
  alt: string;
}

export interface ProjectBullet {
  title: string;
  bullet: string;
}

export interface Project {
  title: string;
  slug: string;
  slogan: string;
  description: string;
  bullets: ProjectBullet[];
  category: string;
  date: string;
  languages: string[];
  cover: string;
  photos: ProjectPhoto[];
  github: string;
  web: string;
}

export interface Education {
  year: string;
  job: string;
  detail: string;
}

export interface Experience {
  year: string;
  job: string;
  detail: string;
  description: string[];
}

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
  cover?: string;
  readingTime: number;
  content: string;
}
