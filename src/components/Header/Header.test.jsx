import { describe, expect, it } from "vitest";
import Header from "./Header";
import { render, screen, userEvent } from "../../utils/test-utils";
import { BrowserRouter, Route, Router } from "react-router-dom";

describe("it tests header", () => {
  it("the title is visible", () => {
    render(<Header />);
    expect(screen.getByText("Books Collection")).toBeInTheDocument();
  });
});
