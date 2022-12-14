import Link from "components/Next/Link";
import LanguageSwitcher from "common/features/language/components/LanguageSwitcher";
import { hrefs } from "data";

import styles from "./Header.module.sass";

const Header = () => {
  return (
    <div className={styles.header}>
      <LanguageSwitcher lang="en" />
      <div className={styles.text}>
        <h1>
          Nícolas <strong>Arths</strong>
        </h1>
        <div className={styles.menu}>
          <a href="#about">Sobre</a>
          <a href="#projects">Projetos</a>
          <Link href="/dev/desenvolver">Desenvolvimento de Websites</Link>
          <a href="https://youtube.com/@nicolasarths">Youtube</a>
          <span>
            <a href={hrefs.PERSONAL_WEBSITE}>GH REPO</a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Header;
