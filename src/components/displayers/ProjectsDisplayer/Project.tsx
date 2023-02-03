import { JSXElementConstructor } from "react";
import { type IProject } from "data";
import Image from "components/Img";

import styles from "./ProjectsDisplayer.module.sass";

type ProjectProps = {
  project: IProject;
  expand?: boolean;
  lang: "ptBr" | "en";
};

const Project: JSXElementConstructor<ProjectProps> = ({
  project,
  expand,
  lang,
}) => {
  const text =
    lang === "en"
      ? {
          liveView: "Live View",
          githubRepository: "Github repository",
        }
      : {
          liveView: "Acessar",
          githubRepository: "Repositório do Github",
        };

  return (
    <div className={styles.project + " " + (expand ? styles.expand : "")}>
      <h3>{project.title[lang]}</h3>
      <div className={styles.menu}>
        <a href={project.href}>{text.liveView}</a>
        <a href={project.github}>{text.githubRepository}</a>
      </div>
      <p>{project.description[lang]}</p>
      <Image src={project.src} alt={project.alt} />
    </div>
  );
};

export default Project;
