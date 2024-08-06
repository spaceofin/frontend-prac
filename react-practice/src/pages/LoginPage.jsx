import styled from "styled-components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";
import { useAuth } from "contexts/AuthContext";

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

const UserListContainer = styled.div`
  margin: 30px;
  font-size: 24px;
`;

const StyledTable = styled.table`
  font-size: 20px;
  padding: 10px;
  width: 500px;
  border-spacing: 30px 0px;
  background-color: #eeeeee;
`;

const StyledTh = styled.th`
  text-align: left;
  width: 250px;
`;

const StyledCaption = styled.caption`
  text-align: left;
  padding: 5px;
  padding-left: 40px;
  font-size: 22px;
  font-weight: 600;
  background-color: #999999;
`;

export const LoginPage = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const url = process.env.REACT_APP_RANDOM_USERS_API_URL;
  const userListRef = useRef(null);

  const [userList, setUserList] = useState({});

  const { login } = useAuth();

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
        // console.log(userListRef.current);
        // console.log(typeof userList);
        // console.log(typeof userListRef.current);
        setUserList(userListRef);
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
      login(userName);
      navigate("/home");
    } else {
      alert("Invalid userName or Password...");
      setUserName("");
      setPassword("");
    }
  };

  const handleSignUp = () => {
    navigate("/sign-up");
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
            <StyledButton color="skyblue" onClick={handleSignUp}>
              Sign Up
            </StyledButton>
          </ButtonGroup>
        </StyledForm>
      </ContentsContainer>
      <UserListContainer>
        <StyledTable>
          <StyledCaption>USER LIST</StyledCaption>
          {Object.keys(userList).length === 0 ? (
            <thead>
              <tr>
                <td>No User</td>
              </tr>
            </thead>
          ) : (
            <>
              <thead>
                <tr>
                  <StyledTh>UserName</StyledTh>
                  <StyledTh>Password</StyledTh>
                </tr>
              </thead>
              <tbody>
                {userList.current.map(function (user) {
                  return (
                    <tr key={user.id}>
                      <td>{user.username} </td>
                      <td>{user.password}</td>
                    </tr>
                  );
                })}
              </tbody>
            </>
          )}
        </StyledTable>
      </UserListContainer>
    </Container>
  );
};
