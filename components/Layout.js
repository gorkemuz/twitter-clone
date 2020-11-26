import React from "react";

import styles from "./Layout.module.css";
import { useState, useEffect } from "react";

import SideBar from "../components/ColSideBar";
import Main from "../components/ColMain";
import Extra from "../components/ColExtra";
import CONST from "../constants/index";

function Layout({ children }) {
  const size = useWindowSize();
  return (
    <div className={styles.Layout}>
      <SideBar
        flat={size.width < CONST.DESKTOP_SIZE}
        className={styles.Sidebar}
      ></SideBar>
      <Main className={styles.Main}>{children}</Main>
      <Extra className={styles.Extra}></Extra>
    </div>
  );
}

function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });
  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount
  return windowSize;
}

export default Layout;
