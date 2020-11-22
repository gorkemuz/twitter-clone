import React from "react";
import styles from "./ColMain.module.css";
import cn from "classnames";
function Main({ children, className }) {
  return <div className={cn(styles.Main, className)}>{children}</div>;
}

export default Main;
