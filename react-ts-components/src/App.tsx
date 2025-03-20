import Button from "./components/tailwindcss/Button";

function App() {
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
}

export default App;
