import Link from "components/Next/Link";
import { useRouter } from "next/router";

import { hrefs } from "data";

import styles from "./Nav.module.sass";

const Nav = ({ options }) => {
  const router = useRouter();

  function isActive(currentPath) {
    return router.pathname == currentPath
      ? "menu-option active"
      : "menu-option";
  }

  const NavItem = ({ href, text }) => {
    return (
      <div className={isActive(href)}>
        <Link href={href}>{text}</Link>
      </div>
    );
  };
  return (
    <>
      <span className="navbar">
        <div className="menu">
          {options.map(({ href, text }, i) => (
            <NavItem key={i} href={href} text={text} />
          ))}
        </div>
      </span>
    </>
  );
};

export default Nav;
