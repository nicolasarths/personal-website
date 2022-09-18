import NextImage from "../../components/NextImage";
import Option from "../Option";

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
      <div
        id={project.id}
        className="project flex flex-center align-center gap-big"
      >
        <div className="project-left">
          <h2 className="title project-title no-margin">{project.title}</h2>
          <div className="project-links flex align-center no-decoration margin-y gap-medium">
            {options.map((option) => (
              <Option key={option.text} option={option} />
            ))}
          </div>
          <div className="padding">
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
        </div>

        <div className="project-right">
          <div className="project-image flex align-center flex-center">
            <NextImage src={project.src} alt={project.alt} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
