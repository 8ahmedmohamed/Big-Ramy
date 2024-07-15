import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";

// React Router
import { BrowserRouter } from "react-router-dom";

// Store Provider
import StoreProvider from "./Services/Stores";

// Translation
import "./Services/Translation";

// Middleware
import Middleware from "./Services/Middleware/Middleware";

// React Toastify
import { ToastContainer } from "react-toastify";

import App from "./App";

// Vendors Styles
import "react-toastify/dist/ReactToastify.css";

import "@splidejs/react-splide/css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.Fragment>
    <Suspense>
      <StoreProvider>
        <BrowserRouter basename="/">
          <Middleware>
            <App />
            <ToastContainer />
          </Middleware>
        </BrowserRouter>
      </StoreProvider>
    </Suspense>
  </React.Fragment>
);
