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
  <ThemeProvider theme={theme}>
    <Provider store={Store}>
      <BrowserRouter>
        <StrictMode>
          <App />
        </StrictMode>
      </BrowserRouter>
    </Provider>
  </ThemeProvider >
);
