import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useAuth } from "contexts/AuthContext";
import { ReactComponent as AccountCircle } from "assets/icons/account-circle.svg";
import { ReactComponent as Logout } from "assets/icons/logout.svg";
import { ReactComponent as House } from "assets/icons/house.svg";

const UserContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 650px;
  font-size: 20px;
  font-weight: 600;
  padding: 10px;
  margin-left: 10px;
  gap: 5px;
`;

const StyledHouse = styled(House)`
  &:hover {
    cursor: pointer;
  }
`;

const StyledLogOut = styled(Logout)`
  &:hover {
    cursor: pointer;
  }
`;

export const NavigationBar = () => {
  const { user, logout } = useAuth();

  console.log(user);
  if (user === null) console.log("user is null");

  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const handleGoToHome = () => {
    navigate("/home");
  };
  return (
    <UserContainer>
      <StyledHouse onClick={handleGoToHome} />
      <AccountCircle />
      {user ? user : "No User Information"}
      <StyledLogOut onClick={handleLogout} />
    </UserContainer>
  );
};
