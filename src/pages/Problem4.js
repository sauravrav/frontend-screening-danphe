import { useEffect } from "react";
import styled from "styled-components";
import Navigator from "../components/navigator";
const Problem4 = () => {
  return (
    <>
      <Navigator />
      <PlayBox>
        <div>
          <div></div>
        </div>
      </PlayBox>
    </>
  );
};
const PlayBox = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: aliceblue;
  display: flex;
  justify-content: center;
  align-items: center;
  div {
    height: 80vh;
    width: 90vw;
    border-bottom: 2px solid black;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    div {
      height: 50px;
      width: 50px;
      background-color: red;
      border-radius: 50%;
      border: none;
      animation: anim 2s infinite;
    }
  }
  @keyframes anim {
    10% {
      height: 60px;
      width: 50px;
    }
    30% {
      height: 60px;
      width: 50px;
    }
    65% {
      transform: translateY(-400px);
    }
    100% {
      transform: translateY(0px);
      height: 50px;
      width: 60px;
    }
  }
`;
export default Problem4;
