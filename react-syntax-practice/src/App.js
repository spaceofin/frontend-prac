import styled from "styled-components";

import { Routes, Route } from "react-router-dom";
import {
  Home,
  About,
  Events,
  Header,
  Airports,
  EventDetail,
} from "./components";
import { AboutSub1, AboutSub2, AboutSub3 } from "./components/AboutSubPages";

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
          <Route path="/about/1" element={<AboutSub1 />} />
          <Route path="/about/2" element={<AboutSub2 />} />
          <Route path="/about/3" element={<AboutSub3 />} />
        </Route>
        <Route path="/events" element={<Events />} />
        <Route path="/airports" element={<Airports />} />
        <Route path="/event-detail" element={<EventDetail />} />
      </Routes>
    </Container>
  );
};

export default App;
