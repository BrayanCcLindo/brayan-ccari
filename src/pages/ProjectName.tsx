import { useParams } from "react-router-dom";
import Layout from "../ui/layout";
import { useProtfolioContext } from "../appContext/portfolio-context";
import { Github, Globe } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import ButtonComponent from "../components/button-component";
import GaleriaImagenes from "../components/galleryImg";

function Project() {
  const { projectName } = useParams();
  const { projectNames } = useProtfolioContext();
  const { t } = useTranslation("global");
  const [isListShowed, setIsListShowed] = useState(false);

  const newProyjects = [...projectNames];
  const proyectIndex = newProyjects.findIndex(
    project => project.slug === projectName
  );
  const oficialProyect = newProyjects[proyectIndex];

  const bulletList = isListShowed
    ? oficialProyect.bullets
    : [oficialProyect.bullets[0]];

  return (
    <>
      <Layout>
        <p className="p-4 mb-4 text-gray-200 uppercase">
          {oficialProyect.slogan}
        </p>
        <h1 className="p-4 mb-8 text-3xl font-semibold text-black md:text-7xl">
          {oficialProyect.title}
        </h1>

        <div className="grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 md:grid-cols-3 sm:hidden">
          {oficialProyect.photos.map(image => (
            <div key={image.id} className="overflow-hidden rounded-lg ">
              <img
                src={image.src}
                alt={image.alt}
                width={400}
                height={400}
                className="aspect-[3/2] object-cover w-full h-full transition-all duration-300 hover:scale-105 hover:duration-300"
              />
            </div>
          ))}
        </div>

        <GaleriaImagenes images={oficialProyect.photos} />
        <div className="grid gap-4 p-8 bg-white rounded-xl mt-16 md:grid-cols-[2fr,1fr] ">
          <div className="flex flex-col gap-8">
            <h2 className="text-xl font-semibold text-black">
              {t("projects.description")}{" "}
            </h2>
            {oficialProyect.description.map(description => (
              <p key={description} className="text-black">
                {" "}
                {description}
              </p>
            ))}
            <h2 className="text-xl font-semibold text-black">
              Funcionalidades Clave
            </h2>
            <ul className="grid gap-6 text-black md:grid-cols-2 lg:grid-cols-2">
              {bulletList.map((bullet, index) => (
                <li
                  key={index}
                  className="p-4 border border-gray-600 rounded-lg"
                >
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold">{bullet.title}</h3>
                    <p className="text-base text-muted-foreground">
                      {bullet.bullet}
                    </p>
                  </div>
                </li>
              ))}
              {!isListShowed ? (
                <ButtonComponent onClick={() => setIsListShowed(true)}>
                  {t("projects.Show-details")}
                </ButtonComponent>
              ) : (
                <ButtonComponent onClick={() => setIsListShowed(false)}>
                  {t("projects.Hide-details")}
                </ButtonComponent>
              )}
            </ul>
          </div>
          <div className="flex flex-col gap-8 text-black md:border-l md:border-gray-600 md:pl-4">
            <h2 className="text-xl font-semibold"> {t("projects.projInfo")}</h2>
            <p className="font-bold ">
              {t("projects.category")}:{" "}
              <span className="font-extralight">{oficialProyect.category}</span>
            </p>
            <p className="font-bold ">
              {t("projects.date")}:{" "}
              <span className="font-extralight">{oficialProyect.date}</span>
            </p>
            <p className="font-bold ">
              {t("projects.name")}:{" "}
              <span className="font-extralight">{oficialProyect.name}</span>
            </p>
            <p className="font-bold ">
              {t("projects.web")}:{" "}
              <span className="font-extralight">{oficialProyect.website}</span>
            </p>
            <div className="flex items-center w-full gap-8 p-2 justify-evenly rounded-3xl">
              <a
                href={oficialProyect.web}
                target="_blank"
                rel="noopener"
                className="p-4 bg-white rounded-full text-purple hover:bg-purple hover:text-white"
              >
                <Globe size={40} strokeWidth={1} />
              </a>
              <a
                href={oficialProyect.github}
                target="_blank"
                rel="noopener"
                className="p-4 bg-white rounded-full text-purple hover:bg-purple hover:text-white"
              >
                <Github size={40} strokeWidth={1} />{" "}
              </a>
            </div>
            <div className="flex flex-col flex-wrap justify-center gap-8 px-4 py-8 bg-gray-600 rounded-xl">
              <h3 className="text-xl font-semibold text-black">
                {t("projects.developed")}{" "}
              </h3>
              <div className="flex flex-col gap-4">
                {oficialProyect.languages.map((language, index) => (
                  <p
                    key={index}
                    className="font-semibold text-purple flex-flex-nowrap"
                  >
                    {language}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default Project;
