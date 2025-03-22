import { JSX, useEffect, useState } from "react";

type StyleTool = "tailwindcss" | "styled-components" | "css-modules";

type ButtonsProps = {
  styleTool: StyleTool;
};

type ButtonProps = {
  className?: string;
  variant?: "default" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
} & React.ComponentProps<"button">;

type ButtonComponent = (props: ButtonProps) => JSX.Element;

const buttonPaths = {
  tailwindcss: "../tailwindcss/Button.tsx",
  "css-modules": "../css-modules/Button.tsx",
};

const Buttons = ({ styleTool }: ButtonsProps) => {
  const [Button, setButton] = useState<ButtonComponent | null>(null);

  useEffect(() => {
    const loadButton = async () => {
      const buttonPath = buttonPaths[styleTool as keyof typeof buttonPaths];
      if (buttonPath) {
        const { default: buttonModule } = await import(buttonPath);
        setButton(() => buttonModule);
      }
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
