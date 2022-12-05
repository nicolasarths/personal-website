import Header from "./Header";
import LastArticles from "components/blog/LastArticles";
import { articles } from "data";
import About from "./About/index";
import ProjectsDisplayer from "components/displayers/ProjectsDisplayer";
import Title from "components/Next/Title";

import styles from "./Homepage.module.sass";

const Homepage = () => {
  return (
    <>
      <Title title="Nícolas Arths - Página Inicial" />
      <div className={styles.homepage}>
        <Header />
        <About />
        {/* <LastArticles articles={articles}/>*/}
        <ProjectsDisplayer lang="ptBr" />
      </div>
    </>
  );
};

export default Homepage;
