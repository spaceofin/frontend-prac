import { StyleTool } from "../types/common";
import { JSX, ReactNode, useEffect, useState } from "react";
import { AlertProps } from "../types/alert";

type AlertComponent = (props: AlertProps) => JSX.Element;

const alertPaths = import.meta.glob(
  "../{tailwindcss,css-modules,styled-components,tailwindcss-cn}/Alert.tsx"
) as Record<string, () => Promise<{ default: AlertComponent }>>;

const Alerts = ({
  styleTool,
  children,
}: {
  styleTool: StyleTool;
  children: ReactNode;
}) => {
  const [Alert, setAlert] = useState<AlertComponent | null>(null);

  useEffect(() => {
    const loadAlert = async () => {
      const { default: AlertModule } = await alertPaths[
        `../${styleTool}/Alert.tsx`
      ]();
      setAlert(() => AlertModule);
    };

    loadAlert();
  }, []);

  if (!Alert) {
    return <div>Loading...</div>;
  }

  return (
    <div className="grid grid-col gap-2 w-96">
      <div>
        <Alert size="sm">{children}</Alert>
        <Alert>{children}</Alert>
        <Alert size="lg">{children}</Alert>
      </div>
      <div>
        <Alert size="sm" variant="success">
          {children}
        </Alert>
        <Alert variant="success">{children}</Alert>
        <Alert size="lg" variant="success">
          {children}
        </Alert>
      </div>
      <div>
        <Alert size="sm" variant="warning">
          {children}
        </Alert>
        <Alert variant="warning">{children}</Alert>
        <Alert size="lg" variant="warning">
          {children}
        </Alert>
      </div>
      <div>
        <Alert size="sm" variant="destructive">
          {children}
        </Alert>
        <Alert variant="destructive">{children}</Alert>
        <Alert size="lg" variant="destructive">
          {children}
        </Alert>
      </div>
      <div>
        <Alert size="sm" variant="info">
          {children}
        </Alert>
        <Alert variant="info">{children}</Alert>
        <Alert size="lg" variant="info">
          {children}
        </Alert>
      </div>
    </div>
  );
};

export default Alerts;
