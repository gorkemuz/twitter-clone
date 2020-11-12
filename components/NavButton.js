import styles from "./Home.module.css";
import React from "react";
import Button from "./Button";

function NavButton({ children }) {
  return <Button className={styles.button}>{children}</Button>;
}

export default NavButton;
