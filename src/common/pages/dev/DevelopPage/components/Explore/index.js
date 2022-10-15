import styles from "./Explore.module.sass";
import Section from "components/Section";

const Explore = () => {
  return (
    <div id="explorar" className={styles.explore}>
      <h2 className={styles.intermission}>
        Vamos explorar algumas possibilidades?
      </h2>
      {/* <p>
          Aqui está uma lista de websites propótipo que eu construí, que podemos
          usar como ponto de partida para desenvolver outras aplicações.
        </p> */}
    </div>
  );
};

export default Explore;
