import Image from "next/image";
import Link from "next/link";

export default function Home() {
  function currentAge() {
    const today = new Date();
    const birthDate = new Date("1996-10-30");
    let age = today.getFullYear() - birthDate.getFullYear();
    const isMonthOrHasPassed = today.getMonth() >= birthDate.getMonth();
    const isDayOrHasPassed = today.getDate() > birthDate.getDate();
    if (!(isMonthOrHasPassed && isDayOrHasPassed)) age--;
    return age;
  }

  function buildGallery() {
    const projects = [
      {
        src: "/projetos/Monteiro.png",
        alt: "Website desenvolvido para Monteiro Mototransporte 100% responsivo, com barra de menus fixa, capa acima do menu que desaparece quando o usuário desce a tela e também amigável para leitores de tela.",
      },
      {},
      {},
      {},
      {},
      {},
    ];

    return projects.map((project, i) => {
      return (
        <Link key={i} href="https://www.guinchodemoto.com">
          <div className="next-image project-gallery-item">
            <span className="project-gallery-item-coming-up">Em breve...</span>
            <Image
              src={project.src ? project.src : ""}
              alt={project.alt ? project.alt : ""}
              layout="fill"
            />
          </div>
        </Link>
      );
    });
  }

  return (
    <div className="flex flex-around nowrap relative text-center">
      <div className="main-left-section">
        <h1 className="title main-title no-margin">Nícolas Arths</h1>
        <h2 className="main-subtitle no-margin">
          Desenvolvedor júnior, poeta, enxadrista
        </h2>

        <div className="projects-container flex flex-center wrap">
          <h3 className="project-title title h3">Meus projetos</h3>

          <div className="project-gallery flex wrap gap flex-center">
            {buildGallery()}
          </div>
        </div>
      </div>
      <div className="main-right-section">
        <div className="cover"></div>
      </div>
    </div>
  );
}
