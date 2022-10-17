import Contact from "./components/Contact";
import Header from "./components/Header";
import Projects from "./components/Projects";

import styles from "./EN.module.sass"

const EN = () => (
  <div className={styles.container}>
    <Header/>
    <Projects/>
    <Contact/>
  </div>
)

export default EN;