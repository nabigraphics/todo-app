import React, { FC } from "react";
import { Global, css } from "@emotion/core";
import normalize from "normalize.css";

const GlobalStyle: FC = () => (
  <Global
    styles={css`
      ${normalize};
      body {
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
          "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji",
          "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
      }
    `}
  />
);

export default GlobalStyle;
