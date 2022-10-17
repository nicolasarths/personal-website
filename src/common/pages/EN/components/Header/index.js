import { hrefs } from "data";

import styles from "./Header.module.sass";

const Header = () => (
  <div className={styles.header}>
    <h1>Nícolas Arths</h1>
    <p>
      You have landed on the international version of the Nícolas Arths
      website.
    </p>
    <div className={styles.menu}>
      <a href="#contact">Get in touch</a>
      <a href="#projects">Latest projects</a>
      <a href={hrefs.GITHUB_PROFILE}>Github</a>
    </div>
  </div>
);

export default Header;
