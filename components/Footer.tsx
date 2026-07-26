import Link from "next/link";
import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-600 mt-20">
      <div className="container mx-auto px-4 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-gray-200 text-sm">
          © {year} Brayan Ccari. All rights reserved.
        </p>

        <nav className="flex items-center gap-6 text-sm text-gray-200">
          <Link href="/about-me" className="hover:text-purple transition-colors">About</Link>
          <Link href="/my-projects" className="hover:text-purple transition-colors">Projects</Link>
          <Link href="/blog" className="hover:text-purple transition-colors">Blog</Link>
          <Link href="/contact" className="hover:text-purple transition-colors">Contact</Link>
        </nav>

        <div className="flex items-center gap-4">
          <a
            href="mailto:brayancclindo@gmail.com"
            aria-label="Email"
            className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-600 text-gray-200 hover:bg-purple hover:text-white hover:border-purple transition-all duration-200"
          >
            <Mail size={16} />
          </a>
          <a
            href="https://www.linkedin.com/in/brayan-ccari/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-600 text-gray-200 hover:bg-purple hover:text-white hover:border-purple transition-all duration-200"
          >
            <LinkedinIcon size={16} />
          </a>
          <a
            href="https://github.com/BrayanCcLindo"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-600 text-gray-200 hover:bg-purple hover:text-white hover:border-purple transition-all duration-200"
          >
            <GithubIcon size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}
