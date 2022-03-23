import { MockedProvider } from "@apollo/client/testing";
import { describe, expect, it } from "vitest";
import {
  fireEvent,
  render,
  screen,
  userEvent,
} from "../../../utils/test-utils";
import BookCard from "./BookCard";

const data = {
  id: "1",
  genre: "Comedy",
  title: "Test",
  publishYear: "2022-03-01T19:00:00Z",
};

const WrappedComponent = () => (
  <MockedProvider>
    <BookCard data={data} />
  </MockedProvider>
);

describe("In BookCard", () => {
  it("it shows title", () => {
    render(<WrappedComponent />);
    const element = screen.getByText("Test");
    expect(element).toBeInTheDocument();
  });

  it("it shows date", () => {
    render(<WrappedComponent />);
    const element = screen.getByText("Published on: 2022");
    expect(element).toBeInTheDocument();
  });
});
