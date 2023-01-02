import Title from "components/Next/Title";
import Link from "components/Next/Link";
import { Button } from "components/Buttons";

import style from "./Writer.module.sass";

const Writer = () => (
  <div className={style.container}>
    <Title title="Área Escritor" />
    <h1>Área Escritor</h1>
    <p>
      Posto poesia em blogs desde 2015. Atualmente publico também artigos no meu
      blog do Wordpress, que você pode acessar{" "}
      <a
        href="https://nicolasarths.wordpress.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        clicando aqui
      </a>
      .
    </p>
    <p>
      Você também pode me seguir no Instagram por{" "}
      <a
        href="https://instagram.com/nicolasarths"
        target="_blank"
        rel="noopener noreferrer"
      >
        aqui
      </a>
      .
    </p>
    <p>
      Em breve o blog e as poesias estarão também aqui neste website. Aguarde!
    </p>

    <Link href="/">
      <Button type="deep">Voltar para a página inicial</Button>
    </Link>
  </div>
);
export default Writer;
