import styles from "./ThemeButton.module.css";
import React from "react";
import Button from "./Button";
import cn from "classnames";

function ThemeButton({ big, children, classNames, ...props }) {
  return (
    <Button
      className={cn(styles.ThemeButton, classNames, big ? styles.big : null)}
      {...props}
    >
      {children}
    </Button>
  );
}

export default ThemeButton;
