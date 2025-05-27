import Buttons from "./components/displays/Buttons";
import Inputs from "./components/displays/Inputs";
import Selects from "./components/displays/Selects";
import Select from "./components/tailwindcss/Select";

function App() {
  return (
    <div className="flex flex-col gap-20">
      <div className="flex gap-10">
        <Buttons styleTool="tailwindcss" />
        <Buttons styleTool="styled-components" />
        <Buttons styleTool="css-modules" />
      </div>
      <div className="flex gap-10">
        <Inputs styleTool="tailwindcss" />
        <Inputs styleTool="styled-components" />
        <Inputs styleTool="css-modules" />
      </div>
      <div className="flex gap-10">
        <Selects styleTool="tailwindcss" />
      </div>
    </div>
  );
}

export default App;
