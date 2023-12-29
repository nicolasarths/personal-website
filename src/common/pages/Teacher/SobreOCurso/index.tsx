import styles from "./SobreOCurso.module.sass";
const SobreOCurso = () => (
  <div id="sobre-o-curso" className={styles.sobreOCurso}>
    <h2>Sobre o Curso</h2>
    <p>O Curso Rumo À Fluência conta com diversos benefícios para o aluno.</p>
    <ul>
      <li>
        <span className={styles.augment}>📘</span>{" "}
        <span>
          <strong>Material de Estudo em Abundância: </strong> encontre uma
          tonelada de material didático totalmente incluso no curso para se
          aprofundar no conteúdo estudado.
        </span>
      </li>
      <li>
        <span className={styles.augment}>🎯</span>{" "}
        <span>
          <strong>Acompanhamento de Objetivos:</strong> todas as aulas começam
          com uma revisão dos objetivos das aulas, para garantir a evolução
          constante, e comemorar cada vitória.
        </span>
      </li>
      <li>
        <span className={styles.augment}>🏅</span>{" "}
        <span>
          <strong>Desbloqueie Conquistas:</strong> o curso conta com uma série
          de conquistas alcançáveis pelos alunos, para tornar o aprendizado mais
          divertido.
        </span>
      </li>
      <div className="hide">
        <li>
          <span className={styles.augment}>🆙</span>{" "}
          <span>
            <strong>Suba de Nível:</strong> entenda sua evolução na língua
            subindo de nível de acordo com os testes que você realiza.
          </span>
        </li>{" "}
        <li>
          <span className={styles.augment}>📃</span>{" "}
          <span>
            <strong>Certificações:</strong> Precisa de uma certificação que
            comprove seus estudos de inglês? Os certificados do curso possuem
            uma descrição das suas capacidades.
          </span>
        </li>{" "}
      </div>

      <li>
        <span className={styles.augment}>📽️</span>{" "}
        <span>
          <strong>Vídeos, Roleplay e Interatividade:</strong> a cada aula
          exploramos diferentes sentidos com dinâmicas, vídeos, artigos e
          conteúdo diferenciado.
        </span>
      </li>
      <li>
        <span className={styles.augment}>🌐</span>
        <span>
          <strong> Suporte Durante a Semana:</strong> Além das aulas, o aluno
          pode contar com suporte fora do horário de aula, para tiragem de
          dúvidas e praticar o inglês.
        </span>
      </li>
      <li>
        <span className={styles.augment}>👥</span>{" "}
        <span>
          <strong>Comunidade de Aprendizado:</strong> Com o grupo no WhatsApp,
          os alunos podem trocar experiências, dicas e aprendizados, criando uma
          jornada compartilhada.
        </span>
      </li>
    </ul>
  </div>
);

export default SobreOCurso;
