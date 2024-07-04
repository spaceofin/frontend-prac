import styled from "styled-components";
import * as FlatColorIcons from "react-icons/fc";
import { useState, ChangeEvent } from "react";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
  height: 400px;
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
  height: 30px;
  border-radius: 5px;
  border: 2px solid gray;
  background-color: white;
  font-size: 20px;
  padding-left: 15px;
  margin: 3px 5px 2px 5px;
`;

const GuildText = styled.p`
  font-size: 20px;
  font-weight: 600;
  margin: 10px 0px 2px 10px;
`;

const DeleteButton = styled.button`
  width: 100px;
  height: 30px;
  font-size: 20px;
  margin: 3px 5px 2px 5px;
`;

const InitialIconList = ["FcBriefcase", "FcCloseUpMode", "FcGlobe"];

const IconSet = Object.fromEntries(InitialIconList.map((icon) => [icon, 0]));

export const IconAdder = () => {
  const [iconList, setIconList] = useState<{ [key: string]: number }>(IconSet);
  const [selectedIcon, setSelectedIcon] = useState<string>("FcAbout");
  const [iconToDelete, setIconToDelete] = useState<string>("");

  const addIcon = (icon: string) => {
    if (!(icon in iconList)) {
      setIconList((prevState) => ({
        ...prevState,
        [icon]: 0,
      }));
    }

    if (iconList[icon] === 10) return;

    setIconList((prevIcons) => ({
      ...prevIcons,
      [icon]: prevIcons[icon] + 1,
    }));
  };

  const deleteIcon = (icon: string) => {
    console.log(icon);
    if (iconList[icon] === 0) return;

    setIconList((prevIcons) => ({
      ...prevIcons,
      [icon]: prevIcons[icon] - 1,
    }));

    setIconToDelete("");
  };

  const iconOptions = Object.keys(FlatColorIcons);

  console.log(iconList);

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedIcon(e.target.value);
  };

  const handleDeleteIconChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setIconToDelete(e.target.value);
  };

  const SelectedIconComponent =
    FlatColorIcons[selectedIcon as keyof typeof FlatColorIcons];

  console.log(
    "asdf:",
    Object.keys(iconList).filter((icon) => iconList[icon] > 1)
  );
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
              {Array.from({ length: iconList[icon] }, (_, index) => (
                <IconComponent
                  key={index}
                  as={FlatColorIcons[icon as keyof typeof FlatColorIcons]}
                />
              ))}
            </IconsContainer>
          </IconBuilder>
        );
      })}
      <GuildText>Select Icon!</GuildText>
      <IconSelectorContainer>
        <StyledSelect
          id="iconSelect"
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
            {Array.from({ length: iconList[selectedIcon] }, (_, index) => (
              <IconComponent
                key={index}
                as={FlatColorIcons[selectedIcon as keyof typeof FlatColorIcons]}
              />
            ))}
          </IconsContainer>
        </IconBuilder>
      </IconSelectorContainer>
      <GuildText>Delete Icon!</GuildText>
      <IconSelectorContainer>
        <StyledSelect
          id="iconSelect"
          value={iconToDelete}
          onChange={handleDeleteIconChange}
        >
          <option> </option>
          {Object.keys(iconList)
            .filter((icon) => iconList[icon] > 0)
            .map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
        </StyledSelect>
        <DeleteButton onClick={() => deleteIcon(iconToDelete)}>
          Delete
        </DeleteButton>
      </IconSelectorContainer>
    </Container>
  );
};
