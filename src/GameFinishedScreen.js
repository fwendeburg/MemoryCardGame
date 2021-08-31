import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: rgb(40 44 52);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const BoldText = styled.p`
    font-size: 40px;
    font-weight: 700;
    color: white;
`

const Text = styled.p`
    margin-top: 10px;
    font-size: 30px;
    color: white;
`

const Button = styled.button`
    margin-top: 30px;
    border: none;
    background-color: rgb(62, 68, 81);
    color: white;
    border-radius: 5px;
    height: 50px;
    width: 150px;
    font-size: 20px;
    cursor: pointer;

    &:hover {
        background-color: #4F5665;
    }
`

function GameFinishedScreen({score, handleNewGame}) {
    return (
        <Wrapper>
            <BoldText>GAME OVER</BoldText>
            <Text>Your score is {score}</Text>
            <Button onClick={handleNewGame}>New Game</Button>
        </Wrapper>
    );
}

export default GameFinishedScreen;