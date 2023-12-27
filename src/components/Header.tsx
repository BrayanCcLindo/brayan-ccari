import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Github, Linkedin, Menu, Moon, Sun, X } from "lucide-react";
import { twMerge } from "tailwind-merge";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mode, setMode] = useState("light");
  const nextMode = mode === "light" ? "dark" : "light";

  useEffect(() => {
    document.body.dataset.theme = mode;
  }, [mode]);

  const toggleDisplay = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const handleScroll = () => {
    setIsMenuOpen(false);

    window.scrollTo(0, 0);
  };

  console.log(nextMode);
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
            className="relative z-10 w-[80px] md:w-[120px]"
            src="../../images/logoPorfolio.png"
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
                  Home
                </Link>
                {/* <li className="text-lg hover:text-purple">
              </li> */}
                <Link
                  onClick={handleScroll}
                  className="w-full text-lg hover:text-purple"
                  to="/about-me"
                >
                  About
                </Link>
                <Link
                  onClick={handleScroll}
                  className="w-full text-lg hover:text-purple"
                  to="/my-projects"
                >
                  Projects
                </Link>
                <Link
                  onClick={handleScroll}
                  className="w-full text-lg hover:text-purple"
                  to="/contact"
                >
                  Contact
                </Link>
                <div className="flex justify-center gap-6">
                  <a
                    className={twMerge(" text-purple")}
                    href="https://www.linkedin.com/in/brayan-ccari/"
                    target="_blank"
                  >
                    <Linkedin />
                  </a>
                  <a
                    className={twMerge(" text-purple")}
                    href="https://github.com/BrayanCcLindo"
                    target="_blank"
                  >
                    <Github />
                  </a>
                  <button
                    onClick={handleTheme}
                    className={twMerge(" text-purple")}
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
                Home
              </Link>
            </li>
            <li className=" hover:text-purple">
              <Link onClick={handleScroll} to="/about-me">
                About
              </Link>
            </li>
            <li className=" hover:text-purple">
              <Link onClick={handleScroll} to="/my-projects">
                Projects
              </Link>
            </li>
            <li className=" hover:text-purple">
              <Link onClick={handleScroll} to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="hidden md:flex gap-6">
          <a
            className={twMerge(
              "bg-white p-4 rounded-full text-purple hover:bg-purple",
              " hover:text-white"
            )}
            href="https://www.linkedin.com/in/brayan-ccari/"
            target="_blank"
          >
            <Linkedin strokeWidth={1} />
          </a>
          <a
            className={twMerge(
              "bg-white p-4 rounded-full text-purple hover:bg-purple",
              " hover:text-white"
            )}
            href="https://github.com/BrayanCcLindo"
            target="_blank"
          >
            <Github strokeWidth={1} />
          </a>
          <button
            onClick={handleTheme}
            className={twMerge(
              "bg-white p-4 rounded-full text-purple hover:bg-purple",
              " hover:text-white"
            )}
          >
            {nextMode === "dark" ? (
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
