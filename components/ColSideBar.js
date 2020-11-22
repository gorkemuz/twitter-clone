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
      <ThemeButton big full={!flat}>
        {flat ? "a" : "Tweet"}
      </ThemeButton>
      <ProfileBox />
    </div>
  );
}

export default SideBar;
