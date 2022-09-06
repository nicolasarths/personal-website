import Link from "next/link";

export default function Success() {
  return (
    <>
      <div className="flex flex-column margin-y-medium container-small margin-x-auto">
        <h1>Obrigado! Recebi sua mensagem.</h1>
        <p>Em breve irei te retornar.</p>
        <Link href="/">
          <button className="margin-y text-left normal padding-y">
            Retornar à página inicial
          </button>
        </Link>
      </div>
    </>
  );
}
