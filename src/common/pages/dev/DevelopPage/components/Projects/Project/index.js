import Img from "components/Img";
import MenuOfButtons from "components/MenuOfButtons";
import styles from "./Project.module.sass";

const Project = ({ project }) => {
  const options = [
    {
      href: project.href,
      text: "Acessar",
    },
    {
      href: project.github,
      text: "Repositório",
    },
  ];

  return (
    <>
      <div className={styles.project}>
        <div className={styles.left}>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <MenuOfButtons options={options} />
          <h4>
            <strong>Features:</strong>
          </h4>

          <div>
            {project.features.map((feature, key) => (
              <li key={key}>{feature}</li>
            ))}
          </div>
        </div>

        <Img
          id={project.id}
          className="fade-in delay-400"
          src={project.src}
          alt={project.alt}
        />
      </div>
    </>
  );
};

export default Project;
