import { projects, IProject } from "data";
import styles from "./ProjectsDisplayer.module.sass";
import Project from "./Project";
import { type acceptedLanguages } from "common/features/language/acceptedLanguages";

const renderProjects = (projects: IProject[], lang: acceptedLanguages) => {
  const renderPairProjects = (projects: IProject[]) =>
    projects.map((project: IProject) => (
      <Project project={project} key={project.id} lang={lang} />
    ));

  const projectsArePair = projects.length / 2 === 0;
  const renderedProjects = renderPairProjects(projects);
  const lastProject = projects[projects.length - 1];

  if (projectsArePair) return renderedProjects;

  renderedProjects.pop();
  renderedProjects.push(
    <Project project={lastProject} key={lastProject.id} expand lang={lang} />
  );
  return renderedProjects;
};

type ProjectsDisplayerProps = { lang: acceptedLanguages };

const ProjectsDisplayer = ({ lang }: ProjectsDisplayerProps) => {
  const projectsToBeRendered: IProject[] = projects;

  const title = {
    ptBr: "Projetos",
    en: "Projects",
  };
  return (
    <div id="projects" className={styles.container}>
      <h2>{title[lang]}</h2>
      <div className={styles.projectsContainer}>
        {renderProjects(projectsToBeRendered, lang)}
      </div>
    </div>
  );
};

export default ProjectsDisplayer;
