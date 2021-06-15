import React from "react";

export const LocaleContext = React.createContext(
  <img alt="english" src="assets/united-kingdom.png" className="localeImage" />
);

export const HookThemeContext = React.createContext("default hookTheme");
export const ClassThemeContext = React.createContext("default componentTheme");
