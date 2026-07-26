import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import type { BlogPost } from "@/types";

const POSTS_DIR = path.join(process.cwd(), "content", "blog");

function calcReadingTime(content: string) {
  return Math.max(1, Math.ceil(content.trim().split(/\s+/).length / 200));
}

export function getAllPosts(): BlogPost[] {
  if (!fs.existsSync(POSTS_DIR)) return [];

  return fs
    .readdirSync(POSTS_DIR)
    .filter((f) => f.endsWith(".mdx"))
    .map((filename) => {
      const slug = filename.replace(".mdx", "");
      const raw = fs.readFileSync(path.join(POSTS_DIR, filename), "utf-8");
      const { data, content } = matter(raw);
      return {
        slug,
        title: data.title as string,
        date: data.date as string,
        excerpt: data.excerpt as string,
        tags: (data.tags as string[]) ?? [],
        cover: data.cover as string | undefined,
        readingTime: calcReadingTime(content),
        content,
      };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPostBySlug(slug: string): BlogPost | null {
  const filePath = path.join(POSTS_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  return {
    slug,
    title: data.title as string,
    date: data.date as string,
    excerpt: data.excerpt as string,
    tags: (data.tags as string[]) ?? [],
    cover: data.cover as string | undefined,
    readingTime: calcReadingTime(content),
    content,
  };
}
