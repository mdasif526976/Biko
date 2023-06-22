import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ThemeProvider } from "@material-tailwind/react";
import Authprovider from "./AuthProvider/Authprovider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Authprovider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </Authprovider>
  </React.StrictMode>
);
