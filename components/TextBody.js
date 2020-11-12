import React from "react";
import styles from "./TextBody.module.css";
import cn from "classnames";

function TextBody({ bold = true, children }) {
  return (
    <span className={cn(styles.TextBody, bold ? styles.Bold : null)}>
      {children}
    </span>
  );
}

export default TextBody;
