import { useParams } from "react-router-dom";
import Layout from "../ui/layout";
import { useProtfolioContext } from "../components/portfolio-context";

function Project() {
  const { projectName } = useParams();
  const { projectNames } = useProtfolioContext();

  const newProyjects = [...projectNames];
  const proyectIndex = newProyjects.findIndex(
    (project) => project.slug === projectName
  );
  const oficialProyect = newProyjects[proyectIndex];

  return (
    <>
      <Layout>
        <p className="text-gray-200 uppercase mb-4">{oficialProyect.slogan}</p>
        <h1 className="text-7xl font-semibold mb-8">{oficialProyect.title}</h1>
      </Layout>
      <img
        className="h-[500px]  w-full object-cover object-left-top"
        src={oficialProyect.image}
        alt=""
      />
      <Layout>
        <div className="grid grid-cols-[1fr,2fr] gap-8 p-8 bg-white rounded-xl mt-16">
          <div className="bg-[#FBFBFC] rounded-xl p-8 flex flex-col gap-8">
            <h3 className="text-2xl text-black font-semibold">Developed by:</h3>
            {oficialProyect.languages.map((language, index) => (
              <p key={index} className="text-xl text-purple font-semibold">
                {language}
              </p>
            ))}
          </div>
          <div>
            <h2 className="text-2xl text-black font-semibold mb-8">
              Description
            </h2>
            <p className="text-xl"> {oficialProyect.description}</p>
          </div>
        </div>
        <div className="grid grid-cols-[1fr,1fr] gap-16 rounded-xl mt-16">
          {oficialProyect.photos.map((photo, index) => (
            <img
              key={index}
              className="rounded-3xl object-right-top object-cover h-[500px]"
              src={photo}
              alt=""
            />
          ))}
        </div>
      </Layout>
    </>
  );
}

export default Project;
