import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, Clock, Tag } from "lucide-react";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllPosts, getPostBySlug } from "@/lib/blog";
import { AnimatedSection } from "@/components/AnimatedSection";
import { CodeBlock } from "@/components/CodeBlock";
import { ReadingProgress } from "@/components/ReadingProgress";

const TAG_GRADIENTS: Record<string, [string, string]> = {
  Claude:    ["#7c3aed", "#4f46e5"],
  AI:        ["#2563eb", "#7c3aed"],
  Prompting: ["#4f46e5", "#a855f7"],
  API:       ["#0891b2", "#2563eb"],
  "Next.js": ["#18181b", "#3f3f46"],
  default:   ["#3f5af3", "#818cf8"],
};

function MDXImage({ src, alt }: { src?: string; alt?: string }) {
  if (!src) return null;
  return (
    <figure className="my-8">
      <div className="relative w-full rounded-2xl overflow-hidden border border-gray-600" style={{ aspectRatio: "16/9" }}>
        <Image
          src={src}
          alt={alt ?? ""}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 750px"
        />
      </div>
      {alt && (
        <figcaption className="mt-2 text-center text-xs text-gray-200 italic">{alt}</figcaption>
      )}
    </figure>
  );
}

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Post Not Found" };
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: post.cover ? [{ url: post.cover }] : [],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const [gradFrom, gradTo] = TAG_GRADIENTS[post.tags[0]] ?? TAG_GRADIENTS.default;

  return (
    <>
      <ReadingProgress />

      <div className="container mx-auto px-4 pt-28 pb-20 max-w-3xl">
        {/* Back */}
        <AnimatedSection className="mb-10">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-gray-200 hover:text-purple transition-colors text-sm font-medium"
          >
            <ArrowLeft size={16} /> Back to Blog
          </Link>
        </AnimatedSection>

        {/* Hero cover */}
        <AnimatedSection className="mb-10">
          {post.cover ? (
            <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden border border-gray-600">
              <Image
                src={post.cover}
                alt={post.title}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 750px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
          ) : (
            <div
              className="relative h-64 md:h-72 rounded-2xl overflow-hidden flex items-center justify-center"
              style={{ background: `linear-gradient(135deg, ${gradFrom}, ${gradTo})` }}
            >
              <span
                className="absolute text-white/10 font-bold font-heading leading-none select-none"
                style={{ fontSize: "clamp(8rem, 25vw, 16rem)" }}
              >
                {post.title[0]}
              </span>
              <div className="relative z-10 flex flex-wrap gap-2 px-8 justify-center">
                {post.tags.map((t) => (
                  <span key={t} className="px-3 py-1.5 rounded-full text-sm font-bold text-white/90 bg-white/15 backdrop-blur-sm border border-white/20">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          )}
        </AnimatedSection>

        <AnimatedSection>
          {/* Meta */}
          <div className="flex flex-wrap items-center gap-4 mb-5 text-xs text-gray-200">
            <span className="flex items-center gap-1.5">
              <Calendar size={12} />
              {new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock size={12} />
              {post.readingTime} min read
            </span>
            {post.tags.map((tag) => (
              <span key={tag} className="flex items-center gap-1 px-2 py-0.5 rounded-md bg-purple/10 text-purple font-semibold">
                <Tag size={11} /> {tag}
              </span>
            ))}
          </div>

          {/* Title + excerpt */}
          <h1 className="text-4xl md:text-5xl font-bold font-heading text-black mb-5 leading-tight">
            {post.title}
          </h1>
          <p className="text-gray-200 text-lg mb-10 pb-10 border-b border-gray-600 leading-relaxed">
            {post.excerpt}
          </p>

          {/* MDX body */}
          <article className="prose prose-neutral dark:prose-invert max-w-none
            prose-headings:font-heading prose-headings:text-black prose-headings:font-bold
            prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
            prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
            prose-p:text-gray-200 prose-p:leading-relaxed prose-p:my-4
            prose-a:text-purple prose-a:no-underline hover:prose-a:underline
            prose-strong:text-black prose-strong:font-semibold
            prose-code:text-purple prose-code:bg-white prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm prose-code:font-mono prose-code:before:content-none prose-code:after:content-none
            prose-pre:p-0 prose-pre:bg-transparent prose-pre:border-none prose-pre:my-0
            prose-blockquote:border-purple prose-blockquote:text-gray-200 prose-blockquote:not-italic
            prose-li:text-gray-200 prose-li:my-1
            prose-table:text-sm prose-th:text-black prose-th:border prose-th:border-gray-600 prose-th:bg-white prose-th:px-4 prose-th:py-2 prose-td:border prose-td:border-gray-600 prose-td:px-4 prose-td:py-2 prose-td:text-gray-200
            prose-hr:border-gray-600">
            <MDXRemote
              source={post.content}
              components={{ pre: CodeBlock, img: MDXImage }}
            />
          </article>

          {/* Author card */}
          <div className="mt-16 pt-10 border-t border-gray-600 flex items-center gap-4">
            <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-purple flex-shrink-0">
              <Image
                src="/images/brayan-ccari-profile.jpg"
                alt="Brayan Ccari"
                fill
                className="object-cover"
                sizes="56px"
              />
            </div>
            <div>
              <p className="text-black font-bold text-sm">Brayan Ccari</p>
              <p className="text-gray-200 text-xs mt-0.5">Frontend Developer · React & Next.js</p>
            </div>
            <Link
              href="/contact"
              className="ml-auto inline-flex items-center gap-1.5 px-4 py-2 rounded-xl border border-purple text-purple text-sm font-semibold hover:bg-purple hover:text-white transition-all duration-200 flex-shrink-0"
            >
              Get in touch
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </>
  );
}
