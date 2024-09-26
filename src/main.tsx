import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { Header } from "./components";
import { Hero, Tokenomics } from "./sections";

const App = () => {
  return (
    <div className="flex w-screen h-screen bg-[#0f0f11] overflow-hidden">
      <div className="flex w-screen h-screen backdrop-brightness-75 backdrop-blur-3xl z-[1] enterAnimation">
        <Header />

        <div className="flex flex-wrap w-screen h-screen overflow-y-scroll">
          <Hero />
          <Tokenomics />
        </div>
      </div>
    </div>
  );
};

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
