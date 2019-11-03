import React, { useState } from 'react';
import Die from '../Die/Die';
import styled from 'styled-components';
import { Button } from 'antd';

const Buttons = styled.div`
  align-content: center;
`;

type Diestate = { [key: string]: string };
type state = { die: Diestate; loading: boolean };
const intialState = { die: { die1: 'two', die2: 'four' }, loading: false };
const fontFaces = ['one', 'two', 'three', 'four', 'five', 'six'];
const genRandFace = () =>
  fontFaces[Math.floor(Math.random() * fontFaces.length)];

const RollDice = () => {
  const [dice, setDice] = useState<state>(intialState);

  const rollDice = () => {
    let newState: typeof dice = { die: {}, loading: false };
    setDice({ ...dice, loading: true });
    Object.keys(dice.die).forEach(key => (newState.die[key] = genRandFace()));
    setTimeout(() => {
      setDice(newState as state);
    }, 800);
  };
  return (
    <div>
      {Object.keys(dice.die).map((key, i) => (
        <Die key={i} face={dice.die[key]} animate={dice.loading} />
      ))}
      <Buttons>
        <Button type="primary" onClick={rollDice} loading={dice.loading}>
          roll dice
        </Button>
      </Buttons>
    </div>
  );
};
export default RollDice;
