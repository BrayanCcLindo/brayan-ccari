import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/icons";

import { projects } from "@/data/projects";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "Projects",
  description: "Brayan Ccari's project portfolio — React e-commerce, real-time multiplayer games, fintech dashboards, and more built with Next.js, TypeScript, and Tailwind CSS.",
  keywords: [
    "React Projects",
    "Next.js Projects",
    "Frontend Projects Portfolio",
    "Brayan Ccari Projects",
    "React E-commerce",
    "Next.js E-commerce",
    "Real-time Web App",
    "WebSocket Game React",
    "Crowdfunding App",
    "TypeScript Projects",
    "Supabase React",
    "Tailwind CSS Projects",
    "JavaScript Portfolio",
    "Frontend Developer Work",
  ],
};

export default function ProjectsPage() {
  return (
    <div className="container mx-auto px-4 pt-28 pb-20">
      {/* Header */}
      <AnimatedSection className="mb-16 text-center">
        <p className="text-xs font-semibold tracking-widest text-purple uppercase mb-3">My work</p>
        <h1 className="text-4xl md:text-5xl font-bold font-heading text-black mb-4">All Projects</h1>
        <p className="text-gray-200 text-lg max-w-xl mx-auto">
          {projects.length}+ projects built across e-commerce, real-time apps, productivity tools, and more.
        </p>
      </AnimatedSection>

      <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {projects.map((project) => (
          <StaggerItem key={project.slug}>
            <div className="group flex flex-col h-full bg-white rounded-2xl border border-gray-600 overflow-hidden hover:border-purple hover:shadow-lg hover:shadow-purple/10 transition-all duration-300">
              {/* Cover image */}
              <Link href={`/my-projects/${project.slug}`} className="block relative h-48 overflow-hidden flex-shrink-0">
                <Image
                  src={project.cover}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>

              {/* Content */}
              <div className="flex flex-col flex-1 p-6 gap-4">
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs text-purple font-semibold uppercase tracking-wide">{project.category}</span>
                    <span className="text-xs text-gray-200">{project.date}</span>
                  </div>
                  <Link href={`/my-projects/${project.slug}`}>
                    <h2 className="text-lg font-bold font-heading text-black hover:text-purple transition-colors duration-200">
                      {project.title}
                    </h2>
                  </Link>
                  <p className="text-gray-200 text-sm mt-2 leading-relaxed line-clamp-2">
                    {project.slogan}
                  </p>
                </div>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5 mt-auto">
                  {project.languages.slice(0, 4).map((lang) => (
                    <span
                      key={lang}
                      className="px-2 py-0.5 rounded-md text-[11px] font-medium bg-gray-600 text-gray-200"
                    >
                      {lang}
                    </span>
                  ))}
                  {project.languages.length > 4 && (
                    <span className="px-2 py-0.5 rounded-md text-[11px] font-medium bg-gray-600 text-gray-200">
                      +{project.languages.length - 4}
                    </span>
                  )}
                </div>

                {/* Links */}
                <div className="flex items-center gap-3 pt-2 border-t border-gray-600">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-gray-200 text-sm hover:text-purple transition-colors duration-200"
                  >
                    <GithubIcon size={15} /> GitHub
                  </a>
                  <a
                    href={project.web}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-gray-200 text-sm hover:text-purple transition-colors duration-200"
                  >
                    <ExternalLink size={15} /> Website
                  </a>
                </div>
              </div>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </div>
  );
}
