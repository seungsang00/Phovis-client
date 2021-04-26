// reset 또는 공통적으로 사용하는 css
// reset 또는 공통적으로 사용하는 css
import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body {
    font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  input, button {
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