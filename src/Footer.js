import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.div`
    width: 100%;
    background-color: #111111;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const FooterText = styled.p`
    font-size: 16px;
    color: white;
    text-align: center;
`

const FooterLink = styled.a`
    &:visited {
        color: white;
    }
`

function Footer() {
    return (
        <FooterContainer id="footer">
            <FooterText>Made by <FooterLink href="https://github.com/fwendeburg">Francisco Wendeburg</FooterLink></FooterText>
            <FooterText>This web site is not affiliated in any way with with Riot Games. This is just a personal project.</FooterText>
        </FooterContainer>
    );
}

export default Footer;