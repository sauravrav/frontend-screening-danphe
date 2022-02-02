import { useState } from "react";
import styled from "styled-components";
import Navigator from "../components/navigator";
const Problem5 = () => {
  const [turn, setTurn] = useState(false);
  const clickbutton = () => {
    setTurn(!turn);
  };
  return (
    <>
      <Navigator />
      <Background>
        <button onClick={clickbutton}>
          Click here {turn ? "to Stop" : "to Start"}
        </button>
        <Rectangle>
          <svg width="800" height="600" viewBox="0 0 802 602" fill="none">
            <path
              d="M801 301.289L399.873 601L1 301.289L399.873 1L801 301.289Z"
              stroke="#ffffff"
            />
          </svg>
          <Square turn={turn}></Square>
        </Rectangle>
      </Background>
    </>
  );
};
const Background = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Rectangle = styled.div`
  height: 600px;
  width: 800px;
  border: 1px solid red;
  position: relative;
  svg {
    position: absolute;
  }
`;
const Square = styled.div`
  height: 60px;
  width: 60px;
  background-color: green;
  position: absolute;
  top: 0;
  animation: ${(props) => (props.turn ? "anim 4s infinite reverse" : "none")};
  offset-path: path(
    "M800 301.289L399.873 601L1 301.289L399.873 1L801 301.289Z"
  );
  @keyframes anim {
    0% {
      offset-distance: 0%;
    }
    100% {
      offset-distance: 100%;
    }
  }
`;

export default Problem5;
