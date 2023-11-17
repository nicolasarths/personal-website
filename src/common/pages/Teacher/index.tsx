import { Button } from "components/Buttons";
import WhatsappButton from "components/Buttons/WhatsappButton";
import Img from "components/Img";
import Link from "components/Next/Link";
import Title from "components/Next/Title";
import playlistImage from "./playlist-img.png";
import banner from "./banner.png";
import hrefs from "data/hrefs";

import styles from "./Teacher.module.sass";

const Teacher = () => (
  <div className={styles.container}>
    <Title title="Área Professor" />
    <h1>Curso Rumo À Fluência</h1>
    <p>Aprenda inglês agora.</p>
    <a
      className={styles.banner}
      href={hrefs.WHATSAPP_BASE}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Img
        src={banner}
        alt="R$240,00. 1 hora de aula semanal, vídeos complementares às aulas no Youtube, grupo de alunos no WhatsApp, material completo incluso na mensalidade."
      />
    </a>

    <WhatsappButton>Mande uma mensagem no Whatsapp</WhatsappButton>
    <p className="text-center">ou</p>
    <Link href="/contato">
      <Button type="square">Envie sua mensagem pelo site</Button>
    </Link>
    <div className={styles.divisor}>
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

    <Link href="/">
      <Button type="deep">Voltar para o menu inicial</Button>
    </Link>
  </div>
);
export default Teacher;
