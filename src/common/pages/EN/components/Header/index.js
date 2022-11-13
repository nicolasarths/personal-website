import { hrefs } from "data";

import styles from "./Header.module.sass";

const Header = () => (
  <div className={styles.header}>
    <h1>Nícolas Arths</h1>
    <p>
      You have landed on the international version of the Nícolas Arths website.
    </p>
    <div className={styles.menu}>
      <a href="#about">About Me</a>
      <a href="#projects">Latest Projects</a>
      <a href={hrefs.GITHUB_PROFILE}>Github</a>
      <a href="#contact">Get in touch</a>
      <a href={hrefs.PERSONAL_WEBSITE}>Repository of this Website</a>
    </div>
  </div>
);

export default Header;
