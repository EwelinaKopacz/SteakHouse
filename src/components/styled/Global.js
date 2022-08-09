import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

    html {
        height:100%;
        font-size: 62.5%;
        --site-witdh-max:1920px;
        --site--witdh-min:320px;
        --clr-primary:#920303;
        --clr-light:#FFFFFF;
        --clr-dark:#000000;
        --clr-background:#E5E5E5;
        --fw-light:300;
        --fw-normal:400;
        --fw-bold:700;
        --fs-small:1.4rem;
        --fs-medium:2rem;
        --fs-big: 5.6rem;

        font-family: 'Sofia Pro',sans-serif;
        scroll-behavior: smooth;
        overflow-y: scroll;
    }

    body {
        min-height: 100%;
        font-size: 1.6rem;
        color:var(--clr-dark);
    }

    button {
        cursor:pointer;
    }

`

export default GlobalStyle;