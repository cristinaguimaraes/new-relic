import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
    }
`;

export const Spinner = styled.div`
  opacity: 1;
  position: relative;
  transition: opacity linear 0.1s;
  animation: ${rotate} 2s ease-in-out 0s infinite;

  &::before {
    border: solid 3px #eee;
    border-bottom-color: red;
    border-radius: 50%;
    content: '';
    height: 40px;
    left: 50%;
    opacity: inherit;
    position: absolute;
    top: 50%;
    transform: translate3d(-50%, -50%, 0);
    transform-origin: center;
    width:  40px;
    will-change: transform;
  }
`;

export const Wrapper = styled.div`
padding-top: 50px;
 height: 200px;
 display: flex;
 align-items:center;
 justify-content: center
`
