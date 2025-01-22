import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 800px;
  height: 250px;
  background-color: lightGray;
  border-radius: 20px;
  margin: 10px 30px;
  font-size: 30px;
  color: white;
  border: 2px solid gray;
`;

const PreviewCard = () => {
  return <Container>PreviewCard</Container>;
};

export default PreviewCard;
