import React from "react";
import styles from "./ProfileBox.module.css";
import Button from "./Button";
import Photo from "./Photo";
import TextBody from "./TextBody";
import { ArrowBottom } from "../components/icon/index";
function ProfileBox({ flat, name = "Görkem Uz", slug = "@gorkemuz" }) {
  return (
    <Button className={styles.ProfileBox} full>
      <Photo size={39} />
      {!flat ? (
        <>
          <div className={styles.Box}>
            <TextBody bold>{name}</TextBody>
            <TextBody className={styles.Slug}>{slug}</TextBody>
          </div>
          <div className={styles.IconParent}>
            <ArrowBottom className={styles.Icon} />
          </div>
        </>
      ) : null}
    </Button>
  );
}

export default ProfileBox;
