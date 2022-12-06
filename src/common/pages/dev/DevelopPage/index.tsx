import Section from "components/Section";
import {
  Header,
  Features,
  Attention,
  Organize,
  Contact,
  Explore,
} from "./components";
import Title from "components/Next/Title";
import ProjectsDisplayer from "components/displayers/ProjectsDisplayer";

import styles from "./DevelopPage.module.sass";

const DevelopPage = () => {
  return (
    <>
      <Title title="Nícolas Arths - Vamos construir algo incrível juntos?" />
      <div className={styles.develop}>
        <Header />
        <ProjectsDisplayer lang="ptBr" />
        <Explore />
        <Features />
        <Attention />
        <Organize />
        <Contact />
      </div>
    </>
  );
};

export default DevelopPage;
