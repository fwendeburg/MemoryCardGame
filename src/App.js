import React, { useEffect } from "react";
import useState from 'react-usestateref';

import Navbar from "./Navbar";
import Footer from "./Footer";
import Loader from './Loader';
import Main from './Main';
import GameFinishedScreen from "./GameFinishedScreen";

function App() {
  const MAXNUMGENERATED = 5;
  const [loading, setLoading] = useState(false);
  const [score, setScore, scoreRef] = useState(0);
  const [highScore, setHS, HSRef] = useState(0);
  const [unusedChampions, setUnusedChampions] = useState([]);
  const [usedChampions, setUsedChampions] = useState([]);
  const [lvl, setLvl] = useState(1);
  const [gameFinished, setGameFinished] = useState(false);

  async function getChampionList() {
    let response = await fetch('https://ddragon.leagueoflegends.com/cdn/11.16.1/data/en_US/champion.json');
    let respJSON = await response.json();

    setUnusedChampions(Object.keys(respJSON['data']));
  }

  function isNumberInArray(numArray, num) {
    for (let i = 0; i < numArray.length; i++) {
      if (numArray[i] === num) {
        return true;
      }
    }

    return false;
  }

  function getRandomNumbers() {
    let numbers = [];
    let number;

    while(numbers.length < MAXNUMGENERATED) {

      number = Math.floor(Math.random()*unusedChampions.length);

      if (!isNumberInArray(numbers, number) && !isChampionUsed(unusedChampions[number])) {
        numbers.push(number);
      }
    }
    
    return numbers;
  }

  function addUsedChampions(indexes) {
    let newUsedChamps = [];

    indexes.forEach(index => {
      newUsedChamps.push({champion: unusedChampions[index], clicked: false});
    });

    setUsedChampions([...usedChampions, ...newUsedChamps]);
  }

  function getChampionObj(champion) {
    for (let i = 0; i < usedChampions.length; i++) {
      if (usedChampions[i].champion === champion) {
        return usedChampions[i];
      }
    }
  }

  function handleGetNewChampions() {
    let indexes = getRandomNumbers();

    addUsedChampions(indexes);
  }
  
  function isWinningClick(champion) {
    for (let i = 0; i < usedChampions.length; i++) {
      if(!usedChampions[i].clicked && usedChampions[i].champion !== champion) {
        return false;
      }
    }

    return true;
  }

  function isChampionUsed(champion) {
    for (let i = 0; i < usedChampions.length; i++) {
      if (usedChampions[i].champion === champion) return true;
    }

    return false;
  }

  function levelUp() {
    setLvl(lvl+1);

    handleGetNewChampions();
  }

  async function handleNewGame() {
    await setUsedChampions([]);
    handleScoreBoard(true);
    setGameFinished(false);
    setLvl(1);
    handleGetNewChampions();
  }

  function handleCardCLick(e) {
    let clickedChamp = getChampionObj(e.target.id);

    if(!clickedChamp.clicked) {
      handleScoreBoard();

      if (isWinningClick(clickedChamp.champion)) {
        clickedChamp.clicked = true;
        levelUp();
      }
      else {
        clickedChamp.clicked = true;
      }
    }
    else {
      setGameFinished(true);
    }
  }

  function handleScoreBoard(isGameFinished=false) {
    if (isGameFinished) {
      setScore(0);
    }
    else {
      setScore((prevScore) => prevScore+1);
    }

    if (scoreRef.current > HSRef.current) {
      setHS(scoreRef.current);
    }
  }

  useEffect(() => {
    (async () => {
      setLoading(true);
      await getChampionList();
      setLoading(false);
    })()
  }, []);

  useEffect(() => {
    // Add initial set of champions.
    if (lvl === 1 && unusedChampions.length !== 0) {
      handleGetNewChampions();
    }
  }, [unusedChampions, lvl])

  return (
    <>
      {gameFinished? <GameFinishedScreen handleNewGame={handleNewGame} score={score} /> : <><Navbar currScore={score} highScore={highScore} level={lvl}/>{loading? <Loader /> : <Main champions={usedChampions} handleCardCLick={handleCardCLick}/>}<Footer /></>}
    </>
  );
}

export default App;
