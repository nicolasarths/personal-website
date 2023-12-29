import { Button } from "components/Buttons";
import WhatsappButton from "components/Buttons/WhatsappButton";
import Img from "components/Img";
import Link from "components/Next/Link";
import Title from "components/Next/Title";
import playlistImage from "./playlist-img.png";

import SobreOCurso from "./SobreOCurso";
import OProfessor from "./OProfessor";
import CicloDeAprendizado from "./CicloDeAprendizado";
import PlanosEValores from "./PlanosEValores";
import styles from "./Teacher.module.sass";

const Teacher = () => (
  <div className={styles.container} id="inicio">
    <Title title="Área Professor" />
    <h1>Curso Rumo À Fluência</h1>

    <div className={styles.menu}>
      <a href="#sobre-o-curso">
        <li>Sobre o Curso</li>
      </a>

      <a href="#o-professor">
        <li>O Professor</li>
      </a>

      <a href="#ciclo-de-aprendizado">
        <li>Ciclos de Aprendizado</li>
      </a>

      <a href="#planos-e-valores">
        <li>Planos e Valores</li>
      </a>

      <a href="#youtube">
        <li>Canal No Youtube</li>
      </a>
      <a href="#contato">
        <li>Entre em contato</li>
      </a>
    </div>

    <SobreOCurso />
    <OProfessor />
    <CicloDeAprendizado />
    <PlanosEValores />
    <div className={styles.duvidas} id="contato">
      <p>
        Alguma dúvida ou demanda específica? Quer negociar? Let&apos;s talk!
      </p>
      <WhatsappButton>Mande uma mensagem no Whatsapp</WhatsappButton>
      <p className="text-center">ou</p>
      <Link href="/contato">
        <Button type="square" className={styles.blackButton}>
          Envie sua mensagem pelo site
        </Button>
      </Link>
    </div>
    <div className={styles.divisor} id="youtube">
      <a
        href="https://www.youtube.com/playlist?list=PLUSHlk-nXpK_F9B8_fG5jhD2GBvAiXMek"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Img
          src={playlistImage}
          alt="Playlist do youtube chamada Aprendendo a Aprender Inglês"
        />
      </a>
      <div>
        <p>
          Alternativamente, dê uma olhada na playlist de vídeos do curso no
          Youtube!
        </p>
        <a
          href="https://www.youtube.com/playlist?list=PLUSHlk-nXpK_F9B8_fG5jhD2GBvAiXMek"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button type="deep">Acessar agora</Button>
        </a>
      </div>
    </div>

    <Link href="#inicio">
      <Button type="deep" className={styles.backButton}>
        Voltar para o início da página
      </Button>
    </Link>
    <Link href="/">
      <Button type="deep" className={styles.backButton}>
        Voltar para o menu inicial
      </Button>
    </Link>
  </div>
);
export default Teacher;
