import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import InfoProvider from "./context/InfoProviders.jsx";
import { BrowserRouter } from "react-router-dom";
import "normalize.css";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <BrowserRouter basename="/arjona">
    <InfoProvider>
      <App />
    </InfoProvider>
  </BrowserRouter>
  //</React.StrictMode>
);
