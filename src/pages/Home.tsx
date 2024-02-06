import { ArrowRight, FileDown, Github, Linkedin, Mail } from "lucide-react";
import Layout from "../ui/layout";
import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { twMerge } from "tailwind-merge";
import {
  TechStackType,
  useProtfolioContext,
} from "../appContext/portfolio-context";
import { useTranslation } from "react-i18next";

export const CardComponent = ({
  children,
  subtitle,
  title,
  isClickable,
}: {
  children?: ReactNode;
  subtitle?: string;
  title: string;
  isClickable: boolean;
}) => {
  return (
    <div
      className={twMerge(
        "flex flex-col gap-2 bg-white p-4 justify-center rounded-2xl relative duration-300 group",
        isClickable && "hover:scale-105 duration-300"
      )}
    >
      <div className="flex items-center justify-center">{children}</div>
      <div className="flex justify-between items-center text-gray-100">
        <div className="flex flex-col gap-2">
          <span className="text-sm uppercase  text-gray-200 ">{subtitle}</span>
          <h4 className="text-2xl text-black font-medium">{title}</h4>
        </div>
      </div>
      {isClickable && (
        <div className="text-gray-200 absolute right-0 bottom-0 p-2 rounded-full hidden  group-hover:flex ">
          <ArrowRight size={25} />
        </div>
      )}
    </div>
  );
};

export const DescriptionTechStack = ({ image }: { image: TechStackType }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 relative group/item">
      <img
        className="duration-100 hover:scale-110 cursor-pointer"
        src={image.logo}
        alt={image.title}
      />
      <span className="text-center text-xs bg-gray-100 font-bold p-2 rounded-lg absolute top-[65px] z-20  group/edit invisible group-hover/item:visible ">
        {image.title}
      </span>
    </div>
  );
};

const DetailedInfo = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div className="p-8 flex flex-col items-center  gap-4 justify-center bg-gray-600 rounded-3xl">
      <span className="text-3xl font-medium text-purple">{title}</span>
      <p className="text-xl text-gray-200 text-center ">{description}</p>
    </div>
  );
};

function Home() {
  const { techStackImg } = useProtfolioContext();
  const { t } = useTranslation("global");

  return (
    <Layout>
      <div className="flex flex-col gap-8 p-4">
        <div className=" flex flex-col justify-between gap-8  md:flex-row">
          <div
            className={twMerge(
              "flex flex-col gap-8 p-8 rounded-xl bg-white flex-1  items-center group relative duration-500",
              "lg:flex-row gap-14"
              // "hover:scale-105 duration-500"
            )}
          >
            <img
              className="max-w-[200px] md:w-[300px] rounded-full"
              src="../../images/profilePhoto.jpg"
              alt="brayan-ccari"
            />
            <div className="flex flex-col gap-4 justify-between  ">
              <span className="text-gray-200 text-lg text-center">
                {t("home.name")}
              </span>
              <h1 className=" text-2xl text-purple font-semibold text-center">
                Frontend Developer
              </h1>
              <p className="text-black text-center">{t("home.description")}</p>
              <div className="flex grow-0 justify-center">
                <a
                  href="../../files/BrayanCcari.pdf"
                  download={"BrayanCcari.pdf"}
                  className="bg-gray-400 text-gray-50 rounded-2xl hover:bg-purple  font-semibold py-2 px-3  flex items-center justify-center gap-2 hover:scale-105 duration-100 text-center grow-0"
                >
                  <FileDown size={20} />
                  {t("home.downloadButton")}
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4 flex-1">
            <div className="marquee-container  rounded-full bg-white p-2">
              <p className="marquee-text font-basic text-gray-200 font-bold">
                {t("home.sliderText")}
              </p>
            </div>
            <div className={twMerge("grid  gap-8", "lg:grid-cols-[1fr_1fr]")}>
              <Link to={"/about-me"}>
                <CardComponent
                  isClickable={true}
                  title={t("home.aboutMeTitle")}
                  subtitle={t("home.aboutMeSubTitle")}
                >
                  <img
                    className="object-cover w-[58%]"
                    src="../../images/aboutMePhoto.png"
                    alt="about-brayan-ccari"
                  />
                </CardComponent>
              </Link>
              <Link to={"/my-projects"}>
                <CardComponent
                  isClickable={true}
                  title={t("home.projectsTitle")}
                  subtitle={t("home.projectsSubTitle")}
                >
                  <img
                    className="object-cover"
                    src="../../images/homeprojectPhoto.png"
                    alt="brayan-projects"
                  />
                </CardComponent>
              </Link>
            </div>
          </div>
        </div>
        <div
          className={twMerge(
            "grid grid-cols-1fr gap-8 rounded-full ",
            "md:grid-cols-[1fr_2fr]"
          )}
        >
          <CardComponent isClickable={false} title={t("home.contact")}>
            <div className="flex gap-8 items-center bg-gray-600 p-2 w-full justify-evenly rounded-3xl">
              <a
                href="mailto:brayancclindo@gmail.com"
                className="bg-white p-4 rounded-full text-purple hover:bg-purple hover:text-white"
              >
                <Mail size={40} strokeWidth={1} />
              </a>
              <a
                href="https://www.linkedin.com/in/brayan-ccari/"
                target="_blank"
                className="bg-white p-4 rounded-full text-purple hover:bg-purple hover:text-white"
              >
                <Linkedin size={40} strokeWidth={1} />{" "}
              </a>
              <a
                href="https://github.com/BrayanCcLindo"
                target="_blank"
                className="bg-white p-4 rounded-full text-purple hover:bg-purple hover:text-white"
              >
                <Github size={40} strokeWidth={1} />
              </a>
            </div>
          </CardComponent>
          <CardComponent isClickable={false} title={t("home.TechStack")}>
            <div
              className={twMerge(
                "flex gap-4 text-purple flex-wrap ",
                "md:gap-8"
              )}
            >
              {techStackImg.map((item) => (
                <DescriptionTechStack key={item.title} image={item} />
              ))}
            </div>
          </CardComponent>
        </div>
        <div className={twMerge("grid gap-8", "lg:grid-cols-[repeat(2,1fr)]")}>
          <div
            className={twMerge(
              "flex flex-col  gap-8 p-8 justify-center bg-white rounded-2xl",
              "md:flex-row"
            )}
          >
            <DetailedInfo title="+ 01" description={t("home.experience")} />
            <DetailedInfo title="+ 20" description={t("home.totalProjects")} />
            <DetailedInfo title="+ 10" description={t("home.responsiveApps")} />
          </div>
          <Link
            className="flex justify-between bg-white p-8 items-end rounded-2xl"
            to={"/contact"}
          >
            <div className="">
              <h3 className="text-4xl text-black ">
                {t("home.worktogether")}{" "}
                <span className="text-purple">{t("home.together")}</span>
              </h3>
            </div>
          </Link>
        </div>
      </div>
    </Layout>
  );
}

export default Home;
