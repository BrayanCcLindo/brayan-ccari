"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, Moon, Sun, X } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import { cn } from "@/lib/utils";

const routes = [
  { title: "Home", path: "/" },
  { title: "About Me", path: "/about-me" },
  { title: "Projects", path: "/my-projects" },
  { title: "Blog", path: "/blog" },
  { title: "Contact", path: "/contact" },
];

export function Header() {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/80 dark:bg-[rgba(16,21,28,0.85)] backdrop-blur-md shadow-sm shadow-black/10"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" onClick={() => setMenuOpen(false)}>
          <Image
            src={theme === "light" ? "/images/azul.png" : "/images/blanco.png"}
            alt="Brayan Ccari logo"
            width={40}
            height={40}
            className="rounded-full"
            priority
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {routes.map((r) => (
            <Link
              key={r.path}
              href={r.path}
              className={cn(
                "relative text-sm font-medium transition-colors duration-200 pb-1 group",
                pathname === r.path ? "text-purple" : "text-black hover:text-purple"
              )}
            >
              {r.title}
              <span
                className={cn(
                  "absolute bottom-0 left-0 h-0.5 bg-purple transition-all duration-300 origin-left",
                  pathname === r.path ? "w-full" : "w-0 group-hover:w-full"
                )}
              />
            </Link>
          ))}
        </nav>

        {/* Theme toggle */}
        <button
          onClick={toggleTheme}
          aria-label="Toggle theme"
          className="hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-gray-600 text-black hover:bg-purple hover:text-white transition-all duration-300"
        >
          {theme === "light" ? <Moon size={18} strokeWidth={1.5} /> : <Sun size={18} strokeWidth={1.5} />}
        </button>

        {/* Mobile menu button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          className="flex md:hidden items-center justify-center w-10 h-10 text-black"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-[rgba(16,21,28,0.98)] backdrop-blur-md border-t border-gray-600">
          <nav className="flex flex-col py-4 px-4 gap-1">
            {routes.map((r) => (
              <Link
                key={r.path}
                href={r.path}
                onClick={() => setMenuOpen(false)}
                className={cn(
                  "py-3 px-4 rounded-xl text-sm font-medium transition-colors",
                  pathname === r.path
                    ? "bg-purple/10 text-purple"
                    : "text-black hover:bg-gray-600 hover:text-purple"
                )}
              >
                {r.title}
              </Link>
            ))}
            <button
              onClick={() => { toggleTheme(); setMenuOpen(false); }}
              className="flex items-center gap-2 py-3 px-4 rounded-xl text-sm font-medium text-black hover:bg-gray-600 hover:text-purple transition-colors mt-2"
            >
              {theme === "light" ? <Moon size={16} /> : <Sun size={16} />}
              {theme === "light" ? "Dark mode" : "Light mode"}
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
