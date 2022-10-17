import LanguageSwitcher from "common/features/language/components/LanguageSwitcher";
import About from "./components/About";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Projects from "./components/Projects";

import styles from "./EN.module.sass"

const EN = () => (
  <div className={styles.container}>
    <LanguageSwitcher lang="pt-br"/>
    <Header/>
    <About/>
    <Projects/>
    <Contact/>
  </div>
)

export default EN;