import { GithubIcon, LinkedinIcon, MailCheck } from "lucide-react";
import Layout from "../ui/layout";
import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import { useTranslation } from "react-i18next";

const CardContact = ({
  icon,
  title,
  children,
  link,
}: {
  icon: ReactNode;
  title: string;
  children: ReactNode;
  link: string;
}) => {
  return (
    <div className=" flex  gap-10 p-10 bg-white items-center relative duration-150 hover:scale-105 hover:duration-150 rounded-tl-[2rem] rounded-br-[2rem] w-[350px]">
      <a
        // href="mailto:brayancclindo@gmail.com"
        href={link}
        target="_blank"
        className="absolute inset-0 "
      ></a>
      <p className=" flex items-center justify-center text-purple">{icon}</p>
      <div>
        <h3 className="text-xl text-gray-200">{title}</h3>
        {children}
      </div>
    </div>
  );
};

function Contact() {
  // const initialValue = {
  //   name: "",
  //   email: "",
  //   subject: "",
  //   message: "",
  // };
  // const [inputValue, setInputValue] = useState(initialValue);
  // const [succesForm, setSuccedForm] = useState(false);
  // const [error, setError] = useState({
  //   name: "",
  //   email: "",
  //   subject: "",
  //   message: "",
  // });
  // useEffect(() => {
  //   if (succesForm) {
  //     setTimeout(() => {
  //       setSuccedForm(false);
  //     }, 5000);
  //   }
  // }, [succesForm]);

  const { t } = useTranslation("global");

  return (
    <Layout>
      <div className={twMerge("flex flex-col  gap-8 p-8")}>
        <div className="flex  flex-col md:flex-row gap-8 justify-center items-center flex-1">
          <div className=" flex flex-col gap-8">
            <h2 className="font-semibold text-black">{t("Contact.info")}:</h2>
            <div className="flex flex-col  items-start justify-center  gap-6 ">
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

        {/* <h2 className="font-semibold text-black">{t("Contact.social")}</h2>
        <div className="flex gap-8 items-center ">
          <a
            className={twMerge(
              "rounded-full bg-white flex items-center justify-center p-6 text-purple",
              "hover:bg-purple hover:text-white"
            )}
            target="_blank"
            href="https://twitter.com/BrayanCcLi"
          >
            <Twitter strokeWidth={1} />
          </a>
          <a
            className={twMerge(
              "rounded-full bg-white flex items-center justify-center p-6 text-purple",
              "hover:bg-purple hover:text-white"
            )}
            href="https://www.linkedin.com/in/brayan-ccari/"
            target="_blank"
          >
            <Linkedin strokeWidth={1} />
          </a>
          <a
            className={twMerge(
              "rounded-full bg-white flex items-center justify-center p-6 text-purple",
              "hover:bg-purple hover:text-white"
            )}
            href="https://github.com/BrayanCcLindo"
            target="_blank"
          >
            <Github strokeWidth={1} />
          </a>
        </div> */}
        {/* <div className="bg-white p-4 rounded-xl flex flex-col gap-8 justify-center">
          <h3 className="text-4xl text-black">
            {t("home.worktogether")}{" "}
            <span className="text-purple">{t("home.together")}</span>
          </h3>
          <form
            onSubmit={(event) => {
              event.preventDefault();
              if (inputValue.name === "") {
                setError({ ...error, name: "Campo requerido" });
                return;
              }
              if (inputValue.email === "") {
                setError({ ...error, email: "Campo requerido" });
                return;
              }
              if (inputValue.subject === "") {
                setError({ ...error, subject: "Campo requerido" });
                return;
              }
              if (inputValue.message === "") {
                setError({ ...error, message: "Campo requerido" });
                return;
              }
              if (
                inputValue.name !== "" &&
                inputValue.email !== "" &&
                inputValue.subject !== "" &&
                inputValue.message !== ""
              ) {
                setSuccedForm(true);
              }
            }}
            action=""
            className="flex flex-col p-4 gap-8 "
          >
            <label className="sr-only" htmlFor="name">
              {t("Contact.formName")}
            </label>
            <input
              className="p-4 bg-gray-300 rounded-xl text-gray-200 placeholder:text-gray-200"
              type="text"
              id="name"
              placeholder={t("Contact.formName")}
              onChange={(event) => {
                setError({ ...error, name: "" });
                setInputValue({ ...inputValue, name: event.target.value });
              }}
            />
            {error.name && <p className="text-red-500 text-sm">{error.name}</p>}
            <label className="sr-only" htmlFor="email">
              {t("Contact.formEmail")}
            </label>
            <input
              className="p-4 bg-gray-300 rounded-xl text-gray-200 placeholder:text-gray-200"
              onChange={(event) => {
                setError({ ...error, email: "" });
                setInputValue({ ...inputValue, email: event.target.value });
              }}
              type="text"
              id="email"
              placeholder={t("Contact.formEmail")}
            />
            {error.email && (
              <p className="text-red-500 text-sm">{error.email}</p>
            )}

            <label className="sr-only" htmlFor="subject">
              {t("Contact.formSubject")}
            </label>
            <input
              onChange={(event) => {
                setError({ ...error, subject: "" });
                setInputValue({ ...inputValue, subject: event.target.value });
              }}
              className="p-4 bg-gray-300 rounded-xl text-gray-200 placeholder:text-gray-200"
              type="text"
              id="subject"
              placeholder={t("Contact.formSubject")}
            />
            {error.subject && (
              <p className="text-red-500 text-sm">{error.subject}</p>
            )}

            <textarea
              onChange={(event) => {
                setError({ ...error, message: "" });
                setInputValue({ ...inputValue, message: event.target.value });
              }}
              placeholder={t("Contact.formMessage")}
              className="p-4 bg-gray-300 rounded-xl text-gray-200 placeholder:text-gray-200"
              name="textarea"
              rows={4}
            />
            {error.message && (
              <p className="text-red-500 text-sm">{error.message}</p>
            )}

            <ButtonComponent onClick={() => {}}>
              {t("Contact.formButton")}
            </ButtonComponent>
            {succesForm && (
              <div className="flex gap-4 items-center text-purple font-bold">
                <Check />
                <p>{t("Contact.formSucces")}</p>
              </div>
            )}
          </form>
        </div> */}
      </div>
    </Layout>
  );
}

export default Contact;
