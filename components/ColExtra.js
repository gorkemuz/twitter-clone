import React from "react";
import styles from "./ColExtra.module.css";
import cn from "classnames";
function Extra({ children, className }) {
  return <div className={cn(styles.Extra, className)}>{children}</div>;
}

export default Extra;
