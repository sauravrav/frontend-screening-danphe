import styled from "styled-components";
import { ProblemBox } from "../components/problemBox";
import Navigator from "../components/navigator";
export const problemdata = [1, 2, 3, 4, 5];

function List() {
  return (
    <>
      <Navigator />
      <Dapp>
        <div>
          {problemdata.map((data) => (
            <ProblemBox num={data} key={data} />
          ))}
        </div>
      </Dapp>
    </>
  );
}

const Dapp = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: aqua;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default List;
