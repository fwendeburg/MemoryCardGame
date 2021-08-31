import styled from "styled-components";

import loadingSVG from './images/loading.svg';

const LoaderContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 5px;
`

const LoaderText = styled.p`
    font-size: 30px;
    color: #000000;
`

function Loader() {
    return (
        <LoaderContainer>
            <LoaderText>Loading</LoaderText>
            <img src={loadingSVG} alt="loading spinner"/>
        </LoaderContainer>
    );
}

export default Loader;