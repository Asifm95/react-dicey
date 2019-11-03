import React from 'react';
import './Die.css';
type DieProps = { face: string };
const Die = ({ face }: DieProps) => (
  <i className={`Die fas fa-dice-${face}`}></i>
);

export default Die;
