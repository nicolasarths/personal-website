import projects from "../../data/general.json";

import Project from "../../components/Project";
import Disclaimer from "../../components/Disclaimer";

export default function Projetos() {
  return (
    <>
      <div className="flex flex-center align-center flex-column text-center padding">
        <div className="highlighted-title">
          <h1 className="projects-page-title fade-in">Projetos</h1>
          <span className="projects-page-title-pedestal"></span>
        </div>

        {projects.map((project) => {
          if (project.src)
            return <Project key={project.id} project={project} />;
        })}
        <Disclaimer text="Novos projetos chegando em breve." />
      </div>
    </>
  );
}
