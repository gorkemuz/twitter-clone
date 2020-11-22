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

const MENU = [
  {
    key: "twit",
    icon: <Twitter />,
    title: "",
    notify: 0,
  },
  {
    key: "home",
    icon: <Home />,
    title: "Home",
    notify: 0,
  },
  {
    key: "explore",
    icon: <Explore />,
    title: "Explore",
    notify: 0,
  },
  {
    key: "notification",
    icon: <Notification />,
    title: "Notification",
    notify: 13,
  },
  {
    key: "messages",
    icon: <Messages />,
    title: "Messages",
    notify: 0,
  },
  {
    key: "bookmark",
    icon: <Bookmark />,
    title: "Bookmark",
    notify: 0,
  },
  {
    key: "list",
    icon: <Lists />,
    title: "List",
    notify: 0,
  },
  {
    key: "profile",
    icon: <Profile />,
    title: "Profile",
    notify: 0,
  },
  {
    key: "more",
    icon: <More />,
    title: "More",
    notify: 0,
  },
];

function Nav({ flat = false, selected }) {
  return (
    <nav className={styles.nav}>
      {MENU.map((menu) => {
        const showTitle = !flat && menu.title.length > 0;
        return (
          <NavButton notify={menu.notify} selected={selected === menu.key}>
            {menu.icon}
            {showTitle ? <TextTitle>{menu.title}</TextTitle> : null}
          </NavButton>
        );
      })}
    </nav>
  );
}

export default Nav;
