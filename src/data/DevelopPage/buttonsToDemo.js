import {
  JumpingButton,
  FadeInButton,
  TremblingButton,
  Button,
} from "components/Buttons";

export const buttonsToDemo = [
  <Button
    key="colorchangingbutton"
    style={{
      background:
        "linear-gradient(-45deg, #ff7000, #ff00aa, #2399ff, #ff7000, #ff00aa, #2399ff)",
      backgroundSize: "400% 400%",
      animation: "color-changing 5s ease infinite",
    }}
  >
    Botão que muda de cor
  </Button>,
  <Button
    key="colorchangingbutton"
    style={{
      animation: "glow 5s ease infinite",
    }}
  >
    Botão que brilha
  </Button>,
  <FadeInButton
    key="fadeinbutton"
    text="Botão com entrada lenta"
    animationDuration={"10s"}
  />,
  <FadeInButton
    key="fadeinbutton2"
    text="Botão com entrada suave"
    animationDuration={"2s"}
  />,
  <TremblingButton key="tremblingbutton" text="Botão que treme" />,
  <JumpingButton key="jumpingbutton" text="Botão que surge balançando" />,
  <Button
    key="scalingupbutton"
    style={{ animation: "fade-in-scaling-up 2s infinite" }}
  >
    Botão que surge aumentando
  </Button>,
  <Button
    onClick={() => location.href = "#contatar"}
    key="newbuttonbutton"
    style={{ fontSize: "10px", paddingInline: "10px", paddingBlock: "23px" }}
  >
    Quer um botão com a sua cara? Clique aqui e peça agora mesmo!
  </Button>,
];
