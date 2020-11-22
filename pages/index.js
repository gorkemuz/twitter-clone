import styles from "../components/Home.module.css";
import Layout from "../components/Layout";
import CONST from "../constants/index";
import SideBar from "../components/ColSideBar";
import Main from "../components/ColMain";
import Extra from "../components/ColExtra";
import { useState, useEffect } from "react";

export default function Home() {
  const size = useWindowSize();
  return (
    <Layout>
      <SideBar
        flat={size.width < CONST.DESKTOP_SIZE}
        className={styles.Sidebar}
      ></SideBar>
      <Main className={styles.Main}>b</Main>
      <Extra className={styles.Extra}>
        {size.width > CONST.TABLET_SIZE ? "extra" : null}
      </Extra>
    </Layout>
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
