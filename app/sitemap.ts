import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/blog";
import { projects } from "@/data/projects";

const BASE = "https://brayan-ccari.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts().map((post) => ({
    url: `${BASE}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const projectPages = projects.map((p) => ({
    url: `${BASE}/my-projects/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    { url: BASE,                    lastModified: new Date(), changeFrequency: "monthly", priority: 1.0 },
    { url: `${BASE}/about-me`,      lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/my-projects`,   lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/blog`,          lastModified: new Date(), changeFrequency: "weekly",  priority: 0.8 },
    { url: `${BASE}/contact`,       lastModified: new Date(), changeFrequency: "yearly",  priority: 0.6 },
    ...projectPages,
    ...posts,
  ];
}
