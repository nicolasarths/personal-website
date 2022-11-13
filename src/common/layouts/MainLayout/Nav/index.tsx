import Link from "next/link";
import { useRouter } from "next/router";

import styles from "./Nav.module.sass";

interface IOptions {
  href: string;
  text: string;
}

const Nav = ({ options }: { options: IOptions[] }) => {
  const router = useRouter();

  function isActive(currentPath: string) {
    return router.pathname == currentPath
      ? `${styles.option} active`
      : styles.option;
  }

  const NavItem = ({ href, text }: IOptions) => {
    return (
      <div className={isActive(href)}>
        <Link href={href}>{text}</Link>
      </div>
    );
  };
  return (
    <>
      <span className={styles.nav}>
        <div className={styles.menu}>
          {options.map(({ href, text }, i) => (
            <NavItem key={i} href={href} text={text} />
          ))}
        </div>
      </span>
    </>
  );
};

export default Nav;
