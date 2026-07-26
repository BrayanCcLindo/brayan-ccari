"use client";

import Image from "next/image";
import { StaggerContainer, StaggerItem } from "./AnimatedSection";

const techStack = [
  { title: "HTML", logo: "/images/svg/html.svg" },
  { title: "CSS", logo: "/images/svg/css.svg" },
  { title: "JavaScript", logo: "/images/svg/javascript.svg" },
  { title: "React", logo: "/images/svg/react.svg" },
  { title: "Next.js", logo: "/images/svg/nextJs.svg" },
  { title: "Tailwind", logo: "/images/svg/tailwind.svg" },
  { title: "Git", logo: "/images/svg/git.svg" },
  { title: "Figma", logo: "/images/svg/figma.svg" },
];

export function TechStackGrid() {
  return (
    <StaggerContainer className="flex flex-wrap gap-3 md:gap-4">
      {techStack.map((tech) => (
        <StaggerItem key={tech.title}>
          <div className="group flex flex-col items-center gap-2 p-3 rounded-xl border border-gray-600 bg-white hover:border-purple hover:shadow-md hover:shadow-purple/10 transition-all duration-200 cursor-default w-16">
            <div className="relative w-8 h-8">
              <Image
                src={tech.logo}
                alt={tech.title}
                fill
                className="object-contain group-hover:scale-110 transition-transform duration-200"
              />
            </div>
            <span className="text-[10px] text-gray-200 font-medium text-center leading-tight">
              {tech.title}
            </span>
          </div>
        </StaggerItem>
      ))}
    </StaggerContainer>
  );
}
