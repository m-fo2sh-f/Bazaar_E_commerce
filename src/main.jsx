import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./theme.jsx";

import { Store } from './app/Store'
import { Provider } from 'react-redux'
createRoot(document.getElementById("root")).render(
  <BrowserRouter basename="/Bazaar_E_commerce">
    <ThemeProvider theme={theme}>
      <Provider store={Store}>
        <StrictMode>
          <App />
        </StrictMode>
      </Provider>
    </ThemeProvider >
  </BrowserRouter>
);
