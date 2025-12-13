import { useState } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import type { ReactNode } from "react";
import Uppskriftir from "./components/pages/uppskriftir";
import Layout from "./components/layout/layout";
import "./components/layout/layout.styles.css";

import "./App.css";
import About from "./components/pages/about";

function App() {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<div>HEllo</div>} />
            <Route path="/uppskriftir" element={<Uppskriftir />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;
