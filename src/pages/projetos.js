import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import projects from "../data/general.json";

export default function Projetos() {
  function BuildProjects() {
    return projects.map((project, i) => {
      if (project.src) {
        function Projects() {
          const originalClasses = "next-image project-image";
          let [classes, toggleClasses] = useState(originalClasses);

          function HandleEnter() {
            toggleClasses(originalClasses + " scale-up-big");
          }
          function HandleLeave() {
            toggleClasses(originalClasses + " scale-down");
          }
          return (
            <>
              <div
                className="project flex flex-center margin-auto align-center gap-big"
              >
                <div className="project-left">
                  <h2 className="title project-title no-margin">
                    Website de Serviços de Guincho de Moto
                  </h2>
                  <div className="project-links flex no-decoration margin gap-medium">
                    <li>
                      <Link href={project.href}>Acessar</Link>
                    </li>
                    <li>
                      <Link href="/contato">Avaliar</Link>
                    </li>
                    <li>
                        <Link href={project.github}>Repositório no Github</Link>
                    </li>
                  </div>
                  <p className="no-margin">{project.description}</p>
                  <p className="no-margin">
                    <strong>Features:</strong>
                  </p>
                  <div className="full-width">
                    {project.features.map((feature, key) => (
                      <li key={key} className="margin-y">
                        {feature}
                      </li>
                    ))}
                  </div>
                </div>

                <div className="project-right">
                  <div
                    className={classes}
                    onMouseEnter={HandleEnter}
                    onMouseLeave={HandleLeave}
                  >
                    <Image src={project.src} alt={project.alt} layout="fill" />
                  </div>
                </div>
              </div>
            </>
          );
        }
        return Projects();
      }
    });
  }
  return (
    <>
      <div className="projects-page text-center">
        <h1 className="title projects-page-title">Projetos</h1>
        {BuildProjects()}

        <h4>Novos projetos chegando em breve.</h4>
      </div>
    </>
  );
}
