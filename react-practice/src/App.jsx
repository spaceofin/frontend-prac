import { Hero } from "./components/Hero";
import { Header } from "./components/Header";
import { Icon } from "./components/Icon";

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
