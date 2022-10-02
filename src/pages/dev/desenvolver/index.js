import Carousel from "components/Carousel";
import Section from "components/Section/index.js";
import ButtonsDemo from "components/Features/ButtonsDemo";
import { carouselImages, buttonsToDemo } from "data";
import Spacer from "../../../components/Spacer";
import { SquareButton, DeepButton } from "components/Buttons";
import { Form, Field, Submit, TextArea } from "components/forms";

const TitleWithButtonContainer = ({ title, button }) => {
  return (
    <div className="title-with-banner-container">
      <span className="title-with-banner-title">{title}</span>
      <span className="title-with-banner-button">{button}</span>
    </div>
  );
};

const Features = () => {
  return (
    <>
      <div className="client-page container-big margin-auto padding-small">
        <TitleWithButtonContainer
          title={
            <h1 style={{ marginBlock: "0" }}>
              Vamos construir algo incrível juntos?
            </h1>
          }
          button={
            <SquareButton
              onClick={() => (location.href = "#contatar")}
              style={{ padding: "20px 50px" }}
            >
              Contatar agora
            </SquareButton>
          }
        />
        <h2 className="size-32">Features</h2>
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
            onClick={() => location.href = "#contatar"}
            style={{ padding: "32px", fontSize: "16px" }}
          >
            Solicite agora mesmo um orçamento.
          </SquareButton>
        </div>
      </Section>
      <Section name="contatar">
        <div className="padding-small container-medium margin-auto">
          <h2 className="size-32">Contatar</h2>
          <Form onSubmit="">
            <Field
              label="Indique o seu nome"
              name="name"
              type="text"
              placeholder="Digite seu nome"
            />
            <Field
              label="E-mail"
              name="email"
              type="email"
              placeholder="Insira seu contato"
            />
            <Field
              label="Telefone (opcional)"
              name="tel"
              type="tel"
              placeholder="(99) 9 9999-9999"
            />
            <TextArea
              name="message"
              label="E deixe a sua mensagem:"
              placeholder="Mensagem"
              rows="5"
            />
            <Submit />
          </Form>
        </div>
      </Section>
    </>
  );
};

export default Features;
