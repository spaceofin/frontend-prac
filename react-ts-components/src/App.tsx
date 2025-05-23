import Buttons from "./components/displays/Buttons";
import Inputs from "./components/displays/inputs";

function App() {
  return (
    <div className="flex flex-col gap-20">
      <div className="flex gap-10">
        <Buttons styleTool="tailwindcss" />
        <Buttons styleTool="css-modules" />
        <Buttons styleTool="styled-components" />
      </div>
      <div className="flex gap-10">
        <Inputs styleTool="tailwindcss" />
      </div>
    </div>
  );
}

export default App;
