import Buttons from "./components/displays/Buttons";
import Input from "./components/tailwindcss/Input";

function App() {
  return (
    <div className="flex flex-col gap-20">
      <div className="flex gap-10">
        <Buttons styleTool="tailwindcss" />
        <Buttons styleTool="css-modules" />
        <Buttons styleTool="styled-components" />
      </div>
      <div className="flex gap-10">
        <Input />
        <Input variant="outline" />
        <Input variant="underline" />
      </div>
    </div>
  );
}

export default App;
