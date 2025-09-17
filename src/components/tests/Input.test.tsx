import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Input from "../Input";

test("renders input and handles change", () => {
  const handleChange = vi.fn(); // <-- ändrat från jest.fn()

  render(
    <Input
      type="text"
      name="username"
      placeholder="username"
      value=""
      onChange={handleChange}
    />
  );

  const input = screen.getByPlaceholderText("username");
  expect(input).toBeInTheDocument();

  fireEvent.change(input, { target: { value: "Seb" } });
  expect(handleChange).toHaveBeenCalledTimes(1);
});
