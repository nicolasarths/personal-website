import { projects, Project as IProject } from "data";
import Image from "components/Img";
import styles from "./ProjectsDisplayer.module.sass";
import { JSXElementConstructor } from "react";

type ProjectProps = { project: IProject; expand?: boolean };

const Project: JSXElementConstructor<ProjectProps> = ({ project, expand }) => {
  return (
    <div className={styles.project + " " + (expand ? styles.expand : "")}>
      <h3>{project.title}</h3>
      <div className={styles.menu}>
        <a>Live view</a>
        <a>Github repository</a>
      </div>
      <p>{project.description}</p>
      <Image src={project.src} alt={project.alt} />
    </div>
  );
};

const renderProjects = (projects: IProject[]) => {
  const renderPairProjects = (projects: IProject[]) =>
    projects.map((project: IProject) => (
      <Project project={project} key={project.id} />
    ));

  const projectsArePair = projects.length / 2 === 0;
  const renderedProjects = renderPairProjects(projects);
  const lastProject = projects[projects.length - 1];

  if (projectsArePair) return renderedProjects;

  renderedProjects.pop();
  renderedProjects.push(
    <Project project={lastProject} key={lastProject.id} expand />
  );
  return renderedProjects;
};

type ProjectsDisplayerProps = { lang?: string };

const ProjectsDisplayer = ({ lang }: ProjectsDisplayerProps) => {
  const projectsToBeRendered =
    lang === "en" ? projects.map((project) => project.en) : projects;

  return (
    <div id="projects" className={styles.container}>
      <h2>Projetos Concluídos</h2>
      <div className={styles.projectsContainer}>
        {renderProjects(projectsToBeRendered)}
      </div>
    </div>
  );
};

export default ProjectsDisplayer;
