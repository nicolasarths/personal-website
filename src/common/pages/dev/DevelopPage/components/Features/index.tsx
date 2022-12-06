import {
  Button,
  FadeInButton,
  JumpingButton,
  TremblingButton,
} from "components/Buttons";
import Carousel from "components/Carousel";
import { carouselImages } from "data";
import styles from "./Features.module.sass";

const buttonsToDemo = [
  <Button type="colorChanger" key="colorChanger">
    Botão que muda de cor
  </Button>,
  <Button
    key="colorchangingbutton"
    style={{
      animation: "glow 5s ease infinite",
    }}
  >
    Botão que brilha
  </Button>,
  <FadeInButton key="fadeIn" type="fadeIn">
    Botão com entrada suave
  </FadeInButton>,
  <TremblingButton key="tremblingButton">Botão que treme</TremblingButton>,
  <JumpingButton type="jumper" key="jumpingbutton">
    Botão que surge balançando
  </JumpingButton>,
  <Button
    key="scalingupbutton"
    style={{ animation: "fade-in-scaling-up 2s infinite" }}
  >
    Botão que surge aumentando
  </Button>,
];

const Features = () => {
  return (
    <div className={styles.components}>
      <div className={styles.possibilities}>
        <h2 className="text-center padding-bottom-medium">
          Desenvolvimento de Websites
        </h2>
        <p>
          Quando pensamos em desenvolver websites, é preciso ter certeza de
          estar atuando ao lado de um desenvolvedor de{" "}
          <strong>confiança</strong>, que esteja ciente da necessidade de se
          utilizarem ferramentas <strong>seguras</strong> e atualizadas que
          atendam as suas necessidades.
        </p>
        <p>
          Como construtor de websites totalmente responsivos, que contam com
          velocidade e design, utilizando-se da programação verdadeira, tenho a
          capacidade de atender as suas demandas e construir as interfaces que
          você precisa para fazer o seu projeto brilhar.
        </p>
        <p>
          Desde carrosséis de imagens até botões animados, análise de tráfego
          com o Google Analytics e integração com ferramentas de e-mail, estou
          esperando por você para que possamos trabalhar juntos em busca do
          sucesso!
        </p>
        <Button type="colorChanger">Entrar em contato</Button>
      </div>
      <h2 className="size-32">Componentes</h2>
      <p className="text-justify">
        Está procurando por novos elementos para preencher a sua página web?
        Aqui estão alguns componentes que você pode adicionar ao seu projeto.
        Todos eles podem ser customizados e novos podem ser construídos.
      </p>

      <h3>Carrossel</h3>
      <Carousel className={styles.carousel} images={carouselImages} />

      <h3>Botões animados</h3>
      <section className={styles.buttons}>{buttonsToDemo}</section>
    </div>
  );
};

export default Features;
