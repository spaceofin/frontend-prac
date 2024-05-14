import { Routes, Route } from "react-router-dom";

import { Home } from "./components/Home";
import { About } from "./components/About";
import { Cats } from "./components/Cats";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/cats" element={<Cats />} />
      </Routes>
    </div>
  );
};

export default App;
