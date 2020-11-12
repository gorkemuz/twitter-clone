import React from "react";
import styles from "./TextTitle.module.css";
import cn from "classnames";

function TextTitle({ bold = true, children }) {
  return (
    <h2 className={cn(styles.TextTitle, bold ? styles.Bold : null)}>
      {children}
    </h2>
  );
}

export default TextTitle;
