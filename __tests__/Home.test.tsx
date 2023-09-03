import { render, screen } from "@testing-library/react";
import Home from "../app/page";

describe("Home", () => {
  it("renders the heading", () => {
    render(<Home />);

    const heading: HTMLElement = screen.getByTitle("Welcome to Next.js!");

    expect(heading).toBeInTheDocument();
  });
});
