import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

const GlobalStyle = createGlobalStyle`
  ${normalize}

  body,html {
    background-color: ${props => props.theme.colorDark100};
    color: ${props => props.theme.colorPrimary100};
    font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji";
    font-size: 14px;
    line-height: 1.5;
    min-height: 100%;
    height: 100%;
    margin: 0;
    line-height: 1.65;
    min-width: 320px;
  }

  * {
  box-sizing: border-box;
  }
`;

export { GlobalStyle };
