import ProjectGallery from '../components/ProjectGallery'

export default function Home() {
  return (
    <div className="flex flex-around nowrap relative text-center">
      <div className="main-left-section">
        <h1 className="title main-title no-margin">Nícolas Arths</h1>
        <h2 className="main-subtitle no-margin">
          Desenvolvedor júnior, poeta, enxadrista
        </h2>

        <div className="main-projects-container flex flex-center wrap">
          <h3 className="main-project-title title h3">Meus projetos</h3>
          <ProjectGallery/>
        </div>
      </div>
      <div className="main-right-section">
        <div className="cover"></div>
      </div>
    </div>
  );
}
