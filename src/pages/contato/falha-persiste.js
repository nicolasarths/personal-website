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
  
  return (
    <>
      <div className="flex flex-column margin-y-medium container-small margin-x-auto">
        <h1> Falha persistente </h1>
        <p>Infelizmente, nosso sistema não está funcionando.</p>
        <p>
          Você ainda pode enviar seu e-mail através do seu aplicativo favorito
          clicando no botão a seguir.
        </p>

        <button 
          className="margin-y text-left normal padding-y"
          onClick={handleMailTo}>
          Enviar e-mail por aplicativo
        </button>
      </div>
    </>
  );
}
