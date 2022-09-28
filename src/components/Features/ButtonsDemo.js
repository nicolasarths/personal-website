import { useState, useEffect, useCallback } from "react";
import Spacer from "../../components/Spacer";

const ButtonsDemo = ({ buttonsToDemo }) => {
  return (
    <section className="features-buttons-demo flex flex-between wrap gap">
      {buttonsToDemo.map((button, i) => (
      <span key={i} style={{ minWidth: "100px" }}>
        {button}
      </span>
      ))}
    </section>
  );
};

export default ButtonsDemo;
