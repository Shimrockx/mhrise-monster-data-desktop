import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  html {
    margin: 0;
    padding: 0;
  }

  body {
    -webkit-app-region: drag;
    background: #ffffff;
    color: #4d4d4d;
    font-family: "Helvetica Neue", "Helvetica", "Arial", "Hiragino Sans", "ヒラギノ角ゴシック", "Hiragino Kaku Gothic ProN", "ヒラギノ角ゴ ProN W3", Meiryo, sans-serif;
    font-size: 16px;
    line-height: 1;
    margin: 0;
    padding: 0;
    overflow: auto;
    overflow-x: auto;
    overflow-x: hidden;
  }
`
