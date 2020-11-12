import React from "react";
import Button from "../components/Button";
import NavButton from "../components/NavButton";
import Nav from "../components/Nav";
export default {
  title: "Buttons",
};

export const Normal = () => <Button> Save </Button>;
export const NavigatinButton = () => <NavButton> Save </NavButton>;
export const Navigation = () => <Nav />;
