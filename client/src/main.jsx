import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Layout from "./Components/Layout.jsx";
import { Provider } from 'react-redux'
import store from "./Redux/Store/store.js";

ReactDOM.createRoot(document.getElementById("root")).render(

  <Provider store={store}>
    {/* <React.StrictMode> */}
      <div
        style={{
          height: "100vh",
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          scrollBehavior: "smooth",
        }}
      >
        <Layout>
          <App />
        </Layout>
      </div>
    {/* </React.StrictMode> */}
  </Provider>
);
