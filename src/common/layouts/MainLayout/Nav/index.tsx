import Link from "components/Next/Link";
import { useRouter } from "next/router";
import { IOptions } from "..";

import styles from "./Nav.module.sass";

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
