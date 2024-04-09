import { render, screen } from "@testing-library/react";
import HeaderGame from "./Components/Headers/HeaderGame";
import { Provider } from "react-redux";
import { store } from "./store/store";
import HeaderScore from "./Components/Headers/HeaderScore";
import { CreateCar } from "./Components/CreateCar/CreateCar";

test("test HeaderGame component", () => {
  render(
    <Provider store={store}>
      <HeaderGame />
    </Provider>
  );
  const HeaderGameh1 = screen.getByText(/game/i);
  expect(HeaderGameh1).toBeInTheDocument();
});

test("test HeaderScore component", () => {
  render(<HeaderScore />);
  const HeaderScoreh1 = screen.getByRole("heading");
  expect(HeaderScoreh1).toBeInTheDocument();
});

test("test ControlPanel component", () => {
  render(
    <Provider store={store}>
      <CreateCar />
    </Provider>
  );
  const CreateCarInput = screen.getByPlaceholderText("Enter car name...");
  expect(CreateCarInput).toBeInTheDocument();
});
