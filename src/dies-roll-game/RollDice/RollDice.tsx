import React, { useState } from 'react';
import Die from '../Die/Die';

type state = { [key: string]: string };
const fontFaces = ['one', 'two', 'three', 'four', 'five', 'six'];
const genRandFace = () =>
  fontFaces[Math.floor(Math.random() * fontFaces.length)];

const RollDice = () => {
  const intialState = { die1: 'two', die2: 'four' };
  const [dice, setDice] = useState<state>(intialState);

  const rollDice = () => {
    let newState: typeof dice = {};
    Object.keys(dice).forEach(key => (newState[key] = genRandFace()));
    setDice(newState);
  };
  return (
    <div>
      {Object.keys(dice).map((key, i) => (
        <Die key={i} face={dice[key]} />
      ))}

      <button onClick={rollDice}>roll dice</button>
    </div>
  );
};
export default RollDice;
