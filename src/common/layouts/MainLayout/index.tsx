import Nav from "./Nav";
import React from "react";

import styles from "./MainLayout.module.sass";

export interface IOptions {
  href: string;
  text: string;
}

type LayoutProps = {
  menuOptions: IOptions[];
  children: any;
};

const Layout = ({ menuOptions, children }: LayoutProps) => {
  return (
    <>
      <Nav options={menuOptions} />
      {children}
      <footer className={styles.footer}>
        <span className={styles.rights}>Nícolas Arths.</span>
        <span className={styles.credits}>
          Design by{" "}
          <a className="relative" href="https://www.nicolasarths.com.br">
            @nicolasarths<span className="glow absolute block"></span>
          </a>
        </span>
      </footer>
    </>
  );
};

export default Layout;
