import { GithubIcon, LinkedinIcon, MailCheck } from "lucide-react";
import Layout from "../ui/layout";
import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import { useTranslation } from "react-i18next";
import { SEOComponent } from "../assets/SEO/seoComponent";

const CardContact = ({
  icon,
  title,
  children,
  link
}: {
  icon: ReactNode;
  title: string;
  children: ReactNode;
  link: string;
}) => {
  return (
    <div className="flex gap-10 p-10 bg-white items-center relative duration-150 hover:scale-105 hover:duration-150 rounded-tl-[2rem] rounded-br-[2rem] w-[350px]">
      <a
        // href="mailto:brayancclindo@gmail.com"
        href={link}
        target="_blank"
        className="absolute inset-0 "
      ></a>
      <p className="flex items-center justify-center text-purple">{icon}</p>
      <div>
        <h3 className="text-xl text-gray-200">{title}</h3>
        {children}
      </div>
    </div>
  );
};

function Contact() {
  const { t } = useTranslation("global");

  return (
    <Layout>
      <SEOComponent
        canonicalUrl="https://brayan-ccari.vercel.app/contact"
        title="Contact | Frontend Developer"
        description="Get in touch with me. Whether you have a project in mind, need technical assistance, or just want to connect, feel free to reach out. I'm always open to discussing new opportunities and collaborations."
      />
      <div className={twMerge("flex flex-col  gap-8 p-8")}>
        <div className="flex flex-col items-center justify-center flex-1 gap-8 md:flex-row">
          <div className="flex flex-col gap-8 ">
            <h2 className="font-semibold text-black">{t("Contact.info")}:</h2>
            <div className="flex flex-col items-start justify-center gap-6 ">
              <CardContact
                link="mailto:brayancclindo@gmail.com"
                title={t("Contact.mail")}
                icon={<MailCheck />}
              >
                <p className="text-black ">brayancclindo@gmail.com</p>
              </CardContact>

              <CardContact
                link="https://www.linkedin.com/in/brayan-ccari/"
                title={"Linkedin"}
                icon={<LinkedinIcon />}
              >
                <p className="text-black"> Brayan Ccari Lindo</p>
              </CardContact>
              <CardContact
                link="https://github.com/BrayanCcLindo"
                title={"GitHub"}
                icon={<GithubIcon />}
              >
                <p className="text-black"> BrayanCcLindo</p>
              </CardContact>
            </div>
          </div>

          <div className="flex ">
            <img src="/images/contact-hero.png" alt="" />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Contact;
