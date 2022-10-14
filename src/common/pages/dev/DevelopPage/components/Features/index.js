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
