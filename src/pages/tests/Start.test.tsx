import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Start from "../Start";

describe("Start page", () => {
  test("render hero text", () => {
    render(
      <MemoryRouter>
        <Start />
      </MemoryRouter>
    );
    expect(
      screen.getByText(/Where bands and artists connect/i)
    ).toBeInTheDocument();
    expect(screen.getByText(/share your music/i)).toBeInTheDocument();
    expect(screen.getByText(/Discover new sounds/i)).toBeInTheDocument();
  });

  test("has link buttons to login and signup", () => {
    render(
      <MemoryRouter>
        <Start />
      </MemoryRouter>
    );

    const loginLink = screen.getByRole("link", { name: /login/i });
    expect(loginLink).toBeInTheDocument();
    expect(loginLink).toHaveAttribute("href", "/login");

    const signupLink = screen.getByRole("link", { name: /sign up/i });
    expect(signupLink).toBeInTheDocument();
    expect(signupLink).toHaveAttribute("href", "/signup");
  });
});
