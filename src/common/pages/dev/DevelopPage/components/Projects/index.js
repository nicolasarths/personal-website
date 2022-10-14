import { projects } from "data";

import Project from "./Project";
import Disclaimer from "components/Disclaimer";

import styles from "./Projects.module.sass";

const DisplayedProjects = () => {
  return projects.map((project) => {
    if (project.src) return <Project key={project.id} project={project} />;
  });
};

const Projects = () => {
  return (
      <div className={styles.projects} id="projetos">
        <h2 className={styles.intermission}>Projetos concluídos</h2>
        <DisplayedProjects />
        <Disclaimer className={styles.container} text="Novos projetos chegando em breve." />
      </div>
  );
};

export default Projects;
