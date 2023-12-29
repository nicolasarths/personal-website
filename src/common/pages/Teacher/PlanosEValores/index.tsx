import Planos from "./Planos";

import styles from "./PlanosEValores.module.sass";
const PlanosEValores = () => {
  return (
    <div id="planos-e-valores" className={styles.planosEValores}>
      <h2>Planos E Valores</h2>
      <p>
        O Curso Rumo À Fluência possui diferentes planos, que se adequam às
        diferentes necessidades de cada aluno, separadas por diferentes graus de
        intensidade e modalidade de aula.
      </p>
      <p>
        Todos os planos contam com acesso irrestrito ao material didático
        estudado, ao grupo de alunos para debate e aos vídeos do Youtube e
        eventuais materiais extra produzidos pelo professor, como podcasts e
        artigos educativos, para reforço do conteúdo aprendido em aula.
      </p>
      <Planos />
    </div>
  );
};

export default PlanosEValores;
