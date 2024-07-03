import styled from "styled-components";
import * as FlatColorIcons from "react-icons/fc";
import { useState, ChangeEvent } from "react";

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
  gap: 0px;
`;

const IconSelectorContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const IconBuilder = styled.div`
  display: flex;
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 70px;
  height: 50px;
  font-size: 30px;
  margin: 2px 5px;
  border-radius: 3px;
  border: 1px solid;
`;

const IconsContainer = styled.div`
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

const StyledSelect = styled.select`
  width: 150px;
  height: 25px;
  border-radius: 5px;
  border: 2px solid gray;
  background-color: white;
  font-size: 16px;
  padding-left: 15px;
  margin: 3px 5px 2px 5px;
`;

const GuildText = styled.p`
  font-size: 20px;
  font-weight: 600;
  margin: 10px 0px 2px 10px;
`;

const InitialIconList = ["FcBriefcase", "FcCloseUpMode", "FcGlobe"];

const IconSet = Object.fromEntries(InitialIconList.map((icon) => [icon, []]));

export const IconAdder = () => {
  const [iconList, setIconList] = useState<{ [key: string]: boolean[] }>(
    IconSet
  );
  const [selectedIcon, setSelectedIcon] = useState<string>("FcAbout");

  const addIcon = (icon: string) => {
    if (!(icon in iconList)) {
      setIconList((prevState) => ({
        ...prevState,
        [icon]: [],
      }));
    }
    setIconList((prevIcons) => ({
      ...prevIcons,
      [icon]: [...prevIcons[icon], true],
    }));
  };

  const iconOptions = Object.keys(FlatColorIcons);

  console.log(iconList);

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedIcon(e.target.value);
  };

  const SelectedIconComponent =
    FlatColorIcons[selectedIcon as keyof typeof FlatColorIcons];

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
              {iconList[icon].map((_, index) => {
                const Icon =
                  FlatColorIcons[icon as keyof typeof FlatColorIcons];
                return <IconComponent key={index} as={Icon} />;
              })}
            </IconsContainer>
          </IconBuilder>
        );
      })}
      <GuildText>Select Icon!</GuildText>
      <IconSelectorContainer>
        <StyledSelect
          id="colorSelect"
          value={selectedIcon}
          onChange={handleChange}
        >
          {iconOptions.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </StyledSelect>
        <IconBuilder>
          <Button onClick={() => addIcon(selectedIcon)}>
            +{<SelectedIconComponent />}
          </Button>
          <IconsContainer>
            {iconList[selectedIcon] &&
              iconList[selectedIcon].map((_, index) => {
                const Icon =
                  FlatColorIcons[selectedIcon as keyof typeof FlatColorIcons];
                return <IconComponent key={index} as={Icon} />;
              })}
          </IconsContainer>
        </IconBuilder>
      </IconSelectorContainer>
    </Container>
  );
};
