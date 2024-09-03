import { FileDown, Github, Linkedin, Mail } from "lucide-react";
import { twMerge } from "tailwind-merge";
import { useTranslation } from "react-i18next";
import Layout from "../ui/layout";
import { useProtfolioContext } from "../appContext/portfolio-context";
import { Link } from "react-router-dom";
import { education } from "../profileData/education";
import { techStackImg } from "../profileData/techStack";
import { CardComponent } from "../components/CardComponent";
import { DescriptionTechStack } from "../components/TechstackCard";
import { SEOComponent } from "../assets/SEO/seoComponent";

function ExperienceCard({ title }: { title: string }) {
  const { experience } = useProtfolioContext();

  return (
    <div className="flex flex-col gap-8 p-8 bg-white rounded-xl">
      <h3 className="text-2xl font-semibold text-black">{title}</h3>
      <div className="flex flex-col gap-8 ">
        {experience?.map((exp, id) => (
          <div key={id} className="flex flex-col gap-4 ">
            <span className="font-medium text-gray-200">{exp.year}</span>
            <h4 className="text-xl font-semibold text-purple">
              {exp.job} - {exp.detail}
            </h4>
            <ul className="divide-y divide-gray-600">
              {exp.description.map((item, index) => (
                <li
                  key={index}
                  className="p-4 text-black transition duration-300 ease-in-out hover:bg-gray-600 hover:duration-300"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
function EducationCard({ title }: { title: string }) {
  return (
    <div className="flex flex-col gap-8 p-8 bg-white rounded-xl">
      <h3 className="text-2xl font-semibold text-black">{title}</h3>
      <ul className="divide-y divide-gray-600">
        {education.map((item, index) => (
          <li
            key={index}
            className="p-4 transition duration-150 ease-in-out hover:bg-gray-600"
          >
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
              <h3 className="mb-1 text-lg font-semibold text-black sm:mb-0">
                {item.job}
              </h3>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple/20 text-purple">
                {item.year}
              </span>
            </div>
            <p className="mt-2 text-gray-200">{item.detail}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

function About() {
  const { t } = useTranslation("global");

  return (
    <Layout>
      <SEOComponent
        canonicalUrl="https://brayan-ccari.vercel.app/about-me"
        title="About Brayan | Frontend Developer"
        description="Frontend developer with a strong track record of creating pixel-perfect, responsive web interfaces. Proficient in HTML, CSS, JavaScript, React, and Next.js."
      />
      <div className={twMerge("grid  gap-8 p-4", "md:grid-cols-[1fr,2fr]")}>
        <div className="flex items-center justify-center p-8 bg-white rounded-xl ">
          <img
            width={300}
            className="object-cover rounded-full"
            src="../../images/profilePhoto.jpg"
            alt="brayan-ccari"
          />
        </div>
        <div className="flex flex-col justify-between gap-8 ">
          <h2 className="text-4xl font-semibold text-center text-black lg:text-7xl">
            {t("about.title")}
          </h2>
          <div className="p-8 text-black bg-white rounded-xl">
            <h1 className="mb-4 text-3xl ">Brayan Ccari Lindo</h1>
            <p>{t("about.description")}</p>
          </div>
        </div>
      </div>
      <div
        className={twMerge("grid  gap-8 p-4", "md:grid-cols-[repeat(2,1fr)]")}
      >
        <ExperienceCard title={t("about.experience")} />
        <EducationCard title={t("about.education")} />
      </div>
      <div className={twMerge("grid gap-8 p-4", "md:grid-cols-[1fr,2fr]")}>
        <CardComponent isClickable={false} title={t("home.contact")}>
          <div className="flex items-center w-full gap-8 p-2 justify-evenly rounded-3xl">
            <a
              href="mailto:brayancclindo@gmail.com"
              className="p-4 border border-gray-600 rounded-full text-purple hover:bg-purple hover:text-white"
            >
              <Mail size={40} strokeWidth={1} />
            </a>
            <a
              href="https://www.linkedin.com/in/brayan-ccari/"
              target="_blank"
              className="p-4 border border-gray-600 rounded-full text-purple hover:bg-purple hover:text-white"
            >
              <Linkedin size={40} strokeWidth={1} />{" "}
            </a>
            <a
              href="https://github.com/BrayanCcLindo"
              target="_blank"
              className="p-4 border border-gray-600 rounded-full text-purple hover:bg-purple hover:text-white"
            >
              <Github size={40} strokeWidth={1} />
            </a>
          </div>
        </CardComponent>
        <CardComponent isClickable={false} title={t("home.TechStack")}>
          <div
            className={twMerge("flex gap-4 text-purple flex-wrap ", "md:gap-8")}
          >
            {techStackImg.map(item => (
              <DescriptionTechStack key={item.title} image={item} />
            ))}
          </div>
        </CardComponent>
      </div>

      <div className={twMerge("grid  gap-8 p-4", "md:grid-cols-[2fr,1fr,1fr]")}>
        <Link
          className="flex items-end justify-between p-8 bg-white rounded-2xl"
          to={"/contact"}
        >
          <div className="">
            <h3 className="text-4xl text-black">
              {t("home.worktogether")}{" "}
              <span className="text-purple">{t("home.together")}</span>
            </h3>
          </div>
        </Link>
        <Link to={"/my-projects"}>
          <CardComponent
            isClickable={true}
            title={t("home.projectsTitle")}
            subtitle={t("home.projectsSubTitle")}
          >
            <img
              className="object-cover w-[300px]"
              src="../../images/projectPhoto.png"
              alt="brayan-ccari-projects"
            />
          </CardComponent>
        </Link>

        <div className="flex items-center justify-center cursor-pointer">
          <a
            href="../../files/BrayanCcari.pdf"
            download={"BrayanCcari.pdf"}
            className="flex items-center justify-center w-full gap-8 px-8 py-4 font-semibold text-center duration-100 bg-gray-400 text-gray-50 rounded-2xl hover:bg-purple hover:scale-105"
          >
            <FileDown size={50} />
            {t("home.downloadButton")}
          </a>
        </div>
      </div>
    </Layout>
  );
}

export default About;
