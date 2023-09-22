import { Github, Globe } from "lucide-react";
import Layout from "../ui/layout";
import { twMerge } from "tailwind-merge";
// import { Link } from "react-router-dom";
import { Project, useProtfolioContext } from "../components/portfolio-context";

function WorkCard({ project }: { project: Project }) {
  return (
    <div
      className={twMerge(
        "flex flex-col gap-2 bg-white p-8 justify-center items-center rounded-2xl  relative group hover:duration-500 "
      )}
    >
      <div className="flex items-center justify-center">
        <img
          className="rounded-2xl mb-4 object-cover "
          src={project?.cover}
          alt=""
        />
      </div>
      <div
        className={twMerge(
          "absolute w-full h-full  flex items-start p-8 justify-start rounded-2xl opacity-0",
          "group-hover:bg-black/80 hover:transition-all hover:duration-300 hover:opacity-100"
        )}
      >
        <div className="flex flex-col gap-8">
          <a
            href={project?.github}
            target="_blank"
            className="text-white hover:scale-110 hover:duration-100 hover:text-purple"
          >
            <Github size={50} />
          </a>

          <a
            href={project?.web}
            target="_blank"
            className="text-white hover:scale-110 hover:duration-100 hover:text-purple "
          >
            <Globe size={50} />
          </a>
          {/* <Link
            className="text-white rounded-full bg-black py-4 px-8 font-medium  hover:scale-105 hover:duration-100 text-center hover:bg-purple"
            to={`/my-work/${project?.slug}`}
          >
            Read More
          </Link> */}
        </div>
      </div>
      <div className="flex justify-between items-center text-gray-200">
        <div className="flex flex-col gap-2">
          <span className=" ">{project?.slogan}</span>
          <h4 className="text-2xl text-black font-semibold">
            {project?.title}
          </h4>
        </div>
      </div>
    </div>
  );
}

function Proyects() {
  const { projectNames } = useProtfolioContext();
  const newArrayOfProjects = [...projectNames];
  const firstProyects = newArrayOfProjects.splice(0, 1);
  const secondArrayOfProjects = [...projectNames];

  const secondProjects = secondArrayOfProjects.splice(1);

  return (
    <Layout>
      <div
        className={twMerge(
          "grid  gap-8 p-4 ",
          "md:grid-cols-[1fr,1fr]",
          "lg:grid-cols-[1fr,2fr]"
        )}
      >
        <div className="flex flex-col gap-8 justify-start items-center">
          <h2
            className={twMerge(
              "text-4xl text-center font-semibold",
              "md:hidden text:7xl mb-8"
            )}
          >
            ALL PROJECTS
          </h2>
          {/* <Link to={"/my-work/aca"} className="relative"> */}
          {firstProyects?.map((project, id) => (
            <WorkCard key={id} project={project} />
          ))}
          {/* </Link> */}
        </div>
        <div className="">
          <h2
            className={twMerge(
              "hidden text-3xl text-center font-semibold",
              "md:flex text-7xl mb-8"
            )}
          >
            ALL PROJECTS
          </h2>
          <div className={twMerge("grid  gap-8", "lg:grid-cols-[1fr,1fr]")}>
            {secondProjects?.map((project, id) => (
              <WorkCard key={id} project={project} />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Proyects;
