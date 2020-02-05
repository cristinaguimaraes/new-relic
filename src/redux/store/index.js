import { reducers } from "../reducers";
import { createStore } from "redux";

const configureStore = () => {
  return createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
};

export { configureStore };
