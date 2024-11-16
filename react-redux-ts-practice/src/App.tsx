import { Counter } from "./features/counter/Counter";
import { Container } from "./components/Container";
import { Clock } from "./features/clock/Clock";
import { Weather } from "./features/weather/Weather";
import { User } from "./features/user/User";
import { Todos } from "./features/todos/Todos";
import { Cart } from "./features/cart/Cart";
import Library from "./features/library/Library";

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
      <Container>
        <User />
      </Container>
      <Container>
        <Todos />
      </Container>
      <Container>
        <Cart />
      </Container>
      <Container>
        <Library />
      </Container>
    </div>
  );
}
