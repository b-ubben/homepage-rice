import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:ital,wght@0,400;0,700;1,400&display=swap');

  :root {
    --background: #282a36;
    --current-line: #44475a;
    --foreground: #f8f8f2;
    --comment: #6272a4;
    --cyan: #8be9fd;
    --green: #50fa7b;
    --orange: #ffb86c;
    --pink: #ff79c6;
    --purple: #bd93f9;
    --red: #ff5555;
    --yellow: #f1fa8c;
  }

  * {
    box-sizing: border-box;
  }

  body {
    background-color: var(--background);
    color: var(--foreground);
    font-family: 'IBM Plex Mono', monospace, -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif;
    padding: 0;
    margin: 0 auto;
    font-size: calc(24px + 0.25rem);
    line-height: 2.75rem;
  }

  a {
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  ul {
    list-style: none; 
    margin: 0;
    padding: 0;
  }

  .italic {
    font-style: italic;
  }

  .text-comment {
    color: var(--comment);
  }

  .text-red {
    color: var(--red);
  }

  .text-yellow {
    color: var(--yellow);
  }
  
  .text-cyan {
    color: var(--cyan);
  }

  .text-pink {
    color: var(--pink);
  }
`;

export default GlobalStyle;
