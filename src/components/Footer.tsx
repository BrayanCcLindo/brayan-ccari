import { Link } from "react-router-dom";
import Layout from "../ui/layout";
import ButtonComponent from "./button-component";
import { ChevronUp } from "lucide-react";

function Footer() {
  function handleScroll() {
    window.scrollTo(0, 0);
  }
  return (
    <>
      <Layout>
        <div className="flex flex-col gap-4 items-center justify-center p-[6rem]">
          <Link to={"/"}>
            <img
              width={120}
              src="../../images/logoPorfolio.png"
              alt="brayan-ccari-logo"
            />
          </Link>
          <ul className="flex gap-8 items-center text-gray-500 font-medium text-lg">
            <li>
              <Link onClick={handleScroll} to="/">
                Home
              </Link>
            </li>
            <li>
              <Link onClick={handleScroll} to="/about-me">
                About
              </Link>
            </li>
            <li>
              <Link onClick={handleScroll} to="/my-projects">
                Projects
              </Link>
            </li>
            <li>
              <Link onClick={handleScroll} to="/contact">
                Contact
              </Link>
            </li>
          </ul>
          <p className="text-gray-200">
            © Brayan Ccari, 2023 All rights reserved.
          </p>
        </div>
      </Layout>
      <div className="fixed bottom-[20px] right-[20px]">
        <ButtonComponent onClick={handleScroll}>
          <ChevronUp />
        </ButtonComponent>
      </div>
    </>
  );
}

export default Footer;
