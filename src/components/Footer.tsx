import { Link } from "react-router-dom";
import Layout from "../ui/layout";

function Footer() {
  return (
    <Layout>
      <div className="flex flex-col gap-4 items-center justify-center p-[6rem]">
        <Link to={"/"}>
          <img width={120} src="../../images/logoPorfolio.png" alt="" />
        </Link>
        <ul className="flex gap-8 items-center text-gray-500 font-medium">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about-me">About</Link>
          </li>
          <li>
            <Link to="/my-work">Works</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        <p className="text-gray-200">
          © Brayan Ccari, 2023 All rights reserved.
        </p>
      </div>
    </Layout>
  );
}

export default Footer;
