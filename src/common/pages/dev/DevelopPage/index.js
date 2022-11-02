import Section from "components/Section";
import {
  Projects,
  Header,
  Features,
  Attention,
  Organize,
  Contact,
  Explore,
} from "./components";
import Title from "components/Next/Title";

import styles from "./DevelopPage.module.sass";

const DevelopPage = () => {
  return (
    <>
      <Title title="Nícolas Arths - Vamos construir algo incrível juntos?" />
      <div className={styles.develop}>
        <Header />
        <Projects />
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
