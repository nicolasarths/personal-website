import styles from "./Explore.module.sass";
import { Button } from "components/Buttons";

const Explore = () => {
  return (
    <div id="explorar" className={styles.explore}>
      <h2 className={styles.intermission}>
        Vamos explorar algumas possibilidades?
      </h2>
      <div className={styles.possibilities}>
        <h2 className="text-center padding-bottom-medium">
          Desenvolvimento de Websites
        </h2>
        <p>
          Quando pensamos em desenvolver websites, é preciso ter certeza de
          estar atuando ao lado de um desenvolvedor de{" "}
          <strong>confiança</strong>, que esteja ciente da necessidade de se
          utilizarem ferramentas <strong>seguras</strong> e atualizadas que
          atendam as suas necessidades.
        </p>
        <p>
          Como construtor de websites totalmente responsivos, que contam com
          velocidade e design, utilizando-se da programação verdadeira, tenho a
          capacidade de atender as suas demandas e construir as interfaces que
          você precisa para fazer o seu projeto brilhar.
        </p>
        <p>
          Desde carrosséis de imagens até botões animados, análise de tráfego
          com o Google Analytics e integração com ferramentas de e-mail, estou
          esperando por você para que possamos trabalhar juntos em busca do
          sucesso!
        </p>
        <Button type="colorChanger">Entrar em contato</Button>
      </div>
    </div>
  );
};

export default Explore;
