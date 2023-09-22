import { Linkedin, Mail } from "lucide-react";
import Layout from "../ui/layout";
import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { twMerge } from "tailwind-merge";

export const CardComponent = ({
  children,
  subtitle,
  title,
}: {
  children?: ReactNode;
  subtitle?: string;
  title: string;
}) => {
  return (
    <div className="flex flex-col gap-2 bg-white p-4 justify-center rounded-2xl">
      <div className="flex items-center justify-center">{children}</div>
      <div className="flex justify-between items-center text-gray-100">
        <div className="flex flex-col gap-2">
          <span className="text-sm uppercase  text-gray-200 ">{subtitle}</span>
          <h4 className="text-2xl text-black font-medium">{title}</h4>
        </div>
      </div>
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
    <div className="p-8 flex flex-col items-center  gap-4 justify-center bg-[#FBFBFC] rounded-3xl">
      <span className="text-3xl font-medium text-purple">{title}</span>
      <p className="text-xl text-gray-200 text-center ">{description}</p>
    </div>
  );
};

function Home() {
  return (
    <Layout>
      <div className="flex flex-col gap-8 p-4  ">
        <div className=" flex flex-col justify-between gap-8  md:flex-row">
          <div
            className={twMerge(
              "flex flex-col gap-8 p-8 rounded-xl bg-white flex-1  items-center",
              "lg:flex-row "
            )}
          >
            <img
              className="max-w-[200px] md:w-[300px] "
              src="../../images/profilePhoto.jpg"
              alt=""
            />
            <div className="flex flex-col gap-4 justify-between ">
              <span className="text-gray-200 text-lg text-center">
                Hi! I'm Brayan
              </span>
              <h1 className=" text-2xl text-purple font-semibold text-center">
                Frontend Developer
              </h1>
              <p className="text-gray-200 text-center">
                Passionate about creating captivating digital experiences,
                transforming concepts into attractive and highly usable
                interfaces.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-4 justify-evenly flex-1">
            <div className="marquee-container  rounded-full bg-white p-2">
              <p className="marquee-text font-basic text-gray-200">
                Transforming ideas into .
                <span className="font-semibold text-purple">code </span>
                ,and code into{" "}
                <span className="font-semibold text-purple">solutions. </span>
              </p>
            </div>
            <div className={twMerge("grid  gap-8", "lg:grid-cols-[1fr_1fr]")}>
              <Link to={"/credentials"}>
                <CardComponent title="Credentials" subtitle="more about me">
                  <img
                    className="object-cover"
                    src="../../images/credentialsPhoto.jpg"
                    alt=""
                  />
                </CardComponent>
              </Link>
              <Link to={"/my-work"}>
                <CardComponent title="Projects" subtitle="showcase">
                  <img
                    className="object-cover"
                    src="../../images/projectsPhoto.jpg"
                    alt=""
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
          <CardComponent title="Get in touch" subtitle="STAY WITH ME">
            <div className="flex gap-8 items-center bg-[#FBFBFC] p-2 w-full justify-evenly rounded-3xl">
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
            </div>
          </CardComponent>
          <CardComponent title="Tech Skills" subtitle="blog">
            <div
              className={twMerge(
                "flex gap-4 text-purple flex-wrap ",
                "md:gap-8"
              )}
            >
              <img src="../../images/svg/html.svg" alt="" />
              <img src="../../images/svg/css.svg" alt="" />
              <img src="../../images/svg/javascript.svg" alt="" />
              <img src="../../images/svg/react.svg" alt="" />
              <img src="../../images/svg/tailwind.svg" alt="" />
              <img src="../../vite.svg" alt="" />
              <img src="../../images/svg/git.svg" alt="" />
              <img src="../../images/svg/figma.svg" alt="" />
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
            <DetailedInfo title="02" description="Years Experience" />
            <DetailedInfo title="+ 20" description="Total Projects" />
            <DetailedInfo title="+ 10" description="Responsive Apps" />
          </div>
          <Link
            className="flex justify-between bg-white p-8 items-end rounded-2xl"
            to={"/contact"}
          >
            <div className="">
              <h3 className="text-4xl ">
                Let's work <span className="text-purple">together</span>
              </h3>
            </div>
          </Link>
        </div>
      </div>
    </Layout>
  );
}

export default Home;
