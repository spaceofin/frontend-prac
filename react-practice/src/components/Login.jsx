import styled from "styled-components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { users } from "data/userData";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;
`;

const Spacer = styled.div`
  height: 40px;
`;

const ContentsWrapper = styled.div`
  display: flex;
  justify-contents: center;
`;

const ContentsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
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

const SubmitButton = styled.button`
  font-size: 20px;
  padding: 10px;
  margin: 10px;
  border: none;
  background-color: tomato;
  border-radius: 10px;
  width: 300px;
  box-sizing: border-box;
`;

export const Login = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const onChange = (event) => {
    const { name, value } = event.target;
    if (name === "id") setId(value);
    else if (name === "password") setPassword(value);
  };

  const handleLogin = () => {
    const user = users.find(
      (user) => user.id === id && user.password === password
    );
    if (user) {
      alert("Welcome!");
      navigate("/gallery");
    } else {
      alert("Invalid Id or Password...");
      setId("");
      setPassword("");
    }
  };

  return (
    <Container>
      <Spacer />
      <ContentsWrapper>
        <ContentsContainer>
          <StyledForm autocomplete="off">
            <StyledInput
              name="id"
              type="text"
              placeholder="Id"
              value={id}
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
            <SubmitButton type="submit" onClick={handleLogin}>
              Log In
            </SubmitButton>
          </StyledForm>
        </ContentsContainer>
      </ContentsWrapper>
    </Container>
  );
};
