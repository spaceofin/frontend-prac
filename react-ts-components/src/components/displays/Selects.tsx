import { StyleTool } from "../types/common";
import { JSX, useEffect, useState } from "react";
import { SelectProps } from "../types/select";

type SelectComponent = (props: SelectProps) => JSX.Element;

const selectPaths = import.meta.glob(
  "../{tailwindcss,css-modules,styled-components,tailwindcss-cn}/Select.tsx"
) as Record<string, () => Promise<{ default: SelectComponent }>>;

const options = [
  { value: "", label: "선택하세요" },
  { value: "apple", label: "사과" },
  { value: "banana", label: "바나나" },
  { value: "orange", label: "오렌지" },
];

const selectOptions = () =>
  options.map(({ value, label }) => (
    <option key={value} value={value}>
      {label}
    </option>
  ));

const Selects = ({ styleTool }: { styleTool: StyleTool }) => {
  const [Select, setSelect] = useState<SelectComponent | null>(null);

  useEffect(() => {
    const loadSelect = async () => {
      const { default: selectModule } = await selectPaths[
        `../${styleTool}/Select.tsx`
      ]();
      setSelect(() => selectModule);
    };

    loadSelect();
  }, []);

  if (!Select) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-end gap-2">
        <Select size="sm">{selectOptions()}</Select>
        <Select>{selectOptions()}</Select>
        <Select size="lg">{selectOptions()}</Select>
      </div>
      <div className="flex items-end gap-2">
        <Select variant="ghost" size="sm">
          {selectOptions()}
        </Select>
        <Select variant="ghost">{selectOptions()}</Select>
        <Select variant="ghost" size="lg">
          {selectOptions()}
        </Select>
      </div>
      <div className="flex items-end gap-2">
        <Select variant="underline" size="sm">
          {selectOptions()}
        </Select>
        <Select variant="underline">{selectOptions()}</Select>
        <Select variant="underline" size="lg">
          {selectOptions()}
        </Select>
      </div>
    </div>
  );
};

export default Selects;
