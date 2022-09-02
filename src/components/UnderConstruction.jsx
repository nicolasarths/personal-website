export default function UnderConstruction(props) {  
  return (
    <>
      <div className="under-construction flex flex-center text-center">
        <h1>
          A página <span className="highlight">{props.title}</span> ainda está sendo construída e em breve estará pronta!
        </h1>
      </div>
    </>
  );
}
