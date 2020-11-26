import React from "react";
import cn from "classnames";
import styles from "./Button.module.css";
import Link from "next/link";

function LinkButton({ href, children, ...props }) {
  return (
    <Link href={href}>
      <a {...props}>{children}</a>
    </Link>
  );
}

function BaseButton({ children, ...props }) {
  return (
    <button type="button" {...props}>
      {children}
    </button>
  );
}
function Button({ full = false, children, className, ...props }) {
  const Comp = props.href ? LinkButton : BaseButton;
  return (
    <Comp
      {...props}
      className={cn(styles.button, full ? styles.FullWidth : null, className)}
    >
      {children}
    </Comp>
  );
}
export default Button;
