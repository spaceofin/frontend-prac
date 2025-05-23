import { StyleTool } from "../types/common";
import { JSX, useEffect, useState } from "react";
import { InputProps } from "../types/input";

type InputComponent = (props: InputProps) => JSX.Element;

const inputPaths = import.meta.glob(
  "../{tailwindcss,css-modules,styled-components}/Input.tsx"
) as Record<string, () => Promise<{ default: InputComponent }>>;

const Inputs = ({ styleTool }: { styleTool: StyleTool }) => {
  const [Input, setInput] = useState<InputComponent | null>(null);

  useEffect(() => {
    const loadInput = async () => {
      const { default: inputModule } = await inputPaths[
        `../${styleTool}/Input.tsx`
      ]();
      setInput(() => inputModule);
    };

    loadInput();
  }, []);

  if (!Input) {
    return <div>Loading...</div>;
  }

  return (
    <div className="grid grid-cols-3 gap-2 items-end w-72">
      <Input size="sm" />
      <Input />
      <Input size="lg" />
      <Input size="sm" variant="outline" />
      <Input variant="outline" />
      <Input size="lg" variant="outline" />
      <Input size="sm" variant="underline" />
      <Input variant="underline" />
      <Input size="lg" variant="underline" />
    </div>
  );
};

export default Inputs;
