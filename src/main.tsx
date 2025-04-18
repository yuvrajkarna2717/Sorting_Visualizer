import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Home from "./Home/Home.tsx";
import { SortingAlgorithmProvider } from "./context/Visualizer.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <SortingAlgorithmProvider>
      <Home />
    </SortingAlgorithmProvider>
  </StrictMode>
);
