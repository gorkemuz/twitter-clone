import React from "react";
import styles from "./ColSideBar.module.css";
import cn from "classnames";
import Navigation from "./Navigation";
import ThemeButton from "./ThemeButton";
import ProfileBox from "./ProfileBox";

function SideBar({ flat = false, className }) {
  return (
    <div className={cn(styles.SideBar, className)}>
      <Navigation flat={flat} />
      <ThemeButton className={styles.ThemeButton} big={!flat} flat={flat}>
        {flat ? "a" : "Tweet"}
      </ThemeButton>
      <div className={styles.Profile}>
        <ProfileBox flat={flat} />
      </div>
    </div>
  );
}

export default SideBar;
