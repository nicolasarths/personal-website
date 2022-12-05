import LanguageSwitcher from "common/features/language/components/LanguageSwitcher";
import About from "./components/About";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Title from "components/Next/Title";

import styles from "./EN.module.sass";
import ProjectsDisplayer from "components/displayers/ProjectsDisplayer/";

const EN = () => (
  <>
    <Title title="Nícolas Arths - International" />
    <div className={styles.container}>
      <LanguageSwitcher lang="pt-br" />
      <Header />
      <About />
      <ProjectsDisplayer lang="en" />
      <Contact />
    </div>
  </>
);

export default EN;
