import { FileDown, Github, Linkedin, Mail } from "lucide-react";
import { twMerge } from "tailwind-merge";

// import { aboutMe } from "../types/about";
import Layout from "../ui/layout";
import { CardComponent, DescriptionTechStack } from "./Home";
import { useProtfolioContext } from "../appContext/portfolio-context";
import { Link } from "react-router-dom";

function ExperienceCard({ title }: { title: string }) {
  const { education, experience } = useProtfolioContext();

  return (
    <div className="p-8 rounded-xl bg-white flex flex-col gap-8">
      <h3 className="text-2xl text-black font-semibold">{title}</h3>
      <div className="flex flex-col gap-8 ">
        {title === "EXPRIENCE"
          ? experience?.map((exp, id) => (
              <div key={id} className="flex flex-col gap-4 ">
                <span className="text-gray-200 font-medium">{exp.year}</span>
                <h4 className="text-xl text-purple font-semibold">
                  {exp.job} - {exp.detail}
                </h4>
                <ul className="list-disc pl-8">
                  {exp.description.map((duties, index) => (
                    <li className="text-black" key={index}>
                      {duties}
                    </li>
                  ))}
                </ul>
              </div>
            ))
          : education?.map((edu, id) => (
              <div key={id} className="flex flex-col gap-4 ">
                <span className="text-gray-200 font-medium">
                  {edu.detail} - {edu.year}
                </span>
                <h4 className="text-xl text-purple font-semibold">{edu.job}</h4>
              </div>
            ))}
      </div>
    </div>
  );
}

function About() {
  const { techStackImg } = useProtfolioContext();

  return (
    <Layout>
      <div className={twMerge("grid  gap-8 p-4", "md:grid-cols-[1fr,2fr]")}>
        <div className="flex items-center justify-center p-8 rounded-xl bg-white ">
          <img
            width={300}
            className="object-cover rounded-full"
            src="../../images/profilePhoto.jpg"
            alt="brayan-ccari"
          />
        </div>
        <div className="flex flex-col gap-8 justify-between  ">
          <h2 className="text-4xl text-black font-semibold text-center lg:text-7xl">
            ABOUT ME
          </h2>
          <div className=" p-8 rounded-xl bg-white text-black ">
            <h1 className="mb-4 text-3xl ">Brayan Ccari Lindo</h1>
            <p>
              Passionate frontend developer with experience creating attractive
              and functional web interfaces. With a solid knowledge of modern
              web technologies such as HTML, CSS and JavaScript. Always
              interested in learning new technologies and approaches to keep
              myself updated in the constantly evolving world of frontend
              development.
            </p>
          </div>
        </div>
      </div>
      <div
        className={twMerge("grid  gap-8 p-4", "md:grid-cols-[repeat(2,1fr)]")}
      >
        <ExperienceCard title="EXPRIENCE" />
        <ExperienceCard title="EDUCATION" />
      </div>
      <div className={twMerge("grid  gap-8 p-4", "md:grid-cols-[1fr,2fr]")}>
        <CardComponent
          isClickable={false}
          title="Get in touch"
          subtitle="CHAT WITH ME"
        >
          <div className="flex gap-8 items-center bg-gray-600 p-2 w-full justify-evenly rounded-3xl">
            <a
              href="https://github.com/BrayanCcLindo"
              target="_blank"
              className="bg-white p-4 rounded-full text-purple hover:bg-purple hover:text-white"
            >
              <Github size={40} strokeWidth={1} />
            </a>
            <a
              href="https://www.linkedin.com/in/brayan-ccari/"
              target="_blank"
              className="bg-white p-4 rounded-full text-purple hover:bg-purple hover:text-white"
            >
              <Linkedin size={40} strokeWidth={1} />{" "}
            </a>
            <a
              href="mailto:brayancclindo@gmail.com"
              className="bg-white p-4 rounded-full text-purple hover:bg-purple hover:text-white"
            >
              <Mail size={40} strokeWidth={1} />{" "}
            </a>
          </div>
        </CardComponent>
        <CardComponent isClickable={false} title="Tech Stack" subtitle="Skills">
          <div
            className={twMerge("flex gap-4 text-purple flex-wrap ", "md:gap-8")}
          >
            {techStackImg.map((item) => (
              <DescriptionTechStack key={item.title} image={item} />
            ))}
          </div>
        </CardComponent>
      </div>

      <div className={twMerge("grid  gap-8 p-4", "md:grid-cols-[2fr,1fr,1fr]")}>
        <Link
          className="flex justify-between bg-white p-8 items-end rounded-2xl"
          to={"/contact"}
        >
          <div className="">
            <h3 className="text-4xl text-black">
              Let's work <span className="text-purple">together</span>
            </h3>
          </div>
        </Link>
        <Link to={"/my-projects"}>
          <CardComponent isClickable={true} title="Projects" subtitle="My">
            <img
              className="object-cover w-[300px]"
              src="../../images/credentialsPhoto.jpg"
              alt="brayan-ccari-projects"
            />
          </CardComponent>
        </Link>

        <div className="flex items-center justify-center cursor-pointer">
          <a
            href="../../files/BrayanCcari.pdf"
            download={"BrayanCcari.pdf"}
            className="bg-gray-400 text-gray-50 rounded-2xl hover:bg-purple py-4 px-8 font-semibold w-full flex items-center justify-center gap-8 hover:scale-105 duration-100 text-center"
          >
            <FileDown size={50} />
            Download CV
          </a>
        </div>
      </div>
    </Layout>
  );
}

export default About;
