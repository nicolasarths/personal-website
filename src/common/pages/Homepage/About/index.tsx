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
            Olá, meu nome é Nícolas Arths. Eu sou desenvolvedor de websites,
            professor de inglês, escritor e, agora, youtuber também! Este
            website nasceu com o intuito de promover meu trabalho como
            programador, mas o projeto está evoluindo bastante. Você pode
            navegar pelos menus para encontrar aquilo que mais se encaixa em sua
            busca.
          </p>
          <div className={styles.menu}>
            <Link href="/dev/desenvolver">Desenvolvimento Web</Link>
            <a
              href="https://www.youtube.com/@nicolasarths"
              target="_blank"
              rel="noreferrer"
            >
              Youtube
            </a>
            <Link href="/professor">Inglês</Link>
            <Link href="/escritor">Escritor</Link>
          </div>
        </div>
      </div>
      <Separator color="var(--secondary-color)" height="92px" width="90%" />
    </>
  );
};
export default About;
