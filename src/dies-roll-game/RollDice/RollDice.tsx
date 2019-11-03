import React, { useState } from 'react';
import Die from '../Die/Die';
import { Button } from 'antd';

type Diestate = { [key: string]: string };
// type state = { die: Diestate; loading: boolean };
const intialState = { die1: 'two', die2: 'four' };
const fontFaces = ['one', 'two', 'three', 'four', 'five', 'six'];
const genRandFace = () =>
  fontFaces[Math.floor(Math.random() * fontFaces.length)];

const RollDice = () => {
  const [dice, setDice] = useState<Diestate>(intialState);
  const [loading, setLoading] = useState(false);

  const rollDice = () => {
    let newState: typeof dice = {};
    setLoading(true);
    Object.keys(dice).forEach(key => (newState[key] = genRandFace()));
    setDice(newState);
    setTimeout(() => {
      setLoading(false);
    }, 800);
  };
  return (
    <div>
      {Object.keys(dice).map((key, i) => (
        <Die key={i} face={dice[key]} animate={loading} />
      ))}
      <div>
        <Button type="primary" onClick={rollDice} loading={loading}>
          Roll Dice
        </Button>
      </div>
    </div>
  );
};
export default RollDice;
