import React from "react";
import styles from "./TextBody.module.css";
import cn from "classnames";

function TextBody({ bold = false, children, ...props }) {
  return (
    <span className={cn(styles.TextBody, bold ? styles.Bold : null)} {...props}>
      {children}
    </span>
  );
}

export default TextBody;
