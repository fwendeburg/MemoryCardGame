import React, { useState } from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
    height: 150px;
    width: 150px;
    background: url(${props => props.image});
    background-size: contain;
    border: 6px solid #caaf6a;

    &:hover { 
        background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.3)), url(${props => props.image});
        background-size: contain;
        cursor: pointer;
    }
`

function Card({image, whenClicked, champion}) {
    return (
        <CardContainer image={image} onClick={whenClicked} id= {champion}/>
    );
}

export default Card;