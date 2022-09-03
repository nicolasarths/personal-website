import { useState } from "react";

export default function Contato() {
  const [feedbackOptions, toggleFeedbackOptions] = useState();
  const [budgetOptions, toggleBudgetOptions] = useState("hide");
  const [recruitOptions, toggleRecruitOptions] = useState("hide");

  function HandleSelect(e) {
    toggleFeedbackOptions("hide");
    toggleBudgetOptions("hide");
    toggleRecruitOptions("hide");
    if (e.target.value == "feedback") {
      toggleFeedbackOptions();
    }
    if (e.target.value == "budget") {
      toggleBudgetOptions();
    }
    if (e.target.value == "recruit") {
      toggleRecruitOptions();
    }
  }

  function FeedbackSelect() {
    return (
      <>
        <label
          form="send-message"
          htmlFor="feedback"
          className={feedbackOptions}
        >
          Feedback para
        </label>
        <select
          id="feedback"
          name="feedback"
          className={`form-input ${feedbackOptions}`}
          form="send-message"
          required
        >
          <option value="nicolasarths">Website Nicolas Arths</option>
          <option value="guinchodemoto">
            Website Monteiro Guincho de Moto
          </option>
          <option value="other">Outros</option>
        </select>
      </>
    );
  }

  function BudgetSelect() {
    return (
      <>
        <label form="send-message" htmlFor="budget" className={budgetOptions}>
          Feedback para
        </label>
        <select
          id="budget"
          name="budget"
          className={`form-input ${budgetOptions}`}
          form="send-message"
          required
        >
          <option value="website">Construção de website</option>
          <option value="page">Construção de uma única página</option>
          <option value="other">Outros</option>
        </select>
      </>
    );
  }

  function RecruitSelect() {
    return (
      <>
        <label form="send-message" htmlFor="recruit" className={recruitOptions}>
          Feedback para
        </label>
        <select
          id="recruit"
          name="recruit"
          className={`form-input ${recruitOptions}`}
          form="send-message"
          required
        >
          <option value="email">Trocar e-mails</option>
          <option value="schedule">Agendar conversa</option>
          <option value="other">Outros</option>
        </select>

        <label
          form="send-message"
          htmlFor="enterprise"
          className={recruitOptions}
        >
          Empresa (opcional)
        </label>
        <input
          id="enterprise"
          name="enterprise"
          className={`form-input ${recruitOptions}`}
          type="text"
          placeholder="Nome da empresa"
          required
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
      action=""
    >
      <h2 className="form-title">Entre em contato</h2>

      <label form="send-message" htmlFor="subject">
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
        <option value="recruit">Recrutamento</option>
        <option value="other">Outros</option>
      </select>

      <FeedbackSelect />

      <BudgetSelect />

      <RecruitSelect />

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

      <label form="send-message" htmlFor="mensagem">
        Mensagem*
      </label>
      <textarea
        id="mensagem"
        name="mensagem"
        className="form-input"
        rows="5"
        placeholder=""
        required
      ></textarea>
      <input className="form-input form-submit" type="submit" value="Enviar" />
    </form>
  );
}
