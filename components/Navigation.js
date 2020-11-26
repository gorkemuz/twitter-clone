import React from "react";

import { useRouter } from "next/router";

import styles from "./Navigation.module.css";
import { MENU } from "../constants/index";
import NavButton from "./NavButton";
import TextTitle from "./TextTitle";

function Nav({ flat = false }) {
  const router = useRouter();
  return (
    <nav className={styles.nav}>
      {MENU.map((menu) => {
        const showTitle = !flat && menu.title.length > 0;
        const isSelected = router.pathname === menu.path;
        return (
          <NavButton
            notify={menu.notify}
            selected={isSelected}
            href={menu.path}
          >
            {isSelected ? menu.fillIcon : menu.icon}
            {showTitle ? <TextTitle>{menu.title}</TextTitle> : null}
          </NavButton>
        );
      })}
    </nav>
  );
}

export default Nav;
