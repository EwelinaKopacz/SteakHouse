import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

    :root{
        --site-witdh-max:1920px;
        --site--witdh-min:320px
    }
    html {
        font-family: 'Sofia Pro',Sans-Serif;
        font-size: 62.5%;
        scroll-behavior: smooth;
        overflow-y: scroll;

        /* font sizes */
        --header1:clamp(1.6rem, 0.6769rem + 4.1026vw, 5.6rem);
        --header2:clamp(1.4rem, 1.1615rem + 1.9487vw, 3.5rem);
        --nav--link:clamp(1rem, 0.9200rem + 0.2500vw, 1.4rem);
        --discount--text:clamp(1.4rem, 1.5077rem + 0.4103vw, 2rem);
        --discount--btn:clamp(1.2rem, 1.1446rem + 0.2462vw, 1.44rem);

        /* font colors */
        --nav-color:#000000;
        --nav-order-color:#FFFFFF;
        --discount-color:#FFFFFF;
        --advert-text-color:#FFFFFF;

        /* background colors */
        --primary-bg: #FFFFFF;
        --secondary-bg:#920303;
        --third-bg:#000000;
    }

    body {
        font-size: 1.6rem;
    }

    button{
        cursor:pointer;
    }

`

export default GlobalStyle;