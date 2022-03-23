import Routes from "./routes";
import { ApolloProvider } from "@apollo/client";
import { BrowserRouter } from "react-router-dom";
import { client } from "./services/client/apolloClient";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Routes />
        <ToastContainer />
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
