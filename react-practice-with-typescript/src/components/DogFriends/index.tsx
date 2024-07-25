import styled from "styled-components";
import {
  useState,
  ChangeEvent,
  ChangeEventHandler,
  MouseEvent,
  MouseEventHandler,
} from "react";
import { useProfiles } from "contexts/ProfilesContext";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 500px;
  height: 400px;
  margin: 20px;
  margin-bottom: 5px;
  padding: 15px;
  border-radius: 10px;
  border: 5px solid #666666;
  font-size: 25px;
  font-weight: bold;
`;
const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2px;
  margin: 20px;
  padding: 20px;
  padding-bottom: 15px;
  background-color: #4ee65f;
  border-radius: 10px;
  font-size: 20px;
  font-weight: normal;
`;

const StyledInput = styled.input`
  border-radius: 5px;
  width: 170px;
`;

const InputWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0px 25px;
  width: 300px;
`;

const LoginButton = styled.button`
  margin: 7px 25px;
  height: 25px;
  border-radius: 5px;
  background-color: white;

  &:active {
    background-color: lightgray;
    box-shadow: inset 3px 3px 0px rgba(127, 127, 127, 0.4);
  }
`;

type LoginProps = {
  handleChange: ChangeEventHandler<HTMLInputElement>;
  handleClick: MouseEventHandler<HTMLButtonElement>;
};

const Login = ({ handleChange, handleClick }: LoginProps) => {
  return (
    <LoginForm>
      <InputWrapper>
        <label>Name:</label>
        <StyledInput type="text" name="name" onChange={handleChange} />
      </InputWrapper>
      <InputWrapper>
        <label>Password:</label>
        <StyledInput type="text" name="password" onChange={handleChange} />
      </InputWrapper>
      <LoginButton onClick={handleClick}>LOGIN</LoginButton>
    </LoginForm>
  );
};

export const DogFriends = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const { profiles } = useProfiles();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const {
      target: { name, value },
    } = event;

    if (name === "name") {
      setName(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (
      profiles.some(
        (profile) => profile.name === name && profile.password === password
      )
    ) {
      alert("Login succeeded");
    } else {
      alert("Login failed");
    }
    console.log("name:", name, "password:", password);
  };

  return (
    <Container>
      Log in with the Dog Profile you created
      <Login handleChange={handleChange} handleClick={handleClick} />
    </Container>
  );
};
