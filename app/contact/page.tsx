import type { Metadata } from "next";
import { Mail, MapPin } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Brayan Ccari. Available for frontend development opportunities.",
};

const contacts = [
  {
    icon: Mail,
    label: "Email",
    value: "brayancclindo@gmail.com",
    href: "mailto:brayancclindo@gmail.com",
    description: "Send me an email anytime.",
  },
  {
    icon: LinkedinIcon,
    label: "LinkedIn",
    value: "in/brayan-ccari",
    href: "https://www.linkedin.com/in/brayan-ccari/",
    description: "Connect with me professionally.",
  },
  {
    icon: GithubIcon,
    label: "GitHub",
    value: "BrayanCcLindo",
    href: "https://github.com/BrayanCcLindo",
    description: "Check out my open source work.",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Peru · Remote",
    href: null,
    description: "Open to remote opportunities worldwide.",
  },
];

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 pt-28 pb-20">
      {/* Header */}
      <AnimatedSection className="mb-16 text-center">
        <p className="text-xs font-semibold tracking-widest text-purple uppercase mb-3">Let&apos;s talk</p>
        <h1 className="text-4xl md:text-5xl font-bold font-heading text-black mb-4">Get in Touch</h1>
        <p className="text-gray-200 text-lg max-w-xl mx-auto">
          I&apos;m always open to new opportunities and collaborations. Whether you have a project in mind or just want to say hi, my inbox is open.
        </p>
      </AnimatedSection>

      {/* Contact cards */}
      <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
        {contacts.map((c) => (
          <StaggerItem key={c.label}>
            {c.href ? (
              <a
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="group flex flex-col gap-4 p-6 bg-white rounded-2xl border border-gray-600 hover:border-purple hover:shadow-lg hover:shadow-purple/10 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-2xl bg-purple/10 flex items-center justify-center text-purple group-hover:bg-purple group-hover:text-white transition-all duration-300">
                  <c.icon size={22} strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-xs text-gray-200 uppercase tracking-wide mb-1">{c.label}</p>
                  <p className="text-black font-semibold text-sm">{c.value}</p>
                  <p className="text-gray-200 text-xs mt-1">{c.description}</p>
                </div>
              </a>
            ) : (
              <div className="flex flex-col gap-4 p-6 bg-white rounded-2xl border border-gray-600">
                <div className="w-12 h-12 rounded-2xl bg-purple/10 flex items-center justify-center text-purple">
                  <c.icon size={22} strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-xs text-gray-200 uppercase tracking-wide mb-1">{c.label}</p>
                  <p className="text-black font-semibold text-sm">{c.value}</p>
                  <p className="text-gray-200 text-xs mt-1">{c.description}</p>
                </div>
              </div>
            )}
          </StaggerItem>
        ))}
      </StaggerContainer>
    </div>
  );
}
