import { useRouter } from "next/router";
import mailtoConverter from "../../lib/mailtoConverter";

export default function Fail() {
  const router = useRouter()
  const form = router.query
  const formEntries = Object.entries(form)
  let body = formEntries.filter(([key, value]) => key != 'subject')
  body = body.map(([key, value]) => `%0D%0A${key}: ${value}`)
  
  function handleMailTo() {
    const mailto = mailtoConverter('nicolasarths.receiver@gmail.com', form.subject, body)
    location.href = mailto
  }
  async function handleTryAgain() {
    let params = ``
    formEntries.forEach(([key, value]) => params += `${key}=${value}&`)

    const response = await fetch('/api/mail', {
      method: 'post',
      body: JSON.stringify(form)
    })

    if (response.status > 300) location.href = `/contato/falha-persiste?${params}`
    else location.href = '/contato/sucesso'
  }
  return (
    <>
      <div className="flex flex-column margin-y-medium container-small margin-x-auto">
        <h1> Falha no envio da mensagem. </h1>
        <p>Sentimos muito.</p>
        <p>
          É possível que nosso sistema esteja com problemas na comunicação com o
          servidor.
        </p>
        <p>
          Podemos enviar seu e-mail através do seu aplicativo favorito para ter
          certeza de que ele será entregue, ou tentar novamente através do nosso
          sistema. Você escolhe.
        </p>

        <button 
          className="margin-y text-left normal padding-y"
          onClick={handleMailTo}>
          Enviar e-mail pelo meu aplicativo favorito
        </button>
        <button
          className="margin-y text-left normal padding-y" 
          onClick={handleTryAgain}>
          Tentar mais uma vez através do sistema
        </button>
      </div>
    </>
  );
}
