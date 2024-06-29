import styled from "styled-components";
import * as FlatColorIcons from "react-icons/fc";
import { useState } from "react";

const Container = styled.div`
  display: flex;
  width: 500px;
  height: 300px;
  margin: 20px;
  padding: 15px;
  background-color: #ffb629;
  border-radius: 10px;
  border: 5px solid #ff7623;
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70px;
  height: 50px;
  font-size: 30px;
  margin: 5px;
`;

const IconsContainer = styled.div`
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5px;
  font-size: 40px;
`;

export const IconAdder = () => {
  const [icons, setIcons] = useState<string[]>([]);

  const addIcon = () => {
    setIcons([...icons, "FcBriefcase"]);
  };

  return (
    <Container>
      <Button onClick={addIcon}>
        +<FlatColorIcons.FcBriefcase />
      </Button>
      <IconsContainer>
        {icons.map((icon, index) => {
          const IconComponent =
            FlatColorIcons[icon as keyof typeof FlatColorIcons];
          return IconComponent ? <IconComponent key={index} /> : null;
        })}
      </IconsContainer>
    </Container>
  );
};
