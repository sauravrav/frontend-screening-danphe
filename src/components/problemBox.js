import styled from "styled-components";
import { Link } from "react-router-dom";

export const ProblemBox = ({ num }) => {
  return (
    <Box>
      <Link to={`/problem${num}`}>Problem {num}</Link>
    </Box>
  );
};

const Box = styled.div`
  height: 80px;
  width: 320px;
  border: 2px solid black;
  margin: 20px;
  text-align: center;
  text-justify: center;
  line-height: 80px;
  font-size: 32px;
  cursor: pointer;
  color: white;
  background-color: hotpink;
  :hover {
    font-size: 36px;
  }
`;
