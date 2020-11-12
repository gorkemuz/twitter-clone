import React from "react";
import Button from "../components/Button";
import NavButton from "../components/NavButton";
import ThemeButton from "../components/ThemeButton";
import Nav from "../components/Navigation";
export default {
  title: "Buttons",
};

export const Normal = () => <Button> Save </Button>;
export const NavigatinButton = () => <NavButton> Save </NavButton>;
export const Navigation = () => <Nav selected="home" />;
export const Theme = () => (
  <div>
    <ThemeButton>Tweetle</ThemeButton>
    <ThemeButton full>Tweetle full</ThemeButton>
    <ThemeButton full big>
      Tweetle full
    </ThemeButton>
  </div>
);
