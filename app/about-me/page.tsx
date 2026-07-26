import type { Metadata } from "next";
import { ChevronRight, FileDown } from "lucide-react";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";
import { TechStackGrid } from "@/components/TechStackGrid";
import { education, experience, skills } from "@/data/experience";

export const metadata: Metadata = {
  title: "About Me",
  description:
    "Brayan Ccari — React and Next.js developer with 4+ years building responsive, pixel-perfect interfaces. Experienced in e-commerce, real-time apps, and payment integrations.",
  keywords: [
    "Brayan Ccari",
    "React Developer",
    "Next.js Developer",
    "Frontend Developer Experience",
    "JavaScript Engineer",
    "TypeScript Developer",
    "Supabase Developer",
    "WebSocket Developer",
    "Frontend Developer Skills",
    "UI Engineer",
  ],
};

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 pt-28 pb-20">
      {/* Header */}
      <AnimatedSection className="mb-16 text-center">
        <p className="text-xs font-semibold tracking-widest text-purple uppercase mb-3">Get to know me</p>
        <h1 className="text-4xl md:text-5xl font-bold font-heading text-black mb-6">About Me</h1>
        <p className="text-gray-200 text-lg leading-relaxed max-w-2xl mx-auto">
          Frontend developer with a solid track record in creating responsive and pixel-perfect web interfaces.
          Proficient in HTML, CSS, JavaScript, React, and Next.js, with experience in real-time communication,
          database management, and secure payment integration.
        </p>
        <a
          href="/files/CV.BrayanCcari.pdf"
          download="BrayanCcari-CV.pdf"
          className="inline-flex items-center gap-2 mt-6 px-6 py-3 bg-purple text-gray-50 rounded-2xl font-semibold hover:opacity-90 hover:scale-105 transition-all duration-200 shadow-lg shadow-purple/25"
        >
          <FileDown size={18} />
          Download CV
        </a>
      </AnimatedSection>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Experience */}
        <div>
          <AnimatedSection className="mb-8">
            <h2 className="text-xl font-bold font-heading text-black tracking-wider uppercase border-b border-gray-600 pb-3">
              Experience
            </h2>
          </AnimatedSection>
          <div className="flex flex-col gap-6">
            {experience.map((exp, i) => (
              <AnimatedSection key={`${exp.year}-${exp.job}`} delay={i * 0.1}>
                <div className="p-6 bg-white rounded-2xl border border-gray-600 hover:border-purple transition-colors duration-200">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div>
                      <h3 className="font-bold text-black text-lg">{exp.job}</h3>
                      <p className="text-gray-200 text-sm">{exp.detail}</p>
                    </div>
                    <span className="text-purple text-sm font-medium whitespace-nowrap">{exp.year}</span>
                  </div>
                  <ul className="flex flex-col gap-2">
                    {exp.description.map((d) => (
                      <li key={d} className="flex items-start gap-2 text-gray-200 text-sm leading-relaxed">
                        <ChevronRight size={14} className="text-purple flex-shrink-0 mt-0.5" />
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>

        {/* Education */}
        <div>
          <AnimatedSection className="mb-8">
            <h2 className="text-xl font-bold font-heading text-black tracking-wider uppercase border-b border-gray-600 pb-3">
              Education
            </h2>
          </AnimatedSection>
          <div className="flex flex-col gap-4">
            {education.map((edu, i) => (
              <AnimatedSection key={`${edu.year}-${edu.job}`} delay={i * 0.07} direction="right">
                <div className="flex items-center gap-4 p-4 bg-white rounded-xl border border-gray-600 hover:border-purple transition-colors duration-200">
                  <span className="text-purple font-bold text-sm w-10 flex-shrink-0">{edu.year}</span>
                  <div className="w-px h-10 bg-gray-600" />
                  <div>
                    <p className="text-black font-medium text-sm">{edu.job}</p>
                    <p className="text-gray-200 text-xs">{edu.detail}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>

      {/* Skills */}
      <AnimatedSection className="mt-16">
        <h2 className="text-xl font-bold font-heading text-black tracking-wider uppercase border-b border-gray-600 pb-3 mb-8">
          Skills
        </h2>
        <StaggerContainer className="flex flex-wrap gap-3">
          {skills.map((skill) => (
            <StaggerItem key={skill}>
              <span className="px-4 py-2 rounded-xl border border-gray-600 bg-white text-gray-200 text-sm font-medium hover:border-purple hover:text-purple transition-colors duration-200">
                {skill}
              </span>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </AnimatedSection>

      {/* Tech Stack */}
      <AnimatedSection className="mt-16" delay={0.1}>
        <h2 className="text-xl font-bold font-heading text-black tracking-wider uppercase border-b border-gray-600 pb-3 mb-8">
          Tech Stack
        </h2>
        <TechStackGrid />
      </AnimatedSection>
    </div>
  );
}
