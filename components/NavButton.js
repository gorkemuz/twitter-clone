import styles from "./Nav.module.css";
import React from "react";
import Button from "./Button";

function NavButton({ children }) {
  return <Button className={styles.navButton}>{children}</Button>;
}

export default NavButton;
