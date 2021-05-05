// reset 또는 공통적으로 사용하는 css
import { createGlobalStyle } from 'styled-components'
import theme from '@styles/theme'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Spoqa Han Sans Neo', 'sans-serif';
  }
  body {
    font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
    font-size: 1rem;
    overflow-x: hidden;
    background-color: ${theme.color.primary};
  }
  a, a:focus, a:hover {
    color: inherit;
    text-decoration: none;
  }
  input, button {
    font-size: inherit;
    background-color: transparent;
    border: none;
    outline: none;
  }
  ul, li {
    list-style: none;
  }
  h1 {
    font-size: 2rem;
    font-weight: bold;
  }
  textarea {
    resize: none;
    width: 100%;
    background-color: transparent;
    border: none;
    outline: none;
    padding: .3rem;
  }

  .main-logo {
    font-family: 'Girassol', cursive;
    font-weight: 500;
    letter-spacing: 4px;
  }

  .banner {
    height: 15rem;
  }

  .flex {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
  }

  /* header 부분은 임시 페이지를 위한 내용이므로 추후 수정해야 합니다. */
  header {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 50px;

    & a:hover {
      color: blue;
      font-weight: bold;
    }
  }

  @media only screen and (max-width: 768px) {
    body {
      font-size: 12px;
    }
  }

  @media only screen and (max-width: 576px) {
    body {
      font-size: 10px;
    }
  }

`
