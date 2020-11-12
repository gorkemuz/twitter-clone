import styles from "./NavButton.module.css";
import React from "react";
import Button from "./Button";
import cn from "classnames";
function NavButton({ notify = 0, children, selected, classNames, ...props }) {
  return (
    <Button
      className={cn(
        styles.NavButton,
        selected ? styles.selected : null,
        classNames
      )}
    >
      {children}
      {notify != 0 ? <span className={styles.notify}>{notify}</span> : null}
    </Button>
  );
}

export default NavButton;
