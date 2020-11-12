import styles from "./Photo.module.css";
import React from "react";
//import cn from "classnames";

function Photo({
  src = "https://pbs.twimg.com/profile_images/999960742504861696/RrNU0_ym_400x400.jpg",
  alt = "photo",
}) {
  return (
    <div className={styles.Photo}>
      <img className={styles.Img} src={src} alt={alt}></img>
    </div>
  );
}

export default Photo;
