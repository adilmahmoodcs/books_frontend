/* eslint-disable import/export */
import { ApolloProvider } from "@apollo/client";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import client from "../services/client/apolloClient";

const customRender = (ui, options = {}) =>
  render(ui, {
    // wrap provider(s) here if needed
    wrapper: ({ children }) => (
      // <ApolloProvider client={client}>
        <BrowserRouter>{children}</BrowserRouter>
      // </ApolloProvider>
    ),

    ...options,
  });

export * from "@testing-library/react";
export { default as userEvent } from "@testing-library/user-event";

// override render export
export { customRender as render };
