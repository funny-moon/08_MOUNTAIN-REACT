import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeView from "./views/HomeView";
import CardView from "./views/CardView";
import PortView from "./views/PortView";

import link from "./utils/link";
import lenis from "./utils/lenis";

const App = () => {
  useEffect(() => {
    link();
    lenis();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/card" element={<CardView />} />
        <Route path="/port" element={<PortView />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
