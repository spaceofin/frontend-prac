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
        <Route path="/about" element={<About />}>
          <Route
            path="/about/1"
            element={<div>This is About subpage 1.</div>}
          />
          <Route
            path="/about/2"
            element={<div>This is About subpage 2.</div>}
          />
          <Route
            path="/about/3"
            element={<div>This is About subpage 3.</div>}
          />
        </Route>
        <Route path="/events" element={<Events />} />
      </Routes>
    </Container>
  );
};

export default App;
