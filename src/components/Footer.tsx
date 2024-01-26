import { Link } from "react-router-dom";
import Layout from "../ui/layout";
import { ChevronUp, Github, Linkedin, Twitter } from "lucide-react";
import { useTranslation } from "react-i18next";
import { twMerge } from "tailwind-merge";

function Footer({ nextMode }: { nextMode: string }) {
  function handleScroll() {
    window.scrollTo(0, 0);
  }
  const { t } = useTranslation("global");

  return (
    <>
      <Layout>
        <div className="flex flex-col gap-4 items-center justify-center p-[6rem]">
          <Link to={"/"}>
            <img
              width={120}
              src={
                nextMode === "dark"
                  ? "../../images/azul.png"
                  : "../../images/blanco.png"
              }
              alt="brayan-ccari-logo"
            />
          </Link>
          <ul className="flex gap-8 items-center text-gray-500 font-medium text-lg">
            <li>
              <Link onClick={handleScroll} to="/">
                {t("menu.home")}
              </Link>
            </li>
            <li>
              <Link onClick={handleScroll} to="/about-me">
                {t("menu.about")}
              </Link>
            </li>
            <li>
              <Link onClick={handleScroll} to="/my-projects">
                {t("menu.projects")}
              </Link>
            </li>
            <li>
              <Link onClick={handleScroll} to="/contact">
                {t("menu.contact")}
              </Link>
            </li>
          </ul>
          <p className="text-gray-200">
            © Brayan Ccari, 2023 All rights reserved.
          </p>
          <div className="flex gap-8 items-center ">
            <a
              className={twMerge(
                "rounded-full bg-white flex items-center justify-center p-6 text-purple",
                "hover:bg-purple hover:text-white"
              )}
              target="_blank"
              href="https://twitter.com/BrayanCcLi"
            >
              <Twitter strokeWidth={1} />
            </a>
            <a
              className={twMerge(
                "rounded-full bg-white flex items-center justify-center p-6 text-purple",
                "hover:bg-purple hover:text-white"
              )}
              href="https://www.linkedin.com/in/brayan-ccari/"
              target="_blank"
            >
              <Linkedin strokeWidth={1} />
            </a>
            <a
              className={twMerge(
                "rounded-full bg-white flex items-center justify-center p-6 text-purple",
                "hover:bg-purple hover:text-white"
              )}
              href="https://github.com/BrayanCcLindo"
              target="_blank"
            >
              <Github strokeWidth={1} />
            </a>
          </div>
        </div>
      </Layout>
      <div className="fixed bottom-[20px] right-[20px]">
        <button
          className="bg-white p-4 rounded-full text-purple"
          onClick={handleScroll}
        >
          <ChevronUp />
        </button>
      </div>
    </>
  );
}

export default Footer;
