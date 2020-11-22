import styles from "./ThemeButton.module.css";
import React from "react";
import Button from "./Button";
import cn from "classnames";

function ThemeButton({ big, children, className, ...props }) {
  return (
    <Button
      className={cn(styles.ThemeButton, big ? styles.big : null, className)}
      {...props}
    >
      {children}
    </Button>
  );
}

export default ThemeButton;
