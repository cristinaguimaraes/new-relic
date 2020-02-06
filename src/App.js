import React from "react";
import { Routes } from "./components/Routes";
import { GlobalStyles } from "./styles/global";
import { App } from "./App.styled";
import { Toast } from "./components/Toast";
import { configureStore } from "./redux/store";
import { Provider } from "react-redux";

function app() {
  const store = configureStore();
  return (
    <App>
      <GlobalStyles />
      <Provider store={store}>
        <Routes />
        <Toast />
      </Provider>
    </App>
  );
}

export default app;
