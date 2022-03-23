import { MockedProvider } from "@apollo/client/testing";
import { describe, expect, it } from "vitest";
import { GET_AUTHORS } from "../../services/gql/querySchemas";
import { render, waitFor } from "../../utils/test-utils";
import AuthorsListing from "./AuthorsListing";

const mocks = [
  {
    request: {
      query: GET_AUTHORS,
    },
    result: {
      data: {
        authors: [
          {
            dob: "2022-03-09T19:00:00Z",
            firstname: "Jane",
            id: "1",
            surname: "Smith",
            __typename: "Author",
          },
        ],
      },
    },
  },
];

const WrappedComponent = () => (
  <MockedProvider mocks={mocks}>
    <AuthorsListing />
  </MockedProvider>
);

describe("it tests Author listing", () => {
  it("query is fetched", async () => {
    const { container } = render(<WrappedComponent />);
    await waitFor(() => new Promise((res) => setTimeout(res, 0)));
    expect(container).toMatchSnapshot();
  });
});
