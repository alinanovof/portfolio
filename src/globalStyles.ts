import { createGlobalStyle } from "styled-components";
import { ThemeType } from "./themes";

export const GlobalStyles = createGlobalStyle<{ theme: ThemeType }>`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
    transition: background-color ${({ theme }) => theme.transition}, 
                color ${({ theme }) => theme.transition};
    line-height: 1.6;
  }
  
  h1, h2, h3, h4, h5, h6 {
    font-weight: 700;
    margin-bottom: 1rem;
  }
  
  h1 {
    font-size: 3.052rem;
    line-height: 1.2;
  }
  
  h2 {
    font-size: 2.441rem;
  }
  
  h3 {
    font-size: 1.953rem;
  }
  
  h4 {
    font-size: 1.563rem;
  }
  
  h5 {
    font-size: 1.25rem;
  }
  
  p {
    margin-bottom: 1rem;
  }
  
  a {
    color: ${({ theme }) => theme.primary};
    text-decoration: none;
    transition: color ${({ theme }) => theme.transition};
    cursor: pointer;
  }
  
  button {
    cursor: pointer;
    background: none;
    border: none;
  }
  
  section {
    padding: 80px 0;
  }

  .container {
    width: 90%;
    max-width: 1200px;
    margin: 0 auto;
  }
`;
