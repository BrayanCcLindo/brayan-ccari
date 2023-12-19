import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { twMerge } from "tailwind-merge";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleDisplay = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const handleScroll = () => {
    setIsMenuOpen(false);

    window.scrollTo(0, 0);
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
            className="relative z-10"
            width={120}
            src="../../images/logoPorfolio.png"
            alt=""
          />
        </Link>

        <div className="">
          {isMenuOpen && (
            <div
              className={twMerge(
                "bg-gray-300 flex flex-col gap-4 absolute left-0 right-0 top-[70px]  text-center pb-8",
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
            </div>
          )}
        </div>
        <button onClick={toggleDisplay} className="flex md:hidden">
          {isMenuOpen ? <X /> : <Menu />}
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
        <div className="hidden md:flex">
          <a
            className="bg-gray-400 text-white rounded-2xl hover:bg-purple py-4 px-8 font-semibold w-full hover:scale-105 duration-100 text-center"
            href="mailto:brayancclindo@gmail.com"
          >
            Let's Talk
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header;
