import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    border: 0;
    font-family: "Inter";
}

a {
    text-decoration: none;
}

h1 {
    font-weight: 700;
}
h2 {
    font-weight: 600;
}
h3 {
    font-weight: 700;
}
h4 {
    font-weight: 600;
}
span {
    font-weight: 400;
}

:root {
    --pink-1: #FF577F;
    --pink-2: #FF427F;
    --pink-3: #59323F;
    --grey-4: #121214;
    --grey-3: #212529;
    --grey-2: #343B41;
    --grey-1: #868E96;
    --grey-0: #F8F9FA;
}
`;
export default GlobalStyle;
