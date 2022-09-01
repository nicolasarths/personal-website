import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Layout({ children }) {
  const router = useRouter();

  function isActive(currentPath) {
    return router.pathname == currentPath
      ? "menu-option active"
      : "menu-option";
  }

  return (
    <>
      <div className="menu">
        <Link href="/">
          <div className={isActive("/")}>
            <label>Início</label>
          </div>
        </Link>
        <Link href="/projetos">
          <div className={isActive("/projetos")}>
            <label>Projetos</label>
          </div>
        </Link>
        <Link href="/contato">
          <div className={isActive("/contato")}>
            <label>Contato</label>
          </div>
        </Link>
        <Link href="/blog">
          <div className={isActive("/blog")}>
            <label>Blog</label>
          </div>
        </Link>
      </div>
      <div className="container">
        {children}
      </div>
      <footer className="footer">
        <span className="footer-rights">Nícolas Arths.</span>
        <span className="footer-credits">
          Design by <a className="footer-credits-a relative" href="https://www.nicolasarths.com.br">@nicolasarths<span className="glow span-glow absolute block"></span></a>
          
        </span>
      </footer>
    </>
  );
}
