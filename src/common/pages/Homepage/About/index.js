import Spacer from "components/Spacer";
import Link from "next/link";
import styles from "./About.module.sass";

const About = () => {
  return (
    <div id="about" className={styles.about}>
      <Spacer height="42px" />
      <h2>Sobre</h2>
      <p>
        Sou Nícolas Arths. Aos vinte e cinco anos decidi me aventurar no mundo
        da programação. Depois de um ano, desenvolvi diversos projetos web, e
        procuro por formas de explorar novos horizontes. Você pode fazer parte
        dessa jornada.
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
  );
};
export default About;
