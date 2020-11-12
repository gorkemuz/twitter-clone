import React from "react";
import NavButton from "./NavButton";
import { Twitter, Home } from "./icon/index";

import styles from "./Nav.module.css";

/* 




TEMEL OLUŞTUĞUNDA GİTHUBA YÜKLE




*/
function Nav() {
  return (
    <nav className={styles.nav}>
      <NavButton>
        <Twitter />
      </NavButton>
      <NavButton>
        <Home />
        <span>Home</span>
      </NavButton>
    </nav>
  );
}

export default Nav;
