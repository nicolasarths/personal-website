import UnderConstruction from "../components/UnderConstruction";

export default function Contato() {
  return (<>
    <UnderConstruction title="contato"/>
  </>)
}

function fContato() {
  return (
    <form className="form" id="send-message" method="post" action="">
      <h2 className="form-title">Entre em contato</h2>
      <label form="send-message" htmlFor="nome">
        Nome
      </label>
      <input
        id="nome"
        className="form-input"
        type="text"
        required
        placeholder="Digite seu nome aqui..."
      />

      <label form="send-message" htmlFor="email">
        E-mail para contato
      </label>
      <input
        id="email"
        className="form-input"
        type="email"
        required
        placeholder="contato@email.com"
      />

      <label form="send-message" htmlFor="mensagem">
        Mensagem*
      </label>
      <textarea
        id="mensagem"
        className="form-input"
        rows="5"
        required
        placeholder=""
      ></textarea>
      <input className="form-input form-submit" type="submit" value="Enviar" />
    </form>
  );
}
