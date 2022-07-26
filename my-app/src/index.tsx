import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { App } from "./App";
import { ApolloProvider } from "@apollo/client";
import { client } from "./graphql";
import { Provider } from "react-redux";
import { store } from "./redux/store";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </Provider>
  </React.StrictMode>
);
