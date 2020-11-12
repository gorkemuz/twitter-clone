import React from "react";
import NavButton from "./NavButton";
import {
  Twitter,
  Home,
  Notification,
  Bookmark,
  Lists,
  Messages,
  Profile,
  More,
  Explore,
} from "./icon/index";

import styles from "./Nav.module.css";

/* 




TEMEL OLUŞTUĞUNDA GİTHUBA YÜKLE




*/
function Nav() {
  return (
    <nav className={styles.nav}>
      <NavButton>
        <Twitter />
      </NavButton>
      <NavButton>
        <Home />
        <span>Home</span>
      </NavButton>
      <NavButton>
        <Explore />
        <span>Explore</span>
      </NavButton>
      <NavButton>
        <Notification />
        <span>Notification</span>
      </NavButton>
      <NavButton>
        <Messages />
        <span>Messages</span>
      </NavButton>
      <NavButton>
        <Bookmark />
        <span>Bookmark</span>
      </NavButton>
      <NavButton>
        <Lists />
        <span>Lists</span>
      </NavButton>
      <NavButton>
        <Profile />
        <span>Profile</span>
      </NavButton>
      <NavButton>
        <More />
        <span>More</span>
      </NavButton>
    </nav>
  );
}

export default Nav;
