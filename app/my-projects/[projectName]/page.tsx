import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Check, ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/icons";
import { projects } from "@/data/projects";
import { AnimatedSection } from "@/components/AnimatedSection";
import { PhotoGallery } from "@/components/PhotoGallery";

interface Props {
  params: Promise<{ projectName: string }>;
}

export async function generateStaticParams() {
  return projects.map((p) => ({ projectName: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { projectName } = await params;
  const project = projects.find((p) => p.slug === projectName);
  if (!project) return { title: "Project Not Found" };
  return {
    title: project.title,
    description: project.slogan,
  };
}

export default async function ProjectPage({ params }: Props) {
  const { projectName } = await params;
  const project = projects.find((p) => p.slug === projectName);
  if (!project) notFound();

  return (
    <div className="container mx-auto px-4 pt-28 pb-20">
      {/* Back */}
      <AnimatedSection className="mb-10">
        <Link
          href="/my-projects"
          className="inline-flex items-center gap-2 text-gray-200 hover:text-purple transition-colors text-sm font-medium"
        >
          <ArrowLeft size={16} /> Back to Projects
        </Link>
      </AnimatedSection>

      {/* Hero */}
      <AnimatedSection className="mb-12">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
          <div>
            <span className="text-xs font-semibold tracking-widest text-purple uppercase">{project.category}</span>
            <h1 className="text-4xl md:text-5xl font-bold font-heading text-black mt-1">{project.title}</h1>
          </div>
          <div className="flex items-center gap-3">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl border border-gray-600 text-black text-sm font-semibold hover:border-purple hover:text-purple transition-all duration-200"
            >
              <GithubIcon size={16} /> GitHub
            </a>
            <a
              href={project.web}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-purple text-gray-50 text-sm font-semibold hover:opacity-90 transition-opacity shadow-lg shadow-purple/25"
            >
              <ExternalLink size={16} /> Live Site
            </a>
          </div>
        </div>
        <p className="text-gray-200 text-lg leading-relaxed max-w-3xl">{project.slogan}</p>
      </AnimatedSection>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Main content */}
        <div className="lg:col-span-2 flex flex-col gap-10">
          {/* Photo gallery */}
          <AnimatedSection>
            <PhotoGallery photos={project.photos} />
          </AnimatedSection>

          {/* Description */}
          <AnimatedSection>
            <h2 className="text-lg font-bold font-heading text-black uppercase tracking-wider border-b border-gray-600 pb-3 mb-5">
              Description
            </h2>
            <p className="text-gray-200 leading-relaxed">{project.description}</p>
          </AnimatedSection>

          {/* Key features */}
          <AnimatedSection>
            <h2 className="text-lg font-bold font-heading text-black uppercase tracking-wider border-b border-gray-600 pb-3 mb-5">
              Key Features
            </h2>
            <div className="flex flex-col gap-4">
              {project.bullets.map((b) => (
                <div key={b.title} className="flex items-start gap-3 p-4 rounded-xl bg-white border border-gray-600">
                  <span className="w-6 h-6 rounded-full bg-purple/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check size={13} className="text-purple" />
                  </span>
                  <div>
                    <p className="text-black font-semibold text-sm">{b.title}</p>
                    <p className="text-gray-200 text-sm mt-0.5">{b.bullet}</p>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>

        {/* Sidebar */}
        <AnimatedSection direction="right" className="flex flex-col gap-6">
          <div className="p-6 bg-white rounded-2xl border border-gray-600 sticky top-24">
            <h3 className="text-sm font-bold font-heading text-black uppercase tracking-wider mb-5">
              Project Info
            </h3>
            <div className="flex flex-col gap-4 text-sm">
              <div>
                <p className="text-gray-200 text-xs uppercase tracking-wide mb-1">Category</p>
                <p className="text-black font-medium">{project.category}</p>
              </div>
              <div>
                <p className="text-gray-200 text-xs uppercase tracking-wide mb-1">Date</p>
                <p className="text-black font-medium">{project.date}</p>
              </div>
              <div>
                <p className="text-gray-200 text-xs uppercase tracking-wide mb-1">Developed by</p>
                <p className="text-black font-medium">Brayan Ccari</p>
              </div>
              <div>
                <p className="text-gray-200 text-xs uppercase tracking-wide mb-3">Technologies</p>
                <div className="flex flex-wrap gap-2">
                  {project.languages.map((lang) => (
                    <span
                      key={lang}
                      className="px-2.5 py-1 rounded-lg text-xs font-medium bg-gray-600 text-gray-200 border border-gray-600 hover:border-purple hover:text-purple transition-colors duration-200"
                    >
                      {lang}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
