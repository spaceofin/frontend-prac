import { Counter } from "./features/counter/Counter";
import { Container } from "./components/Container";

export default function App() {
  return (
    <div>
      <div className="text-2xl text-orange-400 m-5 my-10">
        Hello, React Redux Typescript
      </div>
      <Container>
        <Counter />
      </Container>
    </div>
  );
}
