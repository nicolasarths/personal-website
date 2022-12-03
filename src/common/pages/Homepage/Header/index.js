import Link from "next/link";
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
          <Link href="#projects">Projetos</Link>
          <span>
            <a href={hrefs.PERSONAL_WEBSITE}>GH REPO</a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Header;
