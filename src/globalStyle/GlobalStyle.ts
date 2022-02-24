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

  .Dropdown-root {
    width: 120px;
    margin: 0px 4px 0px 4px; 
  }

  .Dropdown-control {
    color: white;
    background-color: ${props => props.theme.colorDark50};
    border: 1px solid #21262C;
  }

  .Dropdown-menu {
    border: 1px solid ${props => props.theme.colorDark50};
  }
  
  .Dropdown-option, .Dropdown-option:hover, .Dropdown-option.is-selected {
    color: white;
    background-color: ${props => props.theme.colorDark50};
  }


 
`;

export { GlobalStyle };
