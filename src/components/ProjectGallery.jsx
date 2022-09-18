import Image from "next/image";
import { useState } from "react";
import projects from "../data/general.json";

export default function ProjectGallery() {
  function BuildGallery() {
    return projects.map((project, i) => {
      function Gallery() {
        const originalCaptionClass = "main-project-gallery-item-caption";
        const originalItemClasses =
          "next-image main-project-gallery-item relative";

        let [classes, toggleClasses] = useState(originalItemClasses);
        let [descriptionClasses, toggleDescriptionClasses] = useState(
          originalCaptionClass + " hide"
        );

        function handleEnter() {
          toggleDescriptionClasses(
            "main-project-gallery-item-caption absolute"
          );
          toggleClasses(`${originalItemClasses} scale-up`);
        }
        function handleLeave() {
          toggleDescriptionClasses("main-project-gallery-item-caption hide");
          toggleClasses(`${originalItemClasses} scale-down`);
        }
        function handleClick() {
          project.localHref ? (location.href = project.localHref) : "";
        }

        return (
          <div
            key={i}
            className={classes}
            onMouseEnter={handleEnter}
            onMouseLeave={handleLeave}
            onClick={handleClick}
          >
            {project.src ? (
              <div id={project.title}>
                <Image
                  src={project.src ? project.src : "/projetos/null"}
                  alt={project.alt ? project.alt : ""}
                  layout="fill"
                />
                <span className={descriptionClasses}>
                  Clique para mais detalhes
                </span>
              </div>
            ) : (
              <span className="main-project-gallery-item-coming-up">
                Em breve...
              </span>
            )}
          </div>
        );
      }
      return Gallery();
    });
  }

  return (
    <div className="main-project-gallery flex wrap gap flex-center">
      {BuildGallery()}
    </div>
  );
}
