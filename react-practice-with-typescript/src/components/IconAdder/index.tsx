import styled from "styled-components";
import * as FlatColorIcons from "react-icons/fc";
import { useState } from "react";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
  height: 300px;
  margin: 20px;
  padding: 15px;
  background-color: #ffb629;
  border-radius: 10px;
  border: 5px solid #ff7623;
`;

const IconBuilder = styled.div`
  display: flex;
  // gap: 5px;
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 70px;
  height: 50px;
  font-size: 30px;
  margin: 5px;
`;

const IconsContainer = styled.div`
wie
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5px;
  font-size: 40px;
  overflow: hidden;
`;

const IconComponent = styled.div`
  flex-shrink: 0;
`;

export const IconAdder = () => {
  const [icons, setIcons] = useState<string[]>([]);

  const addIcon = (icon: string) => {
    setIcons([...icons, icon]);
  };

  return (
    <Container>
      <IconBuilder>
        <Button onClick={() => addIcon("FcBriefcase")}>
          +<FlatColorIcons.FcBriefcase />
        </Button>
        <IconsContainer>
          {icons.map((icon, index) => {
            const Icon = FlatColorIcons[icon as keyof typeof FlatColorIcons];
            return <IconComponent key={index} as={Icon} />;
          })}
        </IconsContainer>
      </IconBuilder>
      <IconBuilder>
        <Button onClick={() => addIcon("FcCloseUpMode")}>
          +<FlatColorIcons.FcCloseUpMode />
        </Button>
      </IconBuilder>
      <IconBuilder>
        <Button onClick={() => addIcon("FcGlobe")}>
          +<FlatColorIcons.FcGlobe />
        </Button>
      </IconBuilder>
    </Container>
  );
};
