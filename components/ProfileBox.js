import React from "react";
import styles from "./ProfileBox.module.css";
import Button from "./Button";
import Photo from "./Photo";
import { ArrowBottom } from "../components/icon/index";
function ProfileBox({ name = "Görkem Uz", slug = "@gorkemuz" }) {
  return (
    <Button className={styles.ProfileBox}>
      <Photo />
      <div className={styles.Box}>
        <p className={styles.Text}>{name}</p>
        <p>{slug}</p>
      </div>
      <div className={styles.IconParent}>
        <ArrowBottom className={styles.Icon} />
      </div>
    </Button>
  );
}

export default ProfileBox;
