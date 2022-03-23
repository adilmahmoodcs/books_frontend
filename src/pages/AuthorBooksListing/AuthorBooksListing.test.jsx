import { MockedProvider } from "@apollo/client/testing";
import { describe, expect, it } from "vitest";
import { GET_AUTHOR_BY_ID } from "../../services/gql/querySchemas";
import { render, waitFor } from "../../utils/test-utils";
import AuthorBooksListing from "./AuthorBooksListing";

const mocks = [
  {
    request: {
      query: GET_AUTHOR_BY_ID("1"),
    },
    result: {
      data: {
        author: [
          {
            dob: "2022-03-09T19:00:00Z",
            firstname: "Jane",
            surname: "Smith",
            books: [
              {
                genre: "Comedy",
                id: "1",
                publishYear: "2022-03-18T19:00:00Z",
                title: "On the road",
                __typename: "Book",
              },
            ],
            __typename: "Author",
          },
        ],
      },
    },
  },
];

const WrappedComponent = () => (
  <MockedProvider mocks={mocks} addTypename={false}>
    <AuthorBooksListing />
  </MockedProvider>
);

describe("it tests Author listing", () => {
  it("query is fetched", async () => {
    const { container } = render(<WrappedComponent />);
    await waitFor(() => new Promise((res) => setTimeout(res, 0)));
    expect(container).toMatchSnapshot();
  });
});
