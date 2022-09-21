import ImageFrame from "../ImageFrame";
import MenuOfButtons from "../MenuOfButtons";
import Separator from "../Separator";

const Project = ({ project }) => {
  const options = [
    {
      href: project.href,
      text: "Acessar",
    },
    {
      href: "/contato",
      text: "Avaliar",
    },
    {
      href: project.github,
      text: "Repositório",
    },
  ];

  return (
    <>
      <div className="project">
        <div className="project-left fade-in delay-200">
          <h2 id={project.id} className="project-title no-margin">
            {project.title}
          </h2>
          <p>{project.description}</p>
          <MenuOfButtons options={options} />
          <h4>
            <strong>Features:</strong>
          </h4>

          <div className="full-width">
            {project.features.map((feature, key) => (
              <li key={key} className="margin-y">
                {feature}
              </li>
            ))}
          </div>
        </div>

        <div className="project-right">
          <ImageFrame
            className="fade-in delay-400"
            style={{
              backgroundColor: "rgba(20, 0, 80, 0.5)",
              marginTop: "32px",
              marginBottom: "32px",
              width: "clamp(100px, 500px, 100%)",
              height: "clamp(100px, 1000px, 30vw)",
            }}
            src={project.src}
            alt={project.alt}
          />
        </div>
      </div>
      <Separator color="white" height="100px" width="80vw" />
    </>
  );
};

export default Project;
