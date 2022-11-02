import { Form, Field, Select, Submit } from "components/forms";
import styles from "./Curriculum.module.sass";
import { sendMail } from "utils";
import { v4 } from "uuid";
import Title from "components/Next/Title";

const curriculumHref =
  "https://drive.google.com/file/d/1y7yQppfdHuW38nlP48WCgvfzJsHfp8-c/view?usp=sharing/";

const curriculumOptions = [
  {
    value: "Quero um website para meu negócio",
    id: "Quero um website para meu negócio",
  },
  {
    value: "Quero melhorar meu website atual",
    id: "Quero melhorar meu website atual",
  },
  {
    value: "Sou recrutador e estou recrutando",
    id: "Sou recrutador e estou recrutando",
  },
  {
    value: "Outros",
    id: "Outros",
  },
];

const CurriculumPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const formElements = e.currentTarget.elements;
    const subject = `Alguém requisitou acesso ao seu currículo #${v4()}`;

    sendMail(
      formElements,
      subject,
      () => window.open(curriculumHref, "_blank"),
      () => window.open(curriculumHref, "_blank")
    );
  };

  return (
    <>
      <Title title="Nícolas Arths - Currículo" />
      <div className={styles.container}>
        <Form onSubmit={handleSubmit} method="post" name="curriculo">
          <Field
            name="representando"
            form="curriculo"
            type="text"
            label="Qual empresa você representa?"
            detail="*Caso não represente nenhuma empresa, insira o seu nome"
            placeholder="Apresente-se aqui"
            autoFocus
            required
          />
          <Select
            name="interessado_em"
            form="curriculo"
            type="text"
            label="Qual dessas opções melhor descreve o seu interesse?"
            options={curriculumOptions}
            required
          />
          <Submit />
        </Form>
      </div>
    </>
  );
};
export default CurriculumPage;
