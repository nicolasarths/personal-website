import Section from "components/Section";
import {
  Projects,
  Header,
  Features,
  Attention,
  Organize,
  Contact,
  Explore
} from "./components";
import styles from "./DevelopPage.module.sass";

const DevelopPage = () => {
  return (
    <div className={styles.develop}>
      <Header />
      <Projects />
      <Explore />
      <Features />
      <Attention />
      <Organize />
      <Contact />
    </div>
  );
};

export default DevelopPage;
