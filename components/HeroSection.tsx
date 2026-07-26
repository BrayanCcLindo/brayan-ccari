"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown, FileDown, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.25 } },
};

const item = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] } },
};

const imageVariant = {
  hidden: { opacity: 0, scale: 0.88 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.7, ease: "easeOut", delay: 0.15 } },
};

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-20 pb-16 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left — text content */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="flex flex-col gap-6 order-2 lg:order-1"
          >
            {/* Greeting */}
            <motion.p variants={item} className="text-gray-200 text-xl font-medium">
              Hi, I&apos;m
            </motion.p>

            {/* Name */}
            <motion.h1
              variants={item}
              className="text-5xl md:text-6xl xl:text-7xl font-bold font-heading leading-tight"
            >
              <span className="bg-gradient-to-r from-[#3f5af3] to-[#818cf8] bg-clip-text text-transparent">
                Brayan
              </span>
              <br />
              <span className="text-black">Ccari</span>
            </motion.h1>

            {/* Title */}
            <motion.h2 variants={item} className="text-xl md:text-2xl text-gray-200 font-medium">
              Frontend Developer
            </motion.h2>

            {/* Description */}
            <motion.p variants={item} className="text-gray-200 text-base md:text-lg leading-relaxed max-w-lg">
              I turn complex problems into interfaces people actually enjoy using. Built 10+
              projects across e-commerce, gaming, and finance — always looking for the next
              challenge.
            </motion.p>

            {/* CTA buttons */}
            <motion.div variants={item} className="flex flex-wrap gap-4">
              <Link
                href="/my-projects"
                className="inline-flex items-center gap-2 px-6 py-3 bg-purple text-gray-50 rounded-2xl font-semibold hover:opacity-90 hover:scale-105 transition-all duration-200 shadow-lg shadow-purple/25"
              >
                View Projects
                <ArrowRight size={18} />
              </Link>
              <a
                href="/files/CV.BrayanCcari.pdf"
                download="BrayanCcari-CV.pdf"
                className="inline-flex items-center gap-2 px-6 py-3 border border-purple text-purple rounded-2xl font-semibold hover:bg-purple hover:text-gray-50 hover:scale-105 transition-all duration-200"
              >
                <FileDown size={18} />
                Download CV
              </a>
            </motion.div>

            {/* Social links */}
            <motion.div variants={item} className="flex items-center gap-3">
              <a
                href="mailto:brayancclindo@gmail.com"
                aria-label="Email"
                className="w-11 h-11 flex items-center justify-center rounded-full border border-gray-600 text-gray-200 hover:bg-purple hover:text-white hover:border-purple transition-all duration-200"
              >
                <Mail size={20} strokeWidth={1.5} />
              </a>
              <a
                href="https://www.linkedin.com/in/brayan-ccari/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-11 h-11 flex items-center justify-center rounded-full border border-gray-600 text-gray-200 hover:bg-purple hover:text-white hover:border-purple transition-all duration-200"
              >
                <LinkedinIcon size={20} />
              </a>
              <a
                href="https://github.com/BrayanCcLindo"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="w-11 h-11 flex items-center justify-center rounded-full border border-gray-600 text-gray-200 hover:bg-purple hover:text-white hover:border-purple transition-all duration-200"
              >
                <GithubIcon size={20} />
              </a>
            </motion.div>
          </motion.div>

          {/* Right — profile image */}
          <motion.div
            variants={imageVariant}
            initial="hidden"
            animate="show"
            className="flex justify-center order-1 lg:order-2"
          >
            <motion.div
              animate={{ y: [0, -14, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
              className="relative"
            >
              {/* Gradient glow ring */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
                {/* Outer glow */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#3f5af3] to-[#818cf8] opacity-20 blur-2xl scale-110" />
                {/* Gradient border ring */}
                <div className="relative w-full h-full rounded-full p-[3px] bg-gradient-to-br from-[#3f5af3] via-[#818cf8] to-[#3f5af3]">
                  <div className="w-full h-full rounded-full overflow-hidden bg-white">
                    <Image
                      src="/images/brayan-ccari-profile.jpg"
                      alt="Brayan Ccari — Frontend Developer"
                      fill
                      className="object-cover rounded-full"
                      priority
                      sizes="(max-width: 768px) 256px, (max-width: 1024px) 320px, 384px"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.6 }}
          className="flex flex-col items-center gap-2 mt-16"
        >
          <span className="text-gray-200 text-xs tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown size={22} className="text-purple" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
