import { Button } from "components/Buttons";
import WhatsappButton from "components/Buttons/WhatsappButton";
import Img from "components/Img";
import Link from "components/Next/Link";
import Title from "components/Next/Title";
import playlistImage from "./playlist-img.png";

import styles from "./Teacher.module.sass";

const Teacher = () => (
  <div className={styles.container}>
    <Title title="Área Professor" />
    <h1>Área Professor</h1>
    <p>Olá.</p>
    <p>
      Se você está buscando aprender ou mesmo aperfeiçoar o seu inglês,
      encontrou o lugar certo para isso. Como professor de inglês, já ensinei
      crianças e adultos e os ajudei, com meu método de ensino descontraído e
      fácil de acompanhar, a darem largos passos em direção a suas fluências.
    </p>
    <p>
      Se você está procurando por um professor, considere entrar em contato, e
      podemos marcar uma aula experimental <strong>totalmente gratuita!</strong>
    </p>
    <WhatsappButton>Mande uma mensagem no Whatsapp</WhatsappButton>
    <p className="text-center">ou</p>
    <Button type="square">Envie sua mensagem pelo site</Button>
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
          Alternativamente, dê uma olhada na minha playlist de vídeos de inglês
          no Youtube!
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
