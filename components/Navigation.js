import React from "react";
import NavButton from "./NavButton";
import TextTitle from "./TextTitle";
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
        <TextTitle>Home</TextTitle>
      </NavButton>
      <NavButton selected={selected === "explore"}>
        <Explore />
        <TextTitle>Explore</TextTitle>
      </NavButton>
      <NavButton notify="13" selected={selected === "notification"}>
        <Notification />
        <TextTitle>Notification</TextTitle>
      </NavButton>
      <NavButton selected={selected === "messages"}>
        <Messages />
        <TextTitle>Messages</TextTitle>
      </NavButton>
      <NavButton selected={selected === "bookmark"}>
        <Bookmark />
        <TextTitle>Bookmark</TextTitle>
      </NavButton>
      <NavButton selected={selected === "lists"}>
        <Lists />
        <TextTitle>Lists</TextTitle>
      </NavButton>
      <NavButton selected={selected === "profile"}>
        <Profile />
        <TextTitle>Profile</TextTitle>
      </NavButton>
      <NavButton selected={selected === "more"}>
        <More />
        <TextTitle>More</TextTitle>
      </NavButton>
    </nav>
  );
}

export default Nav;
