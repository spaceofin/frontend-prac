import { Routes, Route } from "react-router-dom";

import { Home } from "./components/Home";
import { About } from "./components/About";
import { Cats } from "./components/Cats";
import { Breeds } from "./components/Breeds";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/cats" element={<Cats />} />
        <Route path="/breeds" element={<Breeds />} />
      </Routes>
    </div>
  );
};

export default App;
