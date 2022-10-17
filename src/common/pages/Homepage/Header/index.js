import Link from "next/link";
import LanguageSwitcher from "common/features/language/components/LanguageSwitcher"

import styles from "./Header.module.sass";

const Header = () => {
  return (
    <div className={styles.header}>
      <LanguageSwitcher lang="en"/>
      <div className={styles.text}>
        <h1>
          Nícolas <strong>Arths</strong>
        </h1>
        <div className={styles.menu}>
          <a href="#about">Sobre</a>
          <Link href="/dev/desenvolver/">Explorar</Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
