import { useState } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import type { ReactNode } from "react";
import Uppskriftir from "./components/pages/uppskriftir";
import Layout from "./components/layout/layout";
import "./components/layout/layout.styles.css";

import "./App.css";
import About from "./components/pages/about";
import Heim from "./components/pages/heim";
import UppskriftStafur from "./components/pages/uppskr_stafur";

function App() {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Heim/>} />
            <Route path="/uppskriftir" element={<Uppskriftir />} />
            <Route path="/about" element={<About />} />
            <Route path="/uppskr_stafur" element={<UppskriftStafur />} />
            <Route path="/uppskrift_numer" element={<UppskriftStafur />} />
            <Route path="/uppskr_flokkur" element={<UppskriftStafur />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;
