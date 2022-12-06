import TextAndImage from "components/containers/TextAndImage";
import { SquareButton } from "components/Buttons";
import image from "./image.jpg";
import styles from "../SharedStyles.module.sass";
import Img from "components/Img";

const DevelopPageAttention = () => {
  return (
    <div
      style={{
        color: "var(--background-color)",
      }}
      className={styles.attention}
    >
      <TextAndImage
        text={() => (
          <>
            <h2 className="title size-42 margin-top-small">Seções especiais</h2>
            <p>
              Para abordar assuntos que merecem{" "}
              <span className="inline-highlight-dark">
                destaque
              </span>
              , informar seus clientes e exibir o seu produto ou o seu negócio
              em grande estilo;
            </p>
            <SquareButton onClick={() => (location.href = "#contatar")}>
              Solicite agora mesmo um orçamento.
            </SquareButton>
          </>
        )}
        image={() => <Img src={image} alt="a black pug paying attention" />}
      />
    </div>
  );
};

export default DevelopPageAttention;
