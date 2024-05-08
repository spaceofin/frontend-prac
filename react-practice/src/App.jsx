import { Hero } from "./components";
import { Header } from "./components";
import { Icon } from "./components";

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Icon name="add" style={{ fontSize: "50px" }} />
    </div>
  );
};

export default App;
