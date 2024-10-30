import { FileDown, Github, Linkedin, Mail } from "lucide-react";
import Layout from "../ui/layout";
import { Link } from "react-router-dom";
import { twMerge } from "tailwind-merge";
import { useTranslation } from "react-i18next";
import { techStackImg } from "../profileData/techStack";
import { CardComponent } from "../components/CardComponent";
import { DescriptionTechStack } from "../components/TechstackCard";
import { SEOComponent } from "../assets/SEO/seoComponent";

const DetailedInfo = ({
  title,
  description
}: {
  title: string;
  description: string;
}) => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 p-8 border border-gray-600 rounded-3xl">
      <span className="text-3xl font-medium text-purple">{title}</span>
      <p className="text-xl text-center text-black">{description}</p>
    </div>
  );
};

function Home() {
  const { t } = useTranslation("global");

  return (
    <Layout>
      <SEOComponent
        canonicalUrl="https://brayan-ccari.vercel.app/"
        title="Brayan Ccari | Frontend Developer"
        description="I'm a Frontend Engineer, enthusiast UI UX Designer, and content creator who has a passion for learning and building my knowledge at the intersection of design and engineering."
      />
      <div className="flex flex-col gap-8 p-4">
        <div className="flex flex-col justify-between gap-8 md:flex-row">
          <div
            className={twMerge(
              "flex flex-col gap-8 p-8 rounded-xl bg-white flex-1  items-center group relative duration-500",
              "lg:flex-row gap-14"
            )}
          >
            <img
              className="max-w-[200px] md:w-[300px] rounded-full"
              src="../../images/profilePhoto.jpg"
              alt="brayan-ccari"
            />
            <div className="flex flex-col justify-between gap-4 ">
              <span className="text-lg text-center text-gray-200">
                {t("home.name")}
              </span>
              <h1 className="text-2xl font-semibold text-center text-purple">
                Frontend Developer
              </h1>
              <p className="text-center text-black">{t("home.description")}</p>
              <div className="flex justify-center grow-0">
                <a
                  href="../../files/CV.pdf"
                  download={"BrayanCcari-CV.pdf"}
                  className="flex items-center justify-center gap-2 px-3 py-2 font-semibold text-center duration-100 bg-gray-400 text-gray-50 rounded-2xl hover:bg-purple hover:scale-105 grow-0"
                >
                  <FileDown size={20} />
                  {t("home.downloadButton")}
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-col flex-1 gap-4">
            <div className="p-2 bg-white rounded-full marquee-container">
              <p className="font-bold text-gray-200 marquee-text font-basic">
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
                rel="noopener"
                className="p-4 border border-gray-600 rounded-full text-purple hover:bg-purple hover:text-white"
              >
                <Linkedin size={40} strokeWidth={1} />{" "}
              </a>
              <a
                href="https://github.com/BrayanCcLindo"
                target="_blank"
                rel="noopener"
                className="p-4 border border-gray-600 rounded-full text-purple hover:bg-purple hover:text-white"
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
              {techStackImg.map(item => (
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
            <DetailedInfo title="+ 03" description={t("home.experience")} />
            <DetailedInfo title="+ 20" description={t("home.totalProjects")} />
            <DetailedInfo title="+ 20" description={t("home.responsiveApps")} />
          </div>
          <Link
            className="flex items-end justify-between p-8 bg-white rounded-2xl"
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
