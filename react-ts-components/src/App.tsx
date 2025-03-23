import Buttons from "./components/displays/Buttons";

function App() {
  return (
    <div className="flex gap-10">
      <Buttons styleTool="tailwindcss" />
      <Buttons styleTool="css-modules" />
      <Buttons styleTool="styled-components" />
    </div>
  );
}

export default App;
