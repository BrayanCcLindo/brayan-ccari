import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, Moon, Sun, X } from "lucide-react";
import { twMerge } from "tailwind-merge";
import { useTranslation } from "react-i18next";

interface DarkLight {
  setMode: React.Dispatch<React.SetStateAction<string>>;
  nextMode: string;
}

function Header({ setMode, nextMode }: DarkLight) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t, i18n } = useTranslation("global");
  const styleLang = i18n.resolvedLanguage;

  const toggleDisplay = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const handleScroll = () => {
    setIsMenuOpen(false);

    window.scrollTo(0, 0);
  };

  const handleTheme = () => {
    setMode(nextMode);
  };
  return (
    <div
      className={twMerge(
        "flex items-center z-10 p-4 sticky top-0 left-0 right-0  m-auto mb-[50px] bg-gray-300"
      )}
    >
      <div
        className={twMerge(
          "container m-auto flex items-center justify-between",
          isMenuOpen && " items-center md:h-full md:items-center"
        )}
      >
        <Link to={"/"}>
          <img
            className="relative z-10 w-[80px] md:w-[120px] rounded-full"
            src={
              nextMode === "dark"
                ? "../../images/azul.png"
                : "../../images/blanco.png"
            }
            alt="brayan-ccari-logo"
          />
        </Link>

        <div className="">
          {isMenuOpen && (
            <>
              <div
                className={twMerge(
                  "bg-gray-300 flex flex-col gap-4 text-black absolute left-0 right-0 top-[70px]  text-center pb-8",
                  "md:hidden"
                )}
              >
                <Link
                  onClick={handleScroll}
                  className="w-full text-lg hover:text-purple"
                  to="/"
                >
                  {t("menu.home")}
                </Link>
                {/* <li className="text-lg hover:text-purple">
              </li> */}
                <Link
                  onClick={handleScroll}
                  className="w-full text-lg hover:text-purple"
                  to="/about-me"
                >
                  {t("menu.about")}
                </Link>
                <Link
                  onClick={handleScroll}
                  className="w-full text-lg hover:text-purple"
                  to="/my-projects"
                >
                  {t("menu.projects")}
                </Link>
                <Link
                  onClick={handleScroll}
                  className="w-full text-lg hover:text-purple"
                  to="/contact"
                >
                  {t("menu.contact")}
                </Link>
                <div className="flex justify-center gap-6">
                  <button
                    onClick={() => {
                      i18n.changeLanguage("es");
                    }}
                    className={twMerge(
                      `bg-white p-4 rounded-full text-purple hover:bg-purple ${
                        styleLang === "es" && "bg-purple text-white"
                      }`,
                      " hover:text-white"
                    )}
                  >
                    <img src="../../images/svg/peru.svg" alt="" />
                  </button>
                  <button
                    onClick={() => {
                      i18n.changeLanguage("en");
                    }}
                    className={twMerge(
                      `bg-white p-4 rounded-full text-purple hover:bg-purple ${
                        styleLang === "en" && "bg-purple text-white"
                      }`,
                      " hover:text-white"
                    )}
                  >
                    <img src="../../images/svg/usa.svg" alt="" />
                  </button>
                  <button
                    onClick={handleTheme}
                    className={twMerge(" text-purple cursor-pointer ")}
                  >
                    {nextMode === "dark" ? <Moon /> : <Sun />}
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
        <button onClick={toggleDisplay} className="flex md:hidden">
          {isMenuOpen ? (
            <X className="text-black" />
          ) : (
            <Menu className="text-black" />
          )}
        </button>
        <div className={twMerge("hidden md:flex")}>
          <ul className="flex gap-8 items-center text-gray-500 font-medium text-lg">
            <li className=" hover:text-purple">
              <Link onClick={handleScroll} to="/">
                {t("menu.home")}
              </Link>
            </li>
            <li className=" hover:text-purple">
              <Link onClick={handleScroll} to="/about-me">
                {t("menu.about")}
              </Link>
            </li>
            <li className=" hover:text-purple">
              <Link onClick={handleScroll} to="/my-projects">
                {t("menu.projects")}
              </Link>
            </li>
            <li className=" hover:text-purple">
              <Link onClick={handleScroll} to="/contact">
                {t("menu.contact")}
              </Link>
            </li>
          </ul>
        </div>
        <div className="hidden md:flex gap-6">
          <button
            onClick={() => {
              i18n.changeLanguage("es");
            }}
            className={twMerge(
              `bg-white p-4 rounded-full text-purple hover:bg-purple ${
                styleLang === "es" && "bg-purple text-white"
              }`,
              " hover:text-white"
            )}
          >
            <img src="../../images/svg/peru.svg" alt="" />
          </button>
          <button
            onClick={() => {
              i18n.changeLanguage("en");
            }}
            className={twMerge(
              `bg-white p-4 rounded-full text-purple hover:bg-purple ${
                styleLang === "en" && "bg-purple text-white"
              }`,
              " hover:text-white"
            )}
          >
            <img src="../../images/svg/usa.svg" alt="" />
          </button>
          <button
            onClick={handleTheme}
            className={twMerge(
              "bg-white p-4 rounded-full text-purple  hover:bg-purple",
              `hover:text-white rotate-0  ${
                nextMode === "dark"
                  ? "rotate-[360deg] duration-700"
                  : "rotate:180 duration-700"
              }  `
            )}
          >
            {nextMode === "dark" ? (
              <Moon strokeWidth={1} className=" " />
            ) : (
              <Sun strokeWidth={1} />
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
