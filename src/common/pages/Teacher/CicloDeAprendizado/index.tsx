import Img from "components/Img";
import Link from "components/Next/Link";
import cicloDeAprendizadoPNG from "./cicloDeAprendizado.png";

import styles from "./CicloDeAprendizado.module.sass";
const cicloDeAprendizado = () => (
  <div id="ciclo-de-aprendizado" className={styles.cicloDeAprendizado}>
    <h2>Ciclos de Aprendizado</h2>
    <p>
      O Curso Rumo À Fluência possui uma metodologia de Ciclo de Aprendizado de
      Inglês.
    </p>
    <Img
      alt="Imagem ilustrando o ciclo de aprendizado das aulas de inglês do curso Rumo À Fluência"
      src={cicloDeAprendizadoPNG}
    />
    <p>
      O Ciclo de Aprendizado de Inglês funciona para todos os níveis de estudo,
      pois visa maximizar a fixação do conteúdo aprendido em sala de aula.
    </p>
    <p>
      Geralmente, cada ciclo leva, no mínimo, duas aulas para ser percorrido,
      porque tudo no aprendizado de inglês é sobre retornar ao conteúdo
      aprendido, para que ele seja fixado.
    </p>
    <p>
      Os ciclos são auxiliados por metodologias baseadas na pirâmide de{" "}
      <Link href="https://www.cesdcampinas.org.br/a-piramide-de-aprendizagem-de-william-glasser">
        William Glasser
      </Link>
      , e na experiência pregressa com alunos de diversos níveis, e o conteúdo
      constantemente ajustado de acordo com a necessidade dos alunos.
    </p>
  </div>
);

export default cicloDeAprendizado;
