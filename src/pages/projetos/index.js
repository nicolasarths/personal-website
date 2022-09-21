import serverProjects from "../../data/general.json";

import Project from "../../components/Project";
import Disclaimer from "../../components/Disclaimer";

export async function getServerSideProps(context) {
  return {
    props: { projects: serverProjects },
  };
}

export default function Projetos({ projects }) {
  return (
    <>
      <div className="flex flex-center align-center flex-column text-center padding">
        <div className="highlighted-title">
          <h1 className="projects-page-title fade-in">Projetos</h1>
          <span className="projects-page-title-pedestal"></span>
        </div>

        {projects.map((project, i) => {
          if (project.src)
            return <Project key={project.id} project={project} />;
        })}
        <Disclaimer text="Novos projetos chegando em breve." />
      </div>
    </>
  );
}
