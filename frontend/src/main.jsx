import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { extendTheme } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import { ContextAppProvider } from "./context/ContextProvider";
const theme = extendTheme({
  colors: {
    blueColorCode: "#0000FF",
    fontColor: "#fff",
  },
});
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <ContextAppProvider>
          <App />
        </ContextAppProvider>
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>
);
