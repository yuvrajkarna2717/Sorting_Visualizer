import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./index.css";
import App from "./App.tsx";
import Home from "./Home/Home.tsx";
import { SortingAlgorithmProvider } from "./context/Visualizer.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <SortingAlgorithmProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/sorting-visualizer" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </SortingAlgorithmProvider>
  </StrictMode>
);
