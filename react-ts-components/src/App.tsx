import Buttons from "./components/displays/Buttons";
import Inputs from "./components/displays/Inputs";
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
      <div className="flex w-72 flex-col gap-2">
        <Select>
          <option value="">선택하세요</option>
          <option value="apple">사과</option>
          <option value="banana">바나나</option>
          <option value="orange">오렌지</option>
        </Select>
        <Select variant="ghost">
          <option value="">선택하세요</option>
          <option value="apple">사과</option>
          <option value="banana">바나나</option>
          <option value="orange">오렌지</option>
        </Select>
        <Select variant="underline">
          <option value="">선택하세요</option>
          <option value="apple">사과</option>
          <option value="banana">바나나</option>
          <option value="orange">오렌지</option>
        </Select>
      </div>
    </div>
  );
}

export default App;
