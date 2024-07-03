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
  border-radius: 3px;
  border: 1px solid;
`;

const IconsContainer = styled.div`
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

const InitialIconList = ["FcBriefcase", "FcCloseUpMode", "FcGlobe"];

const IconSet = Object.fromEntries(InitialIconList.map((icon) => [icon, []]));

export const IconAdder = () => {
  const [iconList, setIconList] = useState<{ [key: string]: string[] }>(
    IconSet
  );

  const addIcon = (icon: string) => {
    setIconList((prevIcons) => ({
      ...prevIcons,
      [icon]: [...prevIcons[icon], icon],
    }));
  };

  console.log(FlatColorIcons);
  console.log(typeof FlatColorIcons);
  console.log(Object.keys(FlatColorIcons));

  console.log(FlatColorIcons.FcAbout);
  console.log(FlatColorIcons["FcAbout"]);
  console.log(typeof FlatColorIcons.FcAbout);

  return (
    <Container>
      {InitialIconList.map((icon, index) => {
        const IconButtonComponent =
          FlatColorIcons[icon as keyof typeof FlatColorIcons];
        return (
          <IconBuilder key={index}>
            <Button onClick={() => addIcon(icon)}>
              +<IconButtonComponent />
            </Button>
            <IconsContainer>
              {iconList[icon].map((elem, index) => {
                const Icon =
                  FlatColorIcons[elem as keyof typeof FlatColorIcons];
                return <IconComponent key={index} as={Icon} />;
              })}
            </IconsContainer>
          </IconBuilder>
        );
      })}
    </Container>
  );
};
