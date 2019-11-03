import React from 'react';
import styled from 'styled-components';
const DieContiner = styled.i`
  font-size: 10rem;
  padding: 0.4rem;
  color: #0e467a;
`;

type DieProps = { face: string; animate: boolean };
const Die = ({ face, animate }: DieProps) => {
  return (
    <DieContiner
      className={`Die fas fa-dice-${face} ${animate ? 'shake' : ''}`}
    ></DieContiner>
  );
};

export default Die;
