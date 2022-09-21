import Nav from "./Nav";
import { navOptions } from "../data"

export default function Layout({ children }) {
  return (
    <>
      <Nav options={ navOptions }/>
      {children}
      <footer className="footer">
        <span className="footer-rights">Nícolas Arths.</span>
        <span className="footer-credits">
          Design by{" "}
          <a
            className="footer-credits-a relative"
            href="https://www.nicolasarths.com.br"
          >
            @nicolasarths<span className="glow span-glow absolute block"></span>
          </a>
        </span>
      </footer>
    </>
  );
}
