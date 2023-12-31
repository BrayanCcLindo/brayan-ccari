import { Github, Globe } from "lucide-react";
import Layout from "../ui/layout";
import { twMerge } from "tailwind-merge";
import { Project, useProtfolioContext } from "../appContext/portfolio-context";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function WorkCard({ project }: { project: Project }) {
  const { t } = useTranslation("global");

  return (
    <div
      // to={`/my-work/${project?.slug}`}
      className={twMerge(
        "flex flex-col gap-2 bg-white p-8 justify-center items-center rounded-2xl duration-500 relative",
        "hover:scale-[1.02] duration-500 "
      )}
    >
      <Link
        onClick={() => {
          window.scrollTo(0, 0);
        }}
        to={`/my-projects/${project?.slug}`}
        className="w-full h-4/5 absolute top-0 bg-transparent"
      ></Link>
      <div className="flex items-center justify-center">
        <img
          className="rounded-2xl mb-4 object-cover "
          src={project?.cover}
          alt="project-cover"
        />
      </div>

      <div className="flex justify-between items-center text-gray-200">
        <div className="flex flex-col gap-2">
          <span className=" ">{project?.slogan}</span>
          <h4 className="text-2xl text-black font-semibold">
            <Link
              className="hover:text-purple"
              to={`/my-projects/${project?.slug}`}
            >
              {project?.title}
            </Link>
          </h4>
        </div>
      </div>
      <div className="flex gap-8 w-full">
        <a
          href={project?.github}
          target="_blank"
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
      <div
        className={twMerge(
          "grid  gap-8 p-4 ",
          "md:grid-cols-[1fr,1fr]",
          "lg:grid-cols-[1fr,2fr]"
        )}
      >
        <div className="flex flex-col gap-8 justify-start items-center">
          <h2
            className={twMerge(
              "text-4xl text-center font-semibold text-black",
              "md:hidden text:7xl mb-8"
            )}
          >
            {t("projects.title")}
          </h2>
          {firstProyects?.map((project, id) => (
            <WorkCard key={id} project={project} />
          ))}
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
          <div className={twMerge("grid  gap-8", "lg:grid-cols-[1fr,1fr]")}>
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
