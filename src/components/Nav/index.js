import Link from "next/link";
import { useRouter } from "next/router";

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
  return <div className="menu">
    {options.map(({href, text}, i) => <NavItem key={i} href={href} text={text}/>)}
  </div>;
};

export default Nav;
