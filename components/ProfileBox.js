import React from "react";
import styles from "./ProfileBox.module.css";
import Button from "./Button";
import Photo from "./Photo";
import TextBody from "./TextBody";
import { ArrowBottom } from "../components/icon/index";
function ProfileBox({ name = "Görkem Uz", slug = "@gorkemuz" }) {
  return (
    <Button className={styles.ProfileBox}>
      <Photo />
      <div className={styles.Box}>
        <TextBody>{name}</TextBody>
        <TextBody className={styles.Slug}>{slug}</TextBody>
      </div>
      <div className={styles.IconParent}>
        <ArrowBottom className={styles.Icon} />
      </div>
    </Button>
  );
}

export default ProfileBox;
