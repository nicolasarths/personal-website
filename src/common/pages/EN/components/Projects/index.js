import { projects } from "data";
import Image from "next/future/image";
import styles from "./Projects.module.sass";

const Project = ({ project }) => (
  <div className={styles.project}>
    <h3>{project.title}</h3>
    <div className={styles.menu}>
      <a>Live view</a>
      <a>Github repository</a>
    </div>
    <p>{project.en.description}</p>
    <Image src={project.src} alt={project.alt} />
  </div>
);

const Projects = () =>
  projects.map((project) => <Project project={project} key={project.id} />);

const ProjectsSection = () => (
  <div id="projects" className={styles.container}>
    <h2>Latest Projects</h2>

    <div className={styles.projectsContainer}>
      <Projects />
    </div>
  </div>
);

export default ProjectsSection;
