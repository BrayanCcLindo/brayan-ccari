import { Github, Globe } from "lucide-react";
import Layout from "../ui/layout";
import { twMerge } from "tailwind-merge";
import { useProtfolioContext } from "../appContext/portfolio-context";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Project } from "../types/type";
import { SEOComponent } from "../assets/SEO/seoComponent";

function WorkCard({ project }: { project: Project }) {
  const { t } = useTranslation("global");

  return (
    <div
      className={twMerge(
        "flex flex-col gap-2 bg-white p-8 justify-between items-center rounded-2xl duration-500 relative",
        "hover:scale-[1.02] hover:duration-500 "
      )}
    >
      <Link
        onClick={() => {
          window.scrollTo(0, 0);
        }}
        to={`/my-projects/${project?.slug}`}
        className="w-full "
      >
        <img
          className="object-contain w-full rounded-2xl"
          src={project?.cover}
          alt="project-cover"
        />
      </Link>

      <div className="flex flex-col items-center justify-between text-gray-200">
        <div className="flex flex-col gap-2">
          <span className="">{project?.slogan}</span>
          <h4 className="text-2xl font-semibold text-black">
            <Link
              className="hover:text-purple"
              to={`/my-projects/${project?.slug}`}
            >
              {project?.title}
            </Link>
          </h4>
          <div className="flex w-full gap-8">
            <a
              href={project?.github}
              target="_blank"
              rel="noopener"
              className={twMerge(
                "bg-gray-400 whitespace-nowrap flex items-center gap-1 justify-center text-gray-50 rounded-2xl hover:bg-purple py-4 px-8 font-semibold w-full",
                "hover:scale-105 duration-100 text-center "
              )}
            >
              <Github size={15} />
              Github
            </a>
            <a
              href={project?.web}
              target="_blank"
              rel="noopener"
              className={twMerge(
                "bg-gray-400 whitespace-nowrap	 flex items-center gap-1 justify-center text-gray-50 rounded-2xl hover:bg-purple py-4 px-8 font-semibold w-full",
                "hover:scale-105 duration-100 text-center "
              )}
            >
              <Globe size={15} />
              {t("projects.website")}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

function Proyects() {
  const { projectNames } = useProtfolioContext();
  const newArrayOfProjects = [...projectNames];
  const firstProyects = newArrayOfProjects.splice(0, 2);
  const secondArrayOfProjects = [...projectNames];

  const secondProjects = secondArrayOfProjects.splice(2);
  const { t } = useTranslation("global");

  return (
    <Layout>
      <SEOComponent
        canonicalUrl="https://brayan-ccari.vercel.app/my-projects"
        title="My Projects | Frontend Developer"
        description="Explore my projects. Throughout my years of experience, I've utilized various technologies such as React.js, Next.js, Express, and many more. Take a look and discover the innovative solutions I've developed."
      />
      <div className={twMerge("grid gap-8 p-4", "lg:grid-cols-[1fr,2fr]")}>
        <div className="flex flex-col items-center justify-start gap-8">
          <h2
            className={twMerge(
              "text-4xl text-center font-semibold text-black",
              "md:hidden text:7xl mb-8"
            )}
          >
            {t("projects.title")}
          </h2>
          <div className="hidden lg:grid">
            {firstProyects?.map((project, id) => (
              <WorkCard key={id} project={project} />
            ))}
          </div>
        </div>
        <div className="">
          <h2
            className={twMerge(
              "hidden text-3xl text-center font-semibold text-black",
              "md:flex text-7xl mb-8"
            )}
          >
            {t("projects.title")}
          </h2>
          <div className={twMerge("grid gap-8", "sm:grid-cols-[1fr,1fr]")}>
            {secondProjects?.map((project, id) => (
              <WorkCard key={id} project={project} />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Proyects;
