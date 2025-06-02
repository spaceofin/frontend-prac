import Buttons from "./components/displays/Buttons";
import Inputs from "./components/displays/Inputs";
import Selects from "./components/displays/Selects";
import Alerts from "./components/displays/Alerts";

function App() {
  return (
    <div className="flex flex-col gap-20">
      <div className="flex gap-10">
        <Buttons styleTool="tailwindcss" />
        <Buttons styleTool="styled-components" />
        <Buttons styleTool="css-modules" />
        <Buttons styleTool="tailwindcss-cn" />
      </div>
      <div className="flex gap-10">
        <Inputs styleTool="tailwindcss" />
        <Inputs styleTool="styled-components" />
        <Inputs styleTool="css-modules" />
        <Inputs styleTool="tailwindcss-cn" />
      </div>
      <div className="flex gap-10">
        <Selects styleTool="tailwindcss" />
        <Selects styleTool="styled-components" />
        <Selects styleTool="css-modules" />
        <Selects styleTool="tailwindcss-cn" />
      </div>
      <div>
        <div className="flex gap-10">
          <Alerts styleTool="tailwindcss">Alert</Alerts>
          <Alerts styleTool="styled-components">Alert</Alerts>
          <Alerts styleTool="css-modules">Alert</Alerts>
          <Alerts styleTool="tailwindcss-cn">Alert</Alerts>
        </div>
      </div>
    </div>
  );
}

export default App;
