import Section from "components/Section";
import TextAndImage from "components/containers/TextAndImage";
import { DeepButton } from "components/Buttons";

import image from "./image.jpg";
import Img from "components/Img";

import styles from "../SharedStyles.module.sass";

const DevelopPageOrganize = () => {
  return (
    <div className={styles.organize}>
      <TextAndImage
        alternate
        text={() => (
          <>
            <div>
              <h3>Ou para organizar</h3>
              <p>
                E instruir seus clientes, alavancando sua capacidade de
                converter acessos em bons negócios.
              </p>
            </div>
            <DeepButton onClick={() => (location.href = "#contatar")}>
              Vamos conversar?
            </DeepButton>
          </>
        )}
        image={() => (
          <Img
            src={image}
            alt="organized folders, one has a label saying madonna"
          />
        )}
      />
    </div>
  );
};

export default DevelopPageOrganize;
