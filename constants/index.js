import * as Icon from "../components/icon/index";

export default {
  TABLET_SIZE: 980,
  DESKTOP_SIZE: 1270,
};
export const MENU = [
  {
    key: "twit",
    path: "/",
    icon: <Icon.Twitter style={{ fontSize: "30px" }} />,
    fillIcon: (
      <Icon.Twitter style={{ fontSize: "30px", color: "rgb(217,217,217)" }} />
    ),
    title: "",
    notify: 0,
  },
  {
    key: "home",
    path: "/",
    icon: <Icon.Home />,
    fillIcon: <Icon.HomeFill />,
    title: "Home",
    notify: 0,
  },
  {
    key: "explore",
    path: "/explore",
    icon: <Icon.Explore />,
    fillIcon: <Icon.Explore />,
    title: "Explore",
    notify: 0,
  },
  {
    key: "notifications",
    path: "/notifications",
    icon: <Icon.Notification />,
    fillIcon: <Icon.NotificationFill />,
    title: "Notifications",
    notify: 13,
  },
  {
    key: "messages",
    path: "/messages",
    icon: <Icon.Messages />,
    fillIcon: <Icon.MessagesFill />,
    title: "Messages",
    notify: 0,
  },
  {
    key: "bookmarks",
    path: "/bookmarks",
    icon: <Icon.Bookmark />,
    fillIcon: <Icon.BookmarkFill />,
    title: "Bookmarks",
    notify: 0,
  },
  {
    key: "lists",
    path: "/lists",
    icon: <Icon.Lists />,
    fillIcon: <Icon.ListsFill />,
    title: "Lists",
    notify: 0,
  },
  {
    key: "profile",
    path: "/profile",
    icon: <Icon.Profile />,
    fillIcon: <Icon.ProfileFill />,
    title: "Profile",
    notify: 0,
  },
  {
    key: "more",
    path: "/more",
    icon: <Icon.More />,
    fillIcon: <Icon.More />,
    title: "More",
    notify: 0,
  },
];
