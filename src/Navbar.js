import React from 'react';
import styled from 'styled-components';

import leagueLogo from './images/League-of-Legends-Logo.png';

const NavbarContainer = styled.div`
    width: 100%;
    height: 70px;
    background-color: blue;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #111111;

    @media (max-width: 850px) {
        height: max-content;
    }

    @media (max-width: 600px) {
        flex-direction: column;
    }
`

const NavbarTitle = styled.h1`
    font-size: 24px;
    color: rgb(255, 255, 255);

    @media (max-width: 850px) {
        margin-left: 30px;
    }

    @media (max-width: 600px) {
        margin-left: 0px;
        margin-bottom: 10px;
    }
`

const LoLLogo = styled.img.attrs(props => ({
    src: leagueLogo,
    alt: "league of legends logo"
}))`
    height: 80px;
    width: 160px;
    margin-left: 30px;

    @media (max-width: 600px) {
        margin-left: 0px;
    }
`

const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    @media (max-width: 850px) {
        flex-direction: column;
    }
`

const NavbarText = styled.p`
    font-size: 20px;
    color: rgb(255, 255, 255);
    margin-right: 50px;

    @media (max-width: 600px) {
        margin-right: 0px;
        margin-bottom: 5px;
    }
`

function Navbar({currScore, highScore, level}) {
    return (
        <NavbarContainer id="navbar">
            <Container>
                <LoLLogo />
                <NavbarTitle>Memory Game</NavbarTitle>
            </Container>
            <Container>
                <NavbarText>LEVEL {level}</NavbarText>
            </Container>
            <Container>
                <NavbarText>Score: {currScore}</NavbarText>
                <NavbarText>Best Score: {highScore}</NavbarText>
            </Container>
        </NavbarContainer>
    );
}

Navbar.defaultProps = {
    currScore: 0,
    highScore: 0
};

export default Navbar;