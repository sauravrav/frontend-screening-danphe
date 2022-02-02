import styled from "styled-components";
import Navigator from "../components/navigator";
const Problem1 = () => {
  return (
    <>
      <Navigator />
      <ProblemOne>
        <Rectangle>
          <Circle>
            <svg width="40" height="69" viewBox="0 0 40 69" fill="none">
              <circle cx="20" cy="20" r="20" fill="#ffffff" />
              <path d="M20 69L37.3205 39H2.67949L20 69Z" fill="#ffffff" />
            </svg>
          </Circle>
        </Rectangle>
      </ProblemOne>
    </>
  );
};
const ProblemOne = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: grey;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Rectangle = styled.div`
  height: 300px;
  width: 500px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Circle = styled.div`
  height: 100px;
  width: 100px;
  background-color: red;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  position: relative;
  svg {
    position: absolute;
    bottom: 0;
  }
`;

export default Problem1;
