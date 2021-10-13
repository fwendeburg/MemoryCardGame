import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import Card from './Card';

import {shuffleArray} from './Utils';

const CardContainer = styled.div`
    margin-top: 30px;
    margin-bottom: 30px;
    padding-left: 50px;
    padding-right: 50px;
    max-width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    justify-items: center;
    align-content: center;
    gap: 30px;
`

function Main({champions, handleCardCLick}) {
    const [cards, setCards] = useState([]);

    function getChampionImage(champion) {
        return `https://ddragon.leagueoflegends.com/cdn/img/champion/tiles/${champion}_0.jpg`;
    }

    useEffect(() => {
        shuffleArray(cards);
    });

    useEffect(() => {   
        let newCards = [];
        let counter = 0;

        champions.forEach(obj => {
            newCards.push(<Card image={getChampionImage(obj.champion)} key={counter} whenClicked={handleCardCLick} champion={obj.champion}/>);
            counter++;
        });

        shuffleArray(newCards);
        setCards(newCards)
    }, [champions])

    return (
        <CardContainer>
            {cards.map(card => {return card})}
        </CardContainer>
    );
}

export default Main;