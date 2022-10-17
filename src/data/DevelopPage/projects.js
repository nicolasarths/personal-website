import monteiroImage from "./assets/Monteiro.png";
import organoImage from "./assets/organo.png";

const projects = [
  {
    title: "MONTEIRO",
    id: "monteiro",
    localHref: "#monteiro",
    href: "https://guinchodemoto.com",
    src: monteiroImage,
    description:
      "Website comercial construído para a empresa Monteiro Guincho de Motos.",
    alt: "Website desenvolvido para Monteiro Mototransporte 100% responsivo, com barra de menus fixa, capa acima do menu que desaparece quando o usuário desce a tela e também amigável para leitores de tela.",
    features: [
      "Acessibilidade",
      "100% responsivo",
      "Menu sempre visível",
      "Carregamento ultra-rápido",
      "Formulário de contato por e-mail",
      "Botão flutuante para whatsapp em telas pequenas",
    ],
    github: "https://github.com/nicolasarths/monteiro",
    en: {
      description:
        'NextJs website made for Brazilian towing services company "Monteiro Guincho de Moto".',
    },
  },
  {
    title: "ORGANO",
    id: "organo",
    localHref: "#organo",
    href: "https://organo-bice.vercel.app/",
    src: organoImage,
    description: "Projeto desenvolvido junto ao curso de React da alura.",
    alt: "projeto organo do curso de react da alura cursos online, website de organização de cards, que são imagens de pessoas com descrições, tudo isso separado em times",
    features: [
      "100% responsivo",
      "Criação de cards",
      "Construído em React",
      "Design",
    ],
    github: "https://github.com/nicolasarths/organo",
    en: {
      description:
        'Card creator built with Brazilian programming school "Alura Cursos Online"',
    },
  },
];

export default projects;
