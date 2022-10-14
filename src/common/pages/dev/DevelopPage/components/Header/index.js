import { SquareButton } from "components/Buttons";
import Paper from "components/blocks/Paper";
import SvgContainer from "components/containers/SvgContainer";
import icon from "./letter.svg";
import WhoAmI from "./WhoAmI"
import styles from "./Header.module.sass"

const Header = () => {
  return (
    <div className={styles.header}>
      <h1 className="no-margin">
        Vamos construir algo <strong>incrível</strong> <span>juntos?</span>
      </h1>
      <div className={styles.buttons}>
        <SquareButton
          onClick={() => (location.href = "#projetos")}
          style={{ padding: "20px 50px" }}
        >
          Ver projetos concluídos
        </SquareButton>
        <SquareButton onClick={() => (location.href = "#explorar")}>
          Mirar no futuro
        </SquareButton>
      </div>
      <Paper className={styles.paper} gap="16px">
        <SvgContainer icon={icon} />
        <p>
          Ficar sem um website hoje em dia é estar sem um cartão de visitas.
        </p>
        <strong><a href="#contatar">Vamos consertar isso?</a></strong>
      </Paper>
      <WhoAmI/>
    </div>
  );
};
export default Header;
