import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { Menu, Moon, Sun, X } from "lucide-react";
import { twMerge } from "tailwind-merge";
import { useTranslation } from "react-i18next";
import { useProtfolioContext } from "../appContext/portfolio-context";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t, i18n } = useTranslation("global");
  const styleLang = i18n.resolvedLanguage;
  const { value } = useProtfolioContext();

  const toggleDisplay = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const handleScroll = () => {
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  };

  const handleTheme = () => {
    const nextMode = value.mode === "light" ? "dark" : "light";
    value.setMode(nextMode);
  };
  const routes = [
    { title: t("menu.home"), path: "/" },
    { title: t("menu.about"), path: "/about-me" },
    { title: t("menu.projects"), path: "/my-projects" },
    { title: t("menu.contact"), path: "/contact" }
  ];
  return (
    <div
      className={twMerge(
        "flex items-center z-10 p-4 text-black sticky top-0 left-0 right-0 m-auto mb-[50px] bg-gray-300 shadow-sm shadow-gray-600"
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
            className="relative z-10 w-[40px] md:w-[60px] rounded-full"
            src={
              value.mode === "light"
                ? "../../images/azul.png"
                : "../../images/blanco.png"
            }
            alt="brayan-ccari-logo"
          />
        </Link>

        <div className="">
          {isMenuOpen && (
            <>
              <div className="md:hidden bg-gray-300 flex flex-col gap-4 absolute left-0 right-0 top-[70px]  text-center pb-8">
                <ul className="flex flex-col gap-4 pb-8 text-center bg-gray-300">
                  {routes.map(route => (
                    <li className=" hover:text-purple">
                      <NavLink
                        onClick={handleScroll}
                        className={({ isActive }) => {
                          return isActive ? "text-purple" : "text-black";
                        }}
                        to={route.path}
                      >
                        {route.title}
                      </NavLink>
                    </li>
                  ))}
                </ul>
                <div className="flex justify-center gap-6">
                  <button
                    onClick={() => {
                      i18n.changeLanguage("es");
                    }}
                    className={twMerge(
                      `bg-white p-4 rounded-full hover:bg-purple ${
                        styleLang === "es" && "bg-purple"
                      }`
                    )}
                  >
                    <img
                      className="h-[30px] w-[30px]"
                      width={30}
                      height={30}
                      src="../../images/svg/peru.svg"
                      alt=""
                    />
                  </button>
                  <button
                    onClick={() => {
                      i18n.changeLanguage("en");
                    }}
                    className={twMerge(
                      `bg-white p-4 rounded-full hover:bg-purple ${
                        styleLang === "en" && "bg-purple"
                      }`
                    )}
                  >
                    <img
                      width={30}
                      height={30}
                      className="h-[30px] w-[30px]"
                      src="../../images/svg/usa.svg"
                      alt=""
                    />
                  </button>
                  <button
                    onClick={handleTheme}
                    className={twMerge(" text-purple cursor-pointer ")}
                  >
                    {value.mode === "dark" ? <Moon /> : <Sun />}
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
          <ul className="flex items-center gap-8 text-lg font-medium text-black">
            {routes.map(route => (
              <li key={route.title} className="relative group">
                <NavLink
                  to={route.path}
                  className={({ isActive }) =>
                    `text-lg font-medium transition-colors duration-200 relative pb-1
                  ${isActive ? "text-purple" : "text-black hover:text-purple"}`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {route.title}
                      <span
                        className={`absolute bottom-0 left-0 w-full h-0.5 bg-purple 
                                  transform transition-transform duration-300 ease-out origin-left
                                  ${
                                    isActive
                                      ? "scale-x-100"
                                      : "scale-x-0 group-hover:scale-x-100"
                                  }`}
                      ></span>
                    </>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        <div className="hidden gap-6 md:flex">
          <button
            onClick={() => {
              i18n.changeLanguage("es");
            }}
            className={twMerge(
              `bg-white p-4 rounded-full hover:bg-purple ${
                styleLang === "es" && "bg-purple"
              }`
            )}
          >
            <img src="../../images/svg/peru.svg" alt="" />
          </button>
          <button
            onClick={() => {
              i18n.changeLanguage("en");
            }}
            className={twMerge(
              `bg-white p-4 rounded-full hover:bg-purple ${
                styleLang === "en" && "bg-purple"
              }`
            )}
          >
            <img src="../../images/svg/usa.svg" alt="" />
          </button>
          <button
            onClick={handleTheme}
            className={twMerge(
              "bg-white p-4 rounded-full text-gray-200 hover:bg-purple",
              `hover:text-white rotate-0  ${
                value.mode === "light"
                  ? "rotate-[360deg] duration-700"
                  : "rotate:180 duration-700"
              }  `
            )}
          >
            {value.mode === "light" ? (
              <Moon strokeWidth={1} />
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
