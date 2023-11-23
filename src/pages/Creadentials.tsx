import { Github, Linkedin } from "lucide-react";
import Layout from "../ui/layout";
import ButtonComponent from "../components/button-component";
import {
  CertificationType,
  Education,
  Experience,
  SkillsType,
  useProtfolioContext,
} from "../appContext/portfolio-context";
import { twMerge } from "tailwind-merge";
import { Link } from "react-router-dom";

const SkillsCard = ({
  title,
  skills,
}: {
  title: string;
  skills: SkillsType[];
}) => {
  return (
    <div className="p-8 flex flex-col gap-8">
      <h2 className="text-2xl text-black font-semibold">{title}</h2>
      <div className={twMerge("grid  gap-8", "md:grid-cols-[repeat(2,1fr)]")}>
        {skills?.map((skill, id) => (
          <div key={id} className="flex flex-col gap-3">
            <h3 className="text-xl text-purple font-semibold">{skill.skill}</h3>
            <p className="text-gray-200">{skill.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const CredentialExperience = ({
  title,
  experience,
}: {
  title: string;
  experience: Experience[];
}) => {
  return (
    <div className="p-8 flex flex-col gap-8">
      <h2 className="text-2xl text-black font-semibold">{title}</h2>
      <div className="flex flex-col gap-8">
        {experience?.map((exp, id) => (
          <div key={id} className="flex flex-col gap-4 ">
            <span className="text-gray-200 font-medium">{exp.year}</span>
            <h4 className="text-xl text-purple font-semibold">{exp.job}</h4>
            <p className="text-gray-200 ">{exp.detail}</p>
            <p>{exp.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const Certification = ({
  title,
  certifications,
}: {
  title: string;
  certifications: CertificationType[];
}) => {
  return (
    <div className="p-8 flex flex-col gap-8">
      <h2 className="text-2xl text-black font-semibold">{title}</h2>
      <div className="flex flex-col gap-8">
        {certifications?.map((exp, id) => (
          <div key={id} className="flex flex-col gap-4 ">
            <span className="text-gray-200 font-medium">{exp.year}</span>
            <h4 className="text-xl text-purple font-semibold">{exp.title}</h4>
            <p className="text-gray-200 ">{exp.certificaded}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const CredentialEducation = ({
  title,
  education,
}: {
  title: string;
  education: Education[];
}) => {
  return (
    <div>
      <div className="p-8 flex flex-col gap-8">
        <h2 className="text-2xl text-black font-semibold">{title}</h2>
        <div className="flex flex-col gap-8">
          {education?.map((exp, id) => (
            <div key={id} className="flex flex-col gap-4 ">
              <span className="text-gray-200 font-medium">{exp.year}</span>
              <h4 className="text-xl text-purple font-semibold">{exp.job}</h4>
              <p className="text-gray-200 ">{exp.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

function Creadentials() {
  const { experience, education, skills, certifications } =
    useProtfolioContext();

  return (
    <Layout>
      <div className={twMerge("grid  gap-8 p-4", "md:grid-cols-[1fr,2fr]")}>
        <div className="flex flex-col gap-8 bg-white rounded-xl p-8 self-start">
          <div className="flex items-center justify-center">
            <img src="../../images/profilePhoto.jpg" alt="" />
          </div>
          <h1 className="text-center text-2xl font-semibold ">
            Brayan Ccari Lindo
          </h1>
          <a
            href="https://github.com/BrayanCcLindo"
            target="_blank"
            className="text-center text-gray-200 hover:text-purple"
          >
            @BrayanCcLindo
          </a>
          <div className="flex gap-8 justify-center items-center">
            <a
              href="https://github.com/BrayanCcLindo"
              target="_blank"
              className="bg-gray-300 p-4 rounded-full text-purple hover:bg-purple hover:text-white"
            >
              <Github size={30} strokeWidth={1} />
            </a>
            <a
              href="https://www.linkedin.com/in/brayan-ccari/"
              target="_blank"
              className="bg-gray-300 p-4 rounded-full text-purple hover:bg-purple hover:text-white"
            >
              <Linkedin size={30} strokeWidth={1} />{" "}
            </a>
          </div>
          <Link className="w-full" to={"/contact"}>
            <ButtonComponent>Get in touch</ButtonComponent>
          </Link>
        </div>
        <div>
          <div className="flex flex-col gap-8">
            <div className="p-8 flex flex-col gap-8">
              <h2 className="text-2xl text-black font-semibold">ABOUT ME</h2>
              <p className="text-gray-200">
                Passionate frontend developer with experience creating
                attractive and functional web interfaces. With a solid knowledge
                of modern web technologies such as HTML, CSS and JavaScript.
                Always interested in learning new technologies and approaches to
                keep myself updated in the constantly evolving world of frontend
                development.
              </p>
            </div>
            <CredentialExperience experience={experience} title="EXPRIENCE" />
            <div className={twMerge("grid  gap-8", "md:grid-cols-[1fr,1fr]")}>
              <CredentialEducation education={education} title="EDUCATION" />
              <Certification
                title="CERTIFICATIONS"
                certifications={certifications}
              />
            </div>
            <SkillsCard skills={skills} title="SKILLS" />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Creadentials;
