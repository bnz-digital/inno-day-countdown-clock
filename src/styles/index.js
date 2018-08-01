import styledNormalize from 'styled-normalize'
import { injectGlobal } from 'styled-components'

export default () => injectGlobal`
  ${styledNormalize}

  html {
    background-color: #002F6B;
    background-image: url(./images/inno-day-bgnd.png);
    background-size: contain;
    background-repeat: no-repeat;
    color: hsla(0, 100%, 100%, 0.4);
    font-family: SerranoWeb, "Open Sans", Verdana, sans-serif;
    height: 100%;
    margin: 0;
    padding: 0;
    text-align: center;
    width: 100%;
  }

  body {
    height: 100%;
    margin: 0;
    padding: 0;
    width: 100%;
  }
`
