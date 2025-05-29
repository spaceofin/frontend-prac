import { ButtonProps } from "../types/button";
import { StyleTool } from "../types/common";
import { JSX, useEffect, useState } from "react";

type ButtonComponent = (props: ButtonProps) => JSX.Element;

const buttonPaths = import.meta.glob(
  "../{tailwindcss,css-modules,styled-components,tailwindcss-cn}/Button.tsx"
) as Record<string, () => Promise<{ default: ButtonComponent }>>;

const Buttons = ({ styleTool }: { styleTool: StyleTool }) => {
  const [Button, setButton] = useState<ButtonComponent | null>(null);

  useEffect(() => {
    const loadButton = async () => {
      const { default: buttonModule } = await buttonPaths[
        `../${styleTool}/Button.tsx`
      ]();
      setButton(() => buttonModule);
    };

    loadButton();
  }, []);

  if (!Button) {
    return <div>Loading...</div>;
  }

  return (
    <div className="grid grid-cols-3 gap-2 items-end w-72">
      <Button size="sm">Button</Button>
      <Button>Button</Button>
      <Button size="lg">Button</Button>
      <Button variant="outline" size="sm">
        Button
      </Button>
      <Button variant="outline">Button</Button>
      <Button variant="outline" size="lg">
        Button
      </Button>
      <Button variant="ghost" size="sm">
        Button
      </Button>
      <Button variant="ghost">Button</Button>
      <Button variant="ghost" size="lg">
        Button
      </Button>
    </div>
  );
};

export default Buttons;
