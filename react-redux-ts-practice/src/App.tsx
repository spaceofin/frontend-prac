import { Counter } from "./features/counter/Counter";
import { Container } from "./components/Container";
import { Clock } from "./features/clock/Clock";
import { Weather } from "./features/weather/Weather";

export default function App() {
  return (
    <div>
      <div className="text-2xl text-orange-400 m-10">
        Hello, React Redux Typescript
      </div>
      <Container>
        <Counter />
      </Container>
      <Container>
        <Clock />
      </Container>
      <Container>
        <Weather />
      </Container>
    </div>
  );
}
