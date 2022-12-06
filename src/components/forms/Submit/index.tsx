import { PropsWithoutRef } from "react";
import styles from "./Submit.module.sass";

const message = {
  en: `Do not send any sensitive data via this form. By clicking
  "send", you agree that all data you are sending through this
  form are authorized to become public in cases of data leaking, since the
  mechanisms that send this data to Nícolas Arths&apos; email belong to
  third parties.`,
  "pt-br": `Não envie informações sensíveis por este formulário. Ao clicar em
  "enviar", você concorda que quaisquer dados que você estiver
  enviados por este formulário estão autorizados a tornarem-se públicos
  em casos de vazamento de dados, já que os mecanismos que enviam estes
  dados para o e-mail de Nícolas Arths pertencem a terceiros.`,
};

const Disclaimer = ({ lang, form }: PropsWithoutRef<any>) => (
  <div className={styles.disclaimer}>
    <input type={"checkbox"} form={form} required />
    {lang === "en" ? message.en : message["pt-br"]}
  </div>
);

const Submit = ({ lang, value, form, ...props }: PropsWithoutRef<any>) => {
  return (
    <div {...props}>
      <input
        className={styles.submit}
        type="submit"
        value={value ? value : "Enviar"}
        form={form}
      />
      <Disclaimer lang={lang} />
    </div>
  );
};

export default Submit;
