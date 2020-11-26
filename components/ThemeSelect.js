import styles from "./ThemeSelect.module.css";
import React, { useState } from "react";

const themes = ["light", "dim", "dark"];

function ThemeSelect() {
  const [selectedTheme, setSelectedTheme] = useState("light");
  return (
    <div>
      {themes.map((theme) => (
        <label className={styles.radioContainer} key={theme}>
          <input
            type="radio"
            value={theme}
            name="theme"
            checked={selectedTheme === theme}
            onChange={(e) => setSelectedTheme(e.target.value)}
          ></input>
          {theme.charAt(0).toUpperCase() + theme.slice(1)}
        </label>
      ))}
    </div>
  );
}

export default ThemeSelect;
