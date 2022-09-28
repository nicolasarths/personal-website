import Carousel from "../../components/Carousel";
import Section from "../../components/Section/index.js";
import ButtonsDemo from "../../components/Features/ButtonsDemo";
import { carouselImages, buttonsToDemo } from "../../data";
import Spacer from "../../components/Spacer";
import { SquareButton } from "../../components/Buttons";

const Features = () => {
  return (
    <>
      <div className="features-page container-big margin-auto padding-small">
        <h1>Features</h1>
        <p className="text-justify">
          Componentes que você pode adicionar ao seu projeto. Todos eles podem
          ser customizados e novos podem ser construídos.
        </p>
        <h2>Carrossel</h2>
        <Carousel images={carouselImages} />

        <h2>Botões animados</h2>
        <ButtonsDemo buttonsToDemo={buttonsToDemo} />
        <Spacer height="40px" />
      </div>

      <Section color="#f8b">
        <div
          style={{
            color: "var(--background-color)",
          }}
          className="container-big margin-auto padding-x-small padding-y"
        >
          <h2 className="title size-42 margin-top-small">Seções especiais</h2>
          <h3>Para abordar assuntos que merecem destaque.</h3>
        </div>
      </Section>
      <Section color="var(--background-color)">
        <div className="text-right container-big margin-auto padding-small">
          <h2 className="title size-42">Ou para organizar</h2>
          <h3>E instruir seus clientes.</h3>
        </div>
      </Section>
      <Section color="#f8b">
        <div
          style={{
            color: "var(--background-color)",
          }}
          className="container-big margin-auto padding-small"
        >
          <h2 className="title size-42">Quer mais?</h2>
          <SquareButton 
          href="/contato?subject=budget"
            style={{ padding: "32px", fontSize: "16px" }}>
            Solicite agora mesmo um orçamento.
          </SquareButton>
        </div>
      </Section>
    </>
  );
};

export default Features;
