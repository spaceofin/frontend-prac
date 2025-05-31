import Buttons from "./components/displays/Buttons";
import Inputs from "./components/displays/Inputs";
import Selects from "./components/displays/Selects";
import Alert from "./components/tailwindcss/Alert";

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
      <div className="flex flex-col gap-2 w-96">
        <div>
          <Alert size="sm">default</Alert>
          <Alert>default</Alert>
          <Alert size="lg">default</Alert>
        </div>
        <div>
          <Alert size="sm" variant="success">
            success
          </Alert>
          <Alert variant="success">success</Alert>
          <Alert size="lg" variant="success">
            success
          </Alert>
        </div>
        <div>
          <Alert size="sm" variant="warning">
            warning
          </Alert>
          <Alert variant="warning">warning</Alert>
          <Alert size="lg" variant="warning">
            warning
          </Alert>
        </div>
        <div>
          <Alert size="sm" variant="destructive">
            destructive
          </Alert>
          <Alert variant="destructive">destructive</Alert>
          <Alert size="lg" variant="destructive">
            destructive
          </Alert>
        </div>
        <div>
          <Alert size="sm" variant="info">
            info
          </Alert>
          <Alert variant="info">info</Alert>
          <Alert size="lg" variant="info">
            info
          </Alert>
        </div>
      </div>
    </div>
  );
}

export default App;
