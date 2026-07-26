import { Experience, Education } from "@/types";

export const experience: Experience[] = [
  {
    year: "06/2024 – Present",
    job: "Frontend Developer",
    detail: "Pun Game (NFTs) · Remote",
    description: [
      "Developed a web application from scratch using Next.js, WebSocket, WalletConnect, and Postgres as the core technology stack.",
      "Achieved a responsive integration allowing users to connect from different devices, create lobbies, and join friends via a lobby code.",
      "Designed game mechanics around drawing and guessing words, integrating WebSocket for real-time communication, drawing board, timer, and game rounds.",
      "Implemented backend solutions to handle HTTP requests, manage global user scores, and display them in a real-time leaderboard.",
    ],
  },
  {
    year: "04/2024 – Present",
    job: "Frontend Developer",
    detail: "Own Crowdfunding Project · Remote",
    description: [
      "Developed an interactive UI using React.js, Express, and Firebase, achieving a responsive and pixel-perfect user experience.",
      "Implemented Firebase to manage a real-time database, user authentication, and file storage with security rules and query optimization.",
      "Integrated a secure payment gateway allowing users to contribute to crowdfunding projects using well-known payment APIs.",
      "Ensured smooth and consistent functionality across all devices, guaranteeing security and efficiency in user operations.",
    ],
  },
];

export const education: Education[] = [
  { year: "2024", job: "React.js Developer", detail: "Epic React" },
  { year: "2024", job: "Next.js Developer", detail: "Frontend Masters" },
  { year: "2024", job: "C2 Proficient", detail: "EF Standard English" },
  { year: "2023", job: "Programming & Software Development", detail: "Platzi" },
  { year: "2023", job: "React Developer", detail: "LeonidasEsteban.com" },
  { year: "2022", job: "React Frontend Developer", detail: "Epic React Workshop" },
  { year: "2021", job: "Bachelor in International Business", detail: "Continental University" },
];

export const skills = [
  "HTML", "CSS", "JavaScript", "TypeScript",
  "React.js", "Next.js", "Tailwind CSS", "Styled-Components",
  "Git / GitHub", "Responsive Design", "UI/UX", "Performance Optimization",
];
