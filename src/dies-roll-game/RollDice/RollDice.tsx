import React, { useState } from 'react';
import Die from '../Die/Die';
import { Button, InputNumber } from 'antd';
import styled from 'styled-components';

type Diestate = { [key: string]: string };
// type state = { die: Diestate; loading: boolean };

const StyledButton = styled(Button)`
  margin-left: 20px;
`;
const intialState = { die1: 'two', die2: 'four' };
const fontFaces = ['one', 'two', 'three', 'four', 'five', 'six'];
let inputRef: InputNumber | null;
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

  const onInputChange = (val: number | undefined) => {
    if (val) {
      // eslint-disable-next-line no-sequences
      let newState = Array(val)
        .fill(null)
        .reduce(
          (acc, curr, i) => ((acc[`die${i + 1}`] = genRandFace()), acc),
          {}
        );
      console.log(newState);
      setDice(newState);
    }
  };
  return (
    <div>
      {Object.keys(dice).map((key, i) => (
        <Die key={i} face={dice[key]} animate={loading} />
      ))}
      <div>
        <InputNumber
          min={1}
          max={6}
          defaultValue={2}
          onChange={onInputChange}
          ref={input => (inputRef = input)}
          disabled={loading}
        />
        <StyledButton type="primary" onClick={rollDice} loading={loading}>
          Roll Dice
        </StyledButton>
      </div>
    </div>
  );
};
export default RollDice;
