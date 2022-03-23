import { MockedProvider } from "@apollo/client/testing";
import { describe, expect, it } from "vitest";
import { CREATE_AUTHOR } from "../../services/gql/mutationSchemas";
import {
  fireEvent,
  render,
  screen,
  userEvent,
  waitFor,
} from "../../utils/test-utils";
import AddAuthor from "./AddAuthor";

const WrappedComponent = () => (
  <MockedProvider>
    <AddAuthor open={true} />
  </MockedProvider>
);

describe("In AddAuthor", () => {
  it("the title is visible", () => {
    render(<WrappedComponent />);
    expect(screen.getByText("Add Author")).toBeInTheDocument();
  });

  it("first name takes input", async () => {
    render(<WrappedComponent />);
    const input = screen.getByLabelText("First Name");
    userEvent.type(input, "John");
    expect(input).toHaveValue("John");
  });

  it("surname takes input", () => {
    render(<WrappedComponent />);
    const input = screen.getByLabelText("Surname");
    userEvent.type(input, "Doe");
    expect(input).toHaveValue("Doe");
  });

  it("date takes input", () => {
    render(<WrappedComponent />);
    const dobInput = screen.getByLabelText("Date of Birth");
    fireEvent.change(dobInput, { target: { value: "2019-03-29" } });
    expect(dobInput.value).toEqual("2019-03-29");
  });
});
