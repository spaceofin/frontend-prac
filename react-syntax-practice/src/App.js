import styled from "styled-components";

import { Routes, Route } from "react-router-dom";
import { Home, About, Events, Header } from "./components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  background-color: #398aff;
  color: white;
  font-size: 20px;
`;

const App = () => {
  console.log("App component called");
  return (
    <Container>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/events" element={<Events />} />
      </Routes>
    </Container>
  );
};

export default App;
