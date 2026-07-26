import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";
import { HeroSection } from "@/components/HeroSection";
import { MarqueeText } from "@/components/MarqueeText";
import { AnimatedSection } from "@/components/AnimatedSection";
import { StatsSection } from "@/components/StatsSection";
import { TechStackGrid } from "@/components/TechStackGrid";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Brayan Ccari | Frontend Developer — React & Next.js",
  description:
    "Brayan Ccari — Frontend Developer building production-ready apps with React, Next.js, and TypeScript. 10+ projects in e-commerce, real-time gaming, and fintech.",
  keywords: [
    "Brayan Ccari",
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "React Portfolio",
    "Frontend Portfolio",
    "JavaScript Developer",
    "TypeScript Developer",
    "Framer Motion",
    "E-commerce React",
    "Web Developer Portfolio",
  ],
};

export default function HomePage() {
  const latestPosts = getAllPosts().slice(0, 2);

  return (
    <>
      {/* ── Hero ── */}
      <HeroSection />

      {/* ── Marquee ── */}
      <div className="container mx-auto px-4">
        <MarqueeText text="Transforming ideas into code, and code into solutions." />
      </div>

      {/* ── Bento grid ── */}
      <section className="container mx-auto px-4 mt-4 grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* About Me card */}
        <AnimatedSection delay={0}>
          <Link
            href="/about-me"
            className="group flex flex-col justify-between h-full p-8 bg-white rounded-2xl border border-gray-600 hover:border-purple transition-all duration-300 hover:shadow-lg hover:shadow-purple/10"
          >
            <div className="flex flex-col gap-3">
              <p className="text-xs font-semibold tracking-widest text-purple uppercase">More</p>
              <h2 className="text-2xl font-bold font-heading text-black">About Me</h2>
              <p className="text-gray-200 text-sm leading-relaxed">
                Frontend developer with a solid track record in responsive, pixel-perfect interfaces. Always learning and adapting to the latest technologies.
              </p>
            </div>
            <span className="mt-6 inline-flex items-center gap-1 text-purple text-sm font-semibold group-hover:gap-3 transition-all duration-200">
              Learn more <ArrowRight size={16} />
            </span>
          </Link>
        </AnimatedSection>

        {/* Projects card */}
        <AnimatedSection delay={0.1}>
          <Link
            href="/my-projects"
            className="group flex flex-col justify-between h-full p-8 bg-white rounded-2xl border border-gray-600 hover:border-purple transition-all duration-300 hover:shadow-lg hover:shadow-purple/10"
          >
            <div className="flex flex-col gap-3">
              <p className="text-xs font-semibold tracking-widest text-purple uppercase">My</p>
              <h2 className="text-2xl font-bold font-heading text-black">Projects</h2>
              <p className="text-gray-200 text-sm leading-relaxed">
                10+ projects built with React, Next.js, TypeScript, and more. From e-commerce platforms to real-time games.
              </p>
            </div>
            <span className="mt-6 inline-flex items-center gap-1 text-purple text-sm font-semibold group-hover:gap-3 transition-all duration-200">
              View all <ArrowRight size={16} />
            </span>
          </Link>
        </AnimatedSection>

        {/* Stats */}
        <AnimatedSection delay={0.05} className="md:col-span-2 lg:col-span-1">
          <StatsSection />
        </AnimatedSection>

        {/* Tech Stack */}
        <AnimatedSection delay={0.1} className="md:col-span-2 lg:col-span-1">
          <div className="p-8 bg-white rounded-2xl border border-gray-600 h-full">
            <h3 className="text-lg font-semibold font-heading text-black mb-6">Tech Stack</h3>
            <TechStackGrid />
          </div>
        </AnimatedSection>

        {/* Blog — latest 2 posts */}
        <AnimatedSection delay={0.05} className="md:col-span-2">
          <div className="p-8 bg-white rounded-2xl border border-gray-600">
            <div className="flex items-center justify-between mb-6">
              <div>
                <p className="text-xs font-semibold tracking-widest text-purple uppercase mb-1">Writing</p>
                <h3 className="text-xl font-bold font-heading text-black">Latest from the blog</h3>
              </div>
              <Link
                href="/blog"
                className="inline-flex items-center gap-1 text-sm text-purple font-semibold hover:opacity-75 transition-opacity"
              >
                View all <ArrowRight size={14} />
              </Link>
            </div>
            <div className="flex flex-col divide-y divide-gray-600">
              {latestPosts.map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`} className="group flex items-start justify-between gap-4 py-4 first:pt-0 last:pb-0">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-purple">
                        {post.tags[0]}
                      </span>
                      <span className="flex items-center gap-1 text-[10px] text-gray-200">
                        <Calendar size={10} /> {post.date}
                      </span>
                    </div>
                    <h4 className="text-sm font-semibold text-black group-hover:text-purple transition-colors duration-200 line-clamp-1">
                      {post.title}
                    </h4>
                    <p className="text-xs text-gray-200 mt-0.5 line-clamp-2 leading-relaxed">
                      {post.excerpt}
                    </p>
                  </div>
                  <ArrowRight size={14} className="text-gray-200 group-hover:text-purple flex-shrink-0 mt-1 transition-colors duration-200" />
                </Link>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* CTA — Let's work together */}
        <AnimatedSection delay={0} direction="left" className="md:col-span-2">
          <Link
            href="/contact"
            className="group flex items-center justify-between p-8 md:p-10 bg-purple rounded-2xl hover:opacity-95 transition-all duration-300 hover:shadow-xl hover:shadow-purple/30"
          >
            <div>
              <p className="text-gray-50 text-sm font-medium mb-2 opacity-80">Open to opportunities</p>
              <h3 className="text-3xl md:text-4xl font-bold font-heading text-gray-50 leading-tight">
                Let&apos;s work{" "}
                <span className="text-white/90">together.</span>
              </h3>
            </div>
            <span className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-full bg-white/20 text-white group-hover:bg-white group-hover:text-purple transition-all duration-300 flex-shrink-0">
              <ArrowRight size={22} />
            </span>
          </Link>
        </AnimatedSection>
      </section>
    </>
  );
}
