import { render } from "react-dom";
import React from "react";
import App from "./components/App";
import { createStore } from "redux";
import reducers from "./reducers";
import { Provider } from "react-redux";

const root = document.createElement("div");
document.body.appendChild(root);
const store = createStore(reducers, {
    slideNumber: parseInt(window.localStorage.slideNumber),
});

store.subscribe(() => {
    window.localStorage.slideNumber = store.getState().slideNumber;
});

render(
    <Provider store={store}>
        <App />
    </Provider>,
    root
);
