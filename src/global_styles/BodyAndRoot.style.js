import { createGlobalStyle } from 'styled-components';

export const BodyAndRootStyles = createGlobalStyle`
    body {
        background-color: rgb(204, 204, 204);
        font-family: 'Lato', sans-serif;
    }

    #root {
        width: 100%;
        height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
    }
`