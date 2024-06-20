import styled from "styled-components";
import { ReactComponent as Raven } from "assets/icons/raven.svg";
import { ReactComponent as WaterDrop } from "assets/icons/water-drop.svg";
import { ReactComponent as Diamond } from "assets/icons/diamond.svg";
import { ReactComponent as StrokeFull } from "assets/icons/stroke-full.svg";
import { ReactComponent as Robot } from "assets/icons/robot.svg";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 90px);
  justify-content: center;
  align-items: center;
  grid-gap: 5px;
  width: 500px;
  height: 500px;
  margin: 20px;
  padding: 15px;
  background-color: #00c8ff;
  border-radius: 10px;
  border: 5px solid #098ae0;
  font-size: 25px;
  font-weight: bold;
`;

export const Icons = () => {
  return (
    <Container>
      <Raven />
      <WaterDrop />
      <Diamond />
      <StrokeFull />
      <Robot />
    </Container>
  );
};
