import { SquareButton } from "components/Buttons";
import data from "./data";
import styles from "./Planos.module.sass";
import { hrefs } from "data";

const Planos = () => {
  const detail = (type: string) =>
    data.map((item) => {
      const privateDetail = (
        <>
          <li>
            <strong>Aulas Particulares:</strong> {item.quantidadeParticular} por
            semana.
          </li>
          <li>
            <strong>Duração:</strong> {item.duracaoParticular}.
          </li>
        </>
      );
      const groupDetail = (
        <>
          <li>
            <strong>Aulas Em Grupo:</strong> {item.quantidadeGrupo} por semana.
          </li>
          <li>
            <strong>Duração:</strong> {item.duracaoGrupo}.
          </li>
        </>
      );

      if (item.type == type) {
        return (
          <li key={item.id} className={styles.plano}>
            <h4>{item.nome}</h4>
            <ul>
              <li>
                <strong>Investimento:</strong> R$ {item.investimento},00.
              </li>
              {type == "particular" ? privateDetail : ""}
              {type == "grupo" ? groupDetail : ""}
              {type == "conjunto" ? privateDetail : ""}
              {type == "conjunto" ? groupDetail : ""}
              <li>
                <strong>Ciclo de Aprendizado:</strong> {item.ciclo}.
              </li>
            </ul>
            <a href={hrefs.WHATSAPP_BASE}>
              <SquareButton className={styles.contrate}>
                Contrate<span className={styles.shine}></span>
              </SquareButton>
            </a>
          </li>
        );
      } else return;
    });
  return (
    <div>
      <h3>Aulas Particulares</h3>
      <div className={styles.containerPlanos}>{detail("particular")}</div>
      <h3>Aulas Em Grupo</h3>
      <div className={styles.containerPlanos}>{detail("grupo")}</div>
      <h3>Aulas Particulares e Em Grupo</h3>
      <div className={styles.containerPlanos}>{detail("conjunto")}</div>
    </div>
  );
};

export default Planos;
