import styled from "styled-components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";

const Container = styled.div`
  display: flex;
  margin: 20px;
  margin-top: 60px;
`;

const ContentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 630px;
  min-height: 840px;
  padding: 20px;
  border: 5px solid #ff7a31;
  background-color: #ffbf7b;
  border-radius: 10px;
  margin: 10px;
`;

const StyledForm = styled.form`
  display: flex;
  flex-frow: 1;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  flex-direction: column;
  align-items: center;
`;

const StyledInput = styled.input`
  font-size: 20px;
  height: 35px;
  width: 300px;
  padding: 5px 10px;
  margin: 2px;
  border: none;
  border-radius: 5px;
  box-sizing: border-box;
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin: 5px;
`;

const StyledButton = styled.button`
  font-size: 20px;
  padding: 10px;
  margin: 2px;
  border: none;
  background-color: ${(props) => props.color};
  border-radius: 10px;
  width: 300px;
  box-sizing: border-box;
`;

export const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const url = process.env.REACT_APP_RANDOM_USERS_API_URL;
  const userListRef = useRef(null);

  const onChange = (event) => {
    const { name, value } = event.target;
    if (name === "username") setUserName(value);
    else if (name === "password") setPassword(value);
  };

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((users) => {
        userListRef.current = users.data;
        console.log(userListRef.current);
      })
      .catch((error) => {
        console.log("error: ", error);
      });
  }, [url]);

  const handleLogin = () => {
    const isUser = userListRef.current.find(
      (user) => user.username === userName && user.password === password
    );

    if (isUser) {
      alert("Welcome!");
      navigate("/gallery");
    } else {
      alert("Invalid userName or Password...");
      setUserName("");
      setPassword("");
    }
  };

  return (
    <Container>
      <ContentsContainer>
        <StyledForm>
          <StyledInput
            name="username"
            type="text"
            placeholder="UserName"
            value={userName}
            onChange={onChange}
            required
          />
          <StyledInput
            name="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={onChange}
            required
          />
          <ButtonGroup>
            <StyledButton color="tomato" type="submit" onClick={handleLogin}>
              Sign In
            </StyledButton>
          </ButtonGroup>
        </StyledForm>
      </ContentsContainer>
    </Container>
  );
};
