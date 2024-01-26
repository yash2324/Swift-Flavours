import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

test("should load contact us component", () => {
  render(<Contact />);
  const element = screen.getByText("Contact Us");
  expect(element).toBeInTheDocument();
});
test("should have input boxes", () => {
  render(<Contact />);
  const boxes = screen.getAllByRole("textbox");
  expect(boxes.length).toBe(3);
});
