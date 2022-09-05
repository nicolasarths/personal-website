import { useState } from "react";

export default function Contato() {
  const [CurrentField, changeCurrentField] = useState(FeedbackSelect);

  function HandleSelect(e) {
    if (e.target.value == "feedback") {
      changeCurrentField(FeedbackSelect);
    }
    if (e.target.value == "budget") {
      changeCurrentField(BudgetSelect);
    }
    if (e.target.value == "recruitment") {
      changeCurrentField(RecruitSelect);
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const formData = {}
    Array.from(e.currentTarget.elements).forEach(field => {
      if (!field.name) return;
      formData[field.name] = field.value;
    });
  
    fetch('/api/mail', {
      method: 'post',
      body: JSON.stringify(formData)
    })
  }

  function FeedbackSelect() {
    return (
      <>
        <label form="send-message" htmlFor="project">
          Feedback para
        </label>
        <select
          id="project"
          name="project"
          className="form-input"
          form="send-message"
          required
        >
          <option value="nicolasarths.com.br">
            Website Nicolas Arths
          </option>
          <option value="guinchodemoto.com">
            Website Monteiro Guincho de Moto
          </option>
          <option value="other">
            Outros
          </option>
        </select>
      </>
    );
  }

  function BudgetSelect() {
    return (
      <>
        <label form="send-message" htmlFor="budget-for">
          Orçamento para
        </label>
        <select
          id="budget-for"
          name="budget-for"
          className="form-input"
          form="send-message"
          required
        >
          <option value="website">Construção de website</option>
          <option value="single-page">Construção de uma única página</option>
          <option value="other">Outros</option>
        </select>
      </>
    );
  }

  function RecruitSelect() {
    return (
      <>
        <label form="send-message" htmlFor="recruiter-intention">
          Feedback para
        </label>
        <select
          id="recruiter-intention"
          name="recruiter-intention"
          className="form-input"
          form="send-message"
          required
        >
          <option value="exchange-emails">Trocar e-mails</option>
          <option value="schedule-conversation">Agendar conversa</option>
          <option value="other">Outros</option>
        </select>

        <label form="send-message" htmlFor="enterprise">
          Empresa (opcional)
        </label>
        <input
          id="enterprise"
          name="enterprise"
          className="form-input"
          type="text"
          placeholder="Nome da empresa"
        />
      </>
    );
  }

  return (
    <form
      className="form margin-auto"
      name="send-message"
      id="send-message"
      method="post"
      onSubmit={handleSubmit}
    >
      <h2 className="form-title">Entre em contato</h2>

      <label form="send-message" htmlFor="Subject">
        Assunto
      </label>
      <select
        id="subject"
        name="subject"
        className="form-input"
        form="send-message"
        onChange={HandleSelect}
        required
        autoFocus
      >
        <option value="feedback">Feedback</option>
        <option value="budget">Orçamento</option>
        <option value="recruitment">Recrutamento</option>
        <option value="other">Outros</option>
      </select>

      {CurrentField}

      <label form="send-message" htmlFor="name">
        Nome
      </label>
      <input
        id="name"
        name="name"
        className="form-input"
        type="text"
        placeholder="Digite seu nome aqui..."
        required
      />

      <label form="send-message" htmlFor="email">
        E-mail para contato
      </label>
      <input
        id="email"
        name="email"
        className="form-input"
        type="email"
        placeholder="contato@email.com"
        required
      />

      <label form="send-message" htmlFor="message">
        Mensagem
      </label>
      <textarea
        id="message"
        name="message"
        className="form-input"
        rows="5"
        placeholder=""
        required
      ></textarea>
      <input className="form-input form-submit" type="submit" value="Enviar" />
    </form>
  );
}
