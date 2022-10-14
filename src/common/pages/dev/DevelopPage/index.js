import Section from "components/Section";
import {
  Projects,
  Header,
  Features,
  Attention,
  Organize,
  Contact,
  Possibilities
} from "./components";
import styles from "./DevelopPage.module.sass";

const DevelopPage = () => {
  return (
    <div className={styles.develop}>
      <Header />
      <Projects />
      <Possibilities />
      <Features />
      <Attention />
      <Organize />
      <Contact />
    </div>
  );
};

export default DevelopPage;
