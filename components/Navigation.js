import React from "react";
import NavButton from "./NavButton";
import TitleBold from "./TitleBold";
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

import styles from "./Navigation.module.css";

function Nav({ selected }) {
  return (
    <nav className={styles.nav}>
      <NavButton>
        <Twitter />
      </NavButton>
      <NavButton selected={selected === "home"}>
        <Home />
        <TitleBold>Home</TitleBold>
      </NavButton>
      <NavButton selected={selected === "explore"}>
        <Explore />
        <TitleBold>Explore</TitleBold>
      </NavButton>
      <NavButton notify="13" selected={selected === "notification"}>
        <Notification />
        <TitleBold>Notification</TitleBold>
      </NavButton>
      <NavButton selected={selected === "messages"}>
        <Messages />
        <TitleBold>Messages</TitleBold>
      </NavButton>
      <NavButton selected={selected === "bookmark"}>
        <Bookmark />
        <TitleBold>Bookmark</TitleBold>
      </NavButton>
      <NavButton selected={selected === "lists"}>
        <Lists />
        <TitleBold>Lists</TitleBold>
      </NavButton>
      <NavButton selected={selected === "profile"}>
        <Profile />
        <TitleBold>Profile</TitleBold>
      </NavButton>
      <NavButton selected={selected === "more"}>
        <More />
        <TitleBold>More</TitleBold>
      </NavButton>
    </nav>
  );
}

export default Nav;
