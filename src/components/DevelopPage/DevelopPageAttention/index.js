import Section from "components/Section"
import TextAndImage from "components/containers/TextAndImage"
import { SquareButton } from "components/Buttons"
import ImageFrame from "components/ImageFrame"


import attention from "assets/develop-page/attention.jpg";

const DevelopPageAttention = () => {
  return (
    <Section color="#eda">
      <div
        style={{
          color: "var(--background-color)",
        }}
        className="develop-page-attention container-big margin-auto padding-x-small padding-y-big size-20"
      >
        <TextAndImage
          text={() => (
            <>
              <h2 className="title size-42 margin-top-small">
                Seções especiais
              </h2>
              <p>
                Para abordar assuntos que merecem destaque, informar seus
                clientes e exibir o seu produto ou o seu negócio em grande
                estilo;
              </p>
              <SquareButton onClick={() => (location.href = "#contatar")}>
                Solicite agora mesmo um orçamento.
              </SquareButton>
            </>
          )}
          image={() => (
            <ImageFrame
              src={attention}
              alt="a black pug paying attention"
              objectFit="cover"
              style={{ height: "100%", width: "100%" }}
            />
          )}
        />
      </div>
    </Section>
  );
};

export default DevelopPageAttention;