import profilePicture from "assets/homepage/profile-picture.jpg";
import Img from "components/Img";
import Link from "next/link";

import styles from "./Header.module.sass";

const Header = () => {
  return (
    <div className={styles.header}>
      <Img
        className={"fade-in " + styles.Img}
        src={profilePicture}
        alt="Nícolas Arths"
      />
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
