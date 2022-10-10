import { DeepButton, SquareButton, TitleWithButton } from "components/Buttons";
import Paper from "components/blocks/Paper";
import SvgContainer from "components/containers/SvgContainer";
import icon from "assets/develop-page/letter.svg";
import Image from "next/image";

const DevelopPageHeader = () => {
  return (
    <div className="header">
      <h1 className="no-margin">
        Vamos construir algo <strong>incrível</strong> juntos?
      </h1>
      <div className="buttons">
        <SquareButton
          onClick={() => (location.href = "#contatar")}
          style={{ padding: "20px 50px" }}
        >
          Contatar agora
        </SquareButton>
        <SquareButton
          onClick={() => location.href = "/projetos"}
        >
          Ver projetos
        </SquareButton>
      </div>
      <Paper gap="16px">
        <SvgContainer icon={icon} />
        <p>
          Ficar sem um website hoje em dia é estar sem um cartão de visitas.
        </p>
        <strong>Vamos consertar isso?</strong>
      </Paper>
      <div className="whoami">
        <h4>Quem sou eu?</h4>
        <div className="image">
          <Image src="/personal_smile.jpg" alt="" layout="fill" />
        </div>
        <div className="description">
          <h5>Me chamo Nícolas Arths.</h5>
          <p className="width-80">
            Desenvolvedor de websites de Porto Alegre, Rio Grande do Sul.
          </p>
          <p>
            Estou aqui para ajudar você a encontrar o seu espaço na internet.
            Juntos, podemos pensar em maneiras diferentes de chamar a atenção de
            novos clientes e expandir nossos horizontes!
          </p>
        </div>
      </div>
    </div>
  );
};
export default DevelopPageHeader;
