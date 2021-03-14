import { createGlobalStyle } from 'styled-components'
import { ThemeProps } from '../models'

export default createGlobalStyle<ThemeProps>`
  * {
    font-family: ${({ theme }) => theme.fonts.main};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent; 
  }

  input,
  button,
  textarea,
  select {
    font: inherit;
  }

  button, a {
    cursor: pointer;
    text-decoration: none;
  }

  input:focus,
  textarea:focus,
  button:focus,
  a:focus {
    outline: none;
    -webkit-tap-highlight-color: transparent; /* prevents the blue! */
  }
  input:hover,
  textarea:hover,
  button:hover,
  a:hover {
    outline: none;
    -webkit-tap-highlight-color: transparent; 
  }
  input:active,
  textarea:active,
  button:active,
  a:active {
    outline: none;
    -webkit-tap-highlight-color: transparent; 
  }
  input:visited,
  textarea:visited,
  button:visited,
  a:visited {
    outline: none;
    -webkit-tap-highlight-color: transparent; 
  }

  ::-webkit-scrollbar {
    width: 10px;
  }
    
  ::-webkit-scrollbar-track {
    background: rgb(220, 220, 220);
  }
    
  ::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 5px;
  }
    
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`
