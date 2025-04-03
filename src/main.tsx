import {StrictMode} from "react";
import {createRoot} from "react-dom/client";
import App from "./App.tsx";
import {createGlobalStyle, ThemeProvider} from "styled-components";
import {theme} from "./theme.ts";

const GlobalStyle = createGlobalStyle`
  body {font-family: 'SUIT Variable', sans-serif};
`;

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </StrictMode>
);
