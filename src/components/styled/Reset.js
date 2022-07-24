import { createGlobalStyle } from "styled-components";

const ResetStyle = createGlobalStyle`

    *,*::before, *::after {
        margin: 0;
        padding: 0;
        border: 0;
        box-sizing: inherit;
        font-weight: normal;
    }

    html {
        box-sizing: border-box;
    }

    img, object, embed {
        max-width: 100%;
    }

    ul {
        list-style: none;
    }

    a {
        margin: 0;
        padding: 0;
        font-size: 100%;
        vertical-align: baseline;
        background: transparent;
        color:none;
        text-decoration: none;
    }

`
export default ResetStyle;

