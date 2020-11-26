import styles from "./NavButton.module.css";
import React from "react";
import Button from "./Button";
import cn from "classnames";
function NavButton({
  notify = 0,
  children,
  selected = false,
  className,
  href,
  ...props
}) {
  return (
    <Button
      href={href}
      className={cn(
        styles.NavButton,
        className,
        selected ? styles.selected : null
      )}
      {...props}
    >
      {notify != 0 ? <span className={styles.notify}>{notify}</span> : null}
      {children}
    </Button>
  );
}

export default NavButton;
