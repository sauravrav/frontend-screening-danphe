import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { problemdata } from "../pages/list";
const Navigator = () => {
  const [down, setDown] = useState(true);
  const drawNavigator = () => {
    setDown(!down);
  };
  return (
    <Navside>
      <NavOpen down={down} onClick={drawNavigator}>
        Navigator Open
      </NavOpen>
      <Navigation down={down}>
        <NavClose down={down} onClick={drawNavigator}>
          Navigator close
        </NavClose>
        {problemdata.map((data) => (
          <Link to={`/problem${data}`}>
            <button
              style={{
                display: "block",
                margin: "20px",
                padding: "20px",
                fontSize: "40px",
                cursor: "pointer",
              }}
            >
              Problem {data}
            </button>
          </Link>
        ))}
      </Navigation>
    </Navside>
  );
};
const Navside = styled.div`
  position: absolute;
`;
const Navigation = styled.div`
  height: 100vh;
  width: 300px;
  background-color: #000000;
  transform: ${(props) =>
    props.down ? "translateX(-300px)" : "translateX(0px)"};
`;
const NavOpen = styled.button`
  display: ${(props) => (props.down ? "block" : "none")};
`;
const NavClose = styled.button`
  display: ${(props) => (props.down ? "none" : "block")};
`;
export default Navigator;
