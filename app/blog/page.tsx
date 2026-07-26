import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { getAllPosts } from "@/lib/blog";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "Blog",
  description: "Practical articles on AI, Claude, prompt engineering, and frontend development.",
};

const TAG_GRADIENTS: Record<string, [string, string]> = {
  Claude:    ["#7c3aed", "#4f46e5"],
  AI:        ["#2563eb", "#7c3aed"],
  Prompting: ["#4f46e5", "#a855f7"],
  API:       ["#0891b2", "#2563eb"],
  "Next.js": ["#18181b", "#3f3f46"],
  default:   ["#3f5af3", "#818cf8"],
};

function CoverBlock({ cover, title, tags }: { cover?: string; title: string; tags: string[] }) {
  if (cover) {
    return (
      <div className="relative h-52 overflow-hidden">
        <Image
          src={cover}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
      </div>
    );
  }

  const [from, to] = TAG_GRADIENTS[tags[0]] ?? TAG_GRADIENTS.default;
  return (
    <div
      className="relative h-52 overflow-hidden flex items-center justify-center"
      style={{ background: `linear-gradient(135deg, ${from}, ${to})` }}
    >
      <span
        className="absolute text-white/10 font-bold font-heading leading-none select-none pointer-events-none"
        style={{ fontSize: "clamp(6rem, 20vw, 12rem)" }}
      >
        {title[0]}
      </span>
      <div className="relative z-10 flex flex-wrap gap-1.5 px-6">
        {tags.map((t) => (
          <span key={t} className="px-2.5 py-1 rounded-full text-xs font-bold text-white/90 bg-white/15 backdrop-blur-sm border border-white/20">
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="container mx-auto px-4 pt-28 pb-20">
      <AnimatedSection className="mb-16 text-center">
        <p className="text-xs font-semibold tracking-widest text-purple uppercase mb-3">Writing</p>
        <h1 className="text-4xl md:text-5xl font-bold font-heading text-black mb-4">Blog</h1>
        <p className="text-gray-200 text-lg max-w-xl mx-auto">
          Practical guides on AI, Claude, and modern frontend — no fluff, just what works.
        </p>
      </AnimatedSection>

      {posts.length === 0 ? (
        <AnimatedSection className="text-center py-20">
          <p className="text-gray-200 text-lg">No posts yet. Coming soon!</p>
        </AnimatedSection>
      ) : (
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {posts.map((post) => (
            <StaggerItem key={post.slug}>
              <Link href={`/blog/${post.slug}`} className="group block h-full">
                <article className="flex flex-col h-full bg-white rounded-2xl border border-gray-600 overflow-hidden hover:border-purple hover:shadow-xl hover:shadow-purple/10 transition-all duration-300">
                  <CoverBlock cover={post.cover} title={post.title} tags={post.tags} />

                  <div className="flex flex-col flex-1 p-6 gap-4">
                    <div className="flex items-center gap-4 text-[11px] text-gray-200">
                      <span className="flex items-center gap-1.5">
                        <Calendar size={11} />
                        {new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Clock size={11} />
                        {post.readingTime} min read
                      </span>
                    </div>

                    <h2 className="text-xl font-bold font-heading text-black group-hover:text-purple transition-colors duration-200 leading-snug">
                      {post.title}
                    </h2>
                    <p className="text-gray-200 text-sm leading-relaxed flex-1 line-clamp-3">
                      {post.excerpt}
                    </p>

                    <span className="inline-flex items-center gap-1.5 text-purple text-sm font-semibold group-hover:gap-3 transition-all duration-200 mt-auto">
                      Read article <ArrowRight size={15} />
                    </span>
                  </div>
                </article>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>
      )}
    </div>
  );
}
