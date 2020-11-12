import React from "react";
import cn from "classnames";
import styles from "./Button.module.css";

function Button({ children, className, ...props }) {
  return (
    <button className={cn(styles.button, className)} {...props}>
      {children}
    </button>
  );
}

export default Button;
