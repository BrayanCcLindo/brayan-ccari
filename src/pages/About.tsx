import { Github, Linkedin } from "lucide-react";
import { twMerge } from "tailwind-merge";

// import { aboutMe } from "../types/about";
import Layout from "../ui/layout";
import { CardComponent } from "./Home";
import { useProtfolioContext } from "../components/portfolio-context";
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
                <h4 className="text-xl text-purple font-semibold">{exp.job}</h4>
                <p className="text-gray-200 uppercase">{exp.detail}</p>
              </div>
            ))
          : education?.map((edu, id) => (
              <div key={id} className="flex flex-col gap-4 ">
                <span className="text-gray-200 font-medium">{edu.year}</span>
                <h4 className="text-xl text-purple font-semibold">{edu.job}</h4>
                <p className="text-gray-200 uppercase">{edu.detail}</p>
              </div>
            ))}
      </div>
    </div>
  );
}

function About() {
  return (
    <Layout>
      <div className={twMerge("grid  gap-8 p-4", "md:grid-cols-[1fr,2fr]")}>
        <div className="flex items-center justify-center p-8 rounded-xl bg-white ">
          <img
            width={300}
            className="object-cover"
            src="../../images/profilePhoto.jpg"
            alt=""
          />
        </div>
        <div className="flex flex-col gap-8 justify-between  ">
          <h2 className="text-4xl font-semibold text-center lg:text-7xl">
            SELF-SUMMARY
          </h2>
          <div className=" p-8 rounded-xl bg-white">
            <h1 className="mb-4 text-3xl ">Brayan Ccari Lindo</h1>
            <p className="text-lg text-gray-200">
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
      <div className={twMerge("grid  gap-8 p-4", "md:grid-cols-[1fr,2fr,1fr]")}>
        <CardComponent title="Get in touch" subtitle="STAY WITH ME">
          <div className="flex gap-8 items-center bg-[#FBFBFC] p-2 w-full justify-evenly rounded-3xl">
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
          </div>
        </CardComponent>
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
        <Link to={"/credentials"}>
          <CardComponent title="Credentials" subtitle="MORE ABOUT ME">
            <img
              className="object-cover"
              src="../../public/images/credentialsPhoto.jpg"
              alt=""
            />
          </CardComponent>
        </Link>
      </div>
    </Layout>
  );
}

export default About;
