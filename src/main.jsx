import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ThemeProvider } from "react-bootstrap";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider dir="rtl">
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ThemeProvider>
);
