import Carousel from "components/Carousel";
import { carouselImages, buttonsToDemo } from "data";

const DevelopPageComponents = () => {
  return (
    <div className="components container-big margin-auto padding-small">
      <h2 className="size-32">Componentes</h2>
      <p className="text-justify">
        Está procurando por novos elementos para preencher a sua página web?
        Aqui estão alguns componentes que você pode adicionar ao seu projeto.
        Todos eles podem ser customizados e novos podem ser construídos.
      </p>

      <h2>Carrossel</h2>
      <Carousel images={carouselImages} />

      <h2>Botões animados</h2>
      <section className="features-buttons-demo flex flex-between wrap gap">
      {buttonsToDemo.map((button, i) => (
        <span key={i} style={{ minWidth: "100px" }}>
          {button}
        </span>
      ))}
    </section>
    </div>
  );
};

export default DevelopPageComponents;