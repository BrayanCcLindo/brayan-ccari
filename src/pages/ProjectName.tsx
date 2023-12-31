import { useParams } from "react-router-dom";
import Layout from "../ui/layout";
import { useProtfolioContext } from "../appContext/portfolio-context";
import { twMerge } from "tailwind-merge";
import { Github, Globe } from "lucide-react";
import { useTranslation } from "react-i18next";

function Project() {
  const { projectName } = useParams();
  const { projectNames } = useProtfolioContext();
  const { t } = useTranslation("global");

  const newProyjects = [...projectNames];
  const proyectIndex = newProyjects.findIndex(
    (project) => project.slug === projectName
  );
  const oficialProyect = newProyjects[proyectIndex];

  return (
    <>
      <Layout>
        <p className="text-gray-200 uppercase mb-4 p-4">
          {oficialProyect.slogan}
        </p>
        <h1 className="text-3xl text-black md:text-7xl font-semibold mb-8 p-4">
          {oficialProyect.title}
        </h1>
        <div
          className={twMerge("grid  md:grid-cols-[2fr,1fr] gap-8 rounded-xl  ")}
        >
          <img
            className={twMerge(
              "h-[314px] object-cover object-center rounded-xl  w-full object-fit p-8 bg-white md:h-[628px]"
            )}
            src={oficialProyect.photos[1]}
            alt="proyect-main-picture"
          />
          <div className="flex flex-col justify-between gap-4 h-[628px]">
            <img
              className=" object-cover p-8 bg-white rounded-xl h-[314px]    "
              src={oficialProyect.photos[0]}
              alt="proyect-main-picture"
            />
            <img
              className=" h-[314px]  object-cover p-8 bg-white rounded-xl"
              src={oficialProyect.photos[2]}
              alt="proyect-main-picture"
            />
          </div>
        </div>

        <div className="grid gap-8 p-8 bg-white rounded-xl mt-16 md:grid-cols-[2fr,1fr] ">
          <div className="flex flex-col gap-8">
            <h2 className="text-2xl text-black font-semibold">
              {t("projects.description")}{" "}
            </h2>
            {oficialProyect.description.map((description) => (
              <p key={description} className="text-xl text-black">
                {" "}
                {description}
              </p>
            ))}
            <div className="bg-gray-600 rounded-xl py-8 flex justify-center  gap-8 flex-wrap">
              <h3 className="text-2xl text-black font-semibold">
                {t("projects.developed")}{" "}
              </h3>
              {oficialProyect.languages.map((language, index) => (
                <p
                  key={index}
                  className="text-xl text-purple font-semibold flex-flex-nowrap"
                >
                  {language}
                </p>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-8 text-black">
            <h2 className="text-2xl font-semibold">
              {" "}
              {t("projects.projInfo")}
            </h2>
            <p className="text-xl font-bold ">
              {t("projects.category")}:{" "}
              <span className="font-extralight">{oficialProyect.category}</span>
            </p>
            <p className="text-xl font-bold">
              {t("projects.date")}:{" "}
              <span className="font-extralight">{oficialProyect.date}</span>
            </p>
            <p className="text-xl font-bold">
              {t("projects.name")}:{" "}
              <span className="font-extralight">{oficialProyect.name}</span>
            </p>
            <p className="text-xl font-bold">
              {t("projects.web")}:{" "}
              <span className="font-extralight">{oficialProyect.website}</span>
            </p>
            <div className="flex gap-8 items-center  p-2 w-full justify-evenly rounded-3xl">
              <a
                href={oficialProyect.web}
                target="_blank"
                className="bg-white p-4 rounded-full text-purple hover:bg-purple hover:text-white"
              >
                <Globe size={40} strokeWidth={1} />
              </a>
              <a
                href={oficialProyect.github}
                target="_blank"
                className="bg-white p-4 rounded-full text-purple hover:bg-purple hover:text-white"
              >
                <Github size={40} strokeWidth={1} />{" "}
              </a>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default Project;
