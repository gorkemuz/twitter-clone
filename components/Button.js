import React from "react";
import cn from "classnames";
import styles from "./Button.module.css";

function Button({ full = false, children, className, ...props }) {
  return (
    <button
      className={cn(styles.button, full ? styles.FullWidth : null, className)}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
