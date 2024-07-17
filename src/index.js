import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";

// React Router
import { BrowserRouter } from "react-router-dom";

// Store
import { MasterStore } from './Services/MasterStore/MasterStore';

// Store Provider
import { Provider } from 'react-redux';

// Translation
import "./Services/Translation";

// Loading
import Loading from "./Components/Loading/Loading";

// React Toastify
import { ToastContainer } from "react-toastify";

import App from "./App";

// Vendors Styles
import "react-toastify/dist/ReactToastify.css";

import "@splidejs/react-splide/css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.Fragment>
    <Provider store={MasterStore}>
      <Suspense fallback={<Loading />}>
        <BrowserRouter basename="/">
          <App />
          <ToastContainer />
        </BrowserRouter>
      </Suspense>
    </Provider>
  </React.Fragment>
);
