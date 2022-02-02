import styled from "styled-components";
import Navigator from "../components/navigator";
const Box = ({ num, color }) => {
  return (
    <ColorBox style={{ backgroundColor: color }}>
      <Lorem>
        {num}&ensp;Lorem ipsum dolor sit amet consectetur, adipisicing elit.
      </Lorem>
    </ColorBox>
  );
};
const ColorBox = styled.div`
  padding: 15px;
  font-size: 20px;
`;
const Lorem = styled.span`
  padding-left: 10px;
`;
const Problem3 = () => {
  const items = [];
  for (let i = 1; i <= 16; i++) {
    if (i % 2 != 0) {
      items.push(<Box num={i} color={"red"} />);
    } else if (i % 4 == 0) {
      items.push(<Box num={i} color={"green"} />);
    } else {
      items.push(<Box num={i} color={"white"} />);
    }
  }
  return (
    <>
      <Navigator />
      <div>{items}</div>
    </>
  );
};

export default Problem3;
