import Nav from "./Nav";

export default function Layout({ menuOptions, children }) {
  return (
    <>
      <Nav options={menuOptions} />
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
