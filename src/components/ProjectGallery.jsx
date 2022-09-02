import Image from "next/image";
import { useState } from "react";
import projects from "../data/general.json";

export default function ProjectGallery() {
    function BuildGallery(){
        return projects.map((project, i) => {
            const originalCaptionClass = "project-gallery-item-caption";
            const originalItemClasses = "next-image project-gallery-item relative";

            let [classes, toggleClasses] = useState(originalItemClasses);
            let [descriptionClasses, toggleDescriptionClasses] = useState(originalCaptionClass + " hide");
        
            function handleEnter() {
              toggleDescriptionClasses("project-gallery-item-caption absolute");
              toggleClasses(`${originalItemClasses} scale-up`);
            }
            function handleLeave() {
              toggleDescriptionClasses("project-gallery-item-caption hide");
              toggleClasses(`${originalItemClasses} scale-down`);
            }
        
            return (
              <div
                key={i}
                className={classes}
                onMouseEnter={handleEnter}
                onMouseLeave={handleLeave}
              >
                {project.src ? (
                  <span className={descriptionClasses}>Clique para mais detalhes</span>
                ) : (
                  ""
                )}
                <span className="project-gallery-item-coming-up">Em breve...</span>
                <Image
                  src={project.src ? project.src : ""}
                  alt={project.alt ? project.alt : ""}
                  layout="fill"
                />
              </div>)})
    }

    return (
    <div className="project-gallery flex wrap gap flex-center">
        {BuildGallery()}
    </div>)
}
