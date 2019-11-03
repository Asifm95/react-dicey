import React from 'react';
import styled, { keyframes, css } from 'styled-components';
const DieContiner = styled.i`
  font-size: 10rem;
  padding: 0.4rem;
  color: #0e467a;
`;

const shake = keyframes`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(-10px, 0, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(10px, 0, 0);
  }
`;

const shakeAnimate = css`
  animation: ${shake} 0.8s linear;
`;
const noAnimate = css`
  animation: '';
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
