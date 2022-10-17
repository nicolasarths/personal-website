import Contact from "./components/Contact";
import Header from "./components/Header";

import styles from "./EN.module.sass"

const EN = () => (
  <div className={styles.container}>
    <Header/>
    <Contact/>
  </div>
)

export default EN;