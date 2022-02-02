import styled from "styled-components";
import Navigator from "../components/navigator";
const Problem2 = () => {
  const colors = [
    "#f2a5a3",
    "#89e0cd",
    "#c058cb",
    "#5844e2",
    "#70356f",
    "#622926",
    "#282974",
    "#141b49",
    "#1a3413",
    "#2c1e1d",
    "#0c170c",
    "#000000",
  ];
  return (
    <>
      <Navigator />
      <GridBox>
        {colors.map((data) => (
          <div>
            <div style={{ backgroundColor: data }}></div>
          </div>
        ))}
      </GridBox>
    </>
  );
};
const GridBox = styled.div`
  background-color: white;
  height: fit-content;
  width: 100%;
  display: grid;
  justify-items: center;
  align-items: center;
  justify-content: center;
  align-content: center;
  grid-gap: 0px;
  overflow-x: hidden;

  div {
    height: 33.33vh;
    width: 320px;
    border: 2px solid #999999;
    display: flex;
    justify-content: center;
    align-items: center;
    div {
      height: 80%;
      width: 90%;
      border: none;
    }
  }
  @media only screen and (min-width: 1280px) {
    grid-template-columns: repeat(4, 320px);
    & :nth-child(-n + 4) {
      border-top: none;
    }
    & :nth-child(4n + 1) {
      border-left: none;
    }
    & :nth-child(4n + 4) {
      border-right: none;
    }
  }
  @media only screen and (max-width: 1279px) {
    grid-template-columns: repeat(3, 320px);
    & :nth-child(-n + 3) {
      border-top: none;
    }
    & :nth-child(3n + 1) {
      border-left: none;
    }
    & :nth-child(3n + 3) {
      border-right: none;
    }
    & :nth-child(n + 10) {
      border-bottom: none;
    }
  }

  @media only screen and (max-width: 1050px) {
    grid-template-columns: repeat(2, 320px);
    & :nth-child(odd) {
      border: 2px solid #999999;
    }
    & :nth-child(even) {
      border: 2px solid #999999;
    }
    & :nth-child(2n + 1) {
      border-top: none;
      border-left: none;
    }
    & :nth-child(2n + 2) {
      border-top: none;
      border-right: none;
      border-left: none;
    }
    & :nth-child(n + 11) {
      border-bottom: none;
    }
  }
  @media only screen and (max-width: 696px) {
    grid-template-columns: repeat(1, 320px);
    & :nth-child(odd) {
      border: 2px solid #999999;
    }
    & :nth-child(even) {
      border: 2px solid #999999;
    }
    & :nth-child(odd) {
      border-left: none;
      border-right: none;
    }
    & :nth-child(even) {
      border-left: none;
      border-right: none;
    }
    & :nth-child(1) {
      border-top: none;
    }
    & :nth-child(12) {
      border-bottom: none;
    }
  }
`;
export default Problem2;
