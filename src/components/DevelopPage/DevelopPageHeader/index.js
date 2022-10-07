import { SquareButton, TitleWithButton } from "components/Buttons";


const DevelopPageHeader = () => {
  return (
    <div className="client-page container-big margin-auto padding-small">
      <TitleWithButton
        title={
          <h1 style={{ marginBlock: "0" }}>
            Vamos construir algo incrível juntos?
          </h1>
        }
        button={
          <SquareButton
            onClick={() => (location.href = "#contatar")}
            style={{ padding: "20px 50px" }}
          >
            Contatar agora
          </SquareButton>
        }
      />
    </div>
  );
};
 export default DevelopPageHeader;