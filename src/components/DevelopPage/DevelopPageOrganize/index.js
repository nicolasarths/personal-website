import Section from "components/Section";
import TextAndImage from "components/containers/TextAndImage";
import { DeepButton } from "components/Buttons";
import ImageFrame from "components/ImageFrame";

import organize from "assets/develop-page/organize.jpg";


const DevelopPageOrganize = () => {
  return (
    <Section color="#001">
      <div className="develop-page-organize container-big margin-auto padding-x-small padding-y-big size-20">
        <TextAndImage
          alternate
          text={() => (
            <>
              <h3 className="title size-32">Ou para organizar</h3>
              <p>
                E instruir seus clientes, alavancando sua capacidade de
                converter acessos em bons negócios.
              </p>
              <DeepButton>Vamos conversar?</DeepButton>
            </>
          )}
          image={() => (
            <ImageFrame
              src={organize}
              alt="organized folders, one has a label saying madonna"
              objectFit="cover"
              style={{ height: "100%" }}
            />
          )}
        />
      </div>
    </Section>
  );
};

export default DevelopPageOrganize;
