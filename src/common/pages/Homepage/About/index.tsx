import Img from "components/Img";
import Separator from "components/Separator";
import Link from "components/Next/Link";
import styles from "./About.module.sass";

import profilePicture from "assets/PROFILE_PICTURE_SQUARE.jpg";

const About = () => {
  return (
    <>
      <Separator color="var(--secondary-color)" height="92px" width="90%" />
      <div id="about" className={styles.about}>
        <Img src={profilePicture} alt="Nícolas Arths' picure" />
        <div className={styles.text}>
          <h2>Sobre</h2>
          <p>
            Sou Nícolas Arths. Aos vinte e cinco anos decidi me aventurar no
            mundo da programação. Depois de um ano, desenvolvi diversos projetos
            web, e procuro por formas de explorar novos horizontes. Você pode
            fazer parte dessa jornada.
          </p>
          <div className={styles.menu}>
            <Link href="/dev/desenvolver">Vamos começar?</Link>
            <a
              href="https://github.com/nicolasarths"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
            <Link href="/dev/curriculo">Currículo</Link>
            <Link href="/contato">Contato</Link>
          </div>
        </div>
      </div>
      <Separator color="var(--secondary-color)" height="92px" width="90%" />
    </>
  );
};
export default About;
