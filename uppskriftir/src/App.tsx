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
import UppskriftFlokkur from "./components/pages/uppskr_flokkur";
import UppskriftId from "./components/pages/uppskrift_numer";
import Finna from "./components/pages/uppskr_finna";
import Card from "./components/Card/card";
import NotFound from "./components/pages/notfound";

function App() {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Heim />} />
            <Route path="/uppskriftir" element={<Uppskriftir />} />
            <Route path="/about" element={<About />} />
            <Route path="/uppskr_finna" element={<Finna />} />
            <Route path="/uppskr_stafur" element={<UppskriftStafur />} />
            <Route path="/uppskrift_numer" element={<UppskriftId />} />
            <Route path="/uppskr_flokkur" element={<UppskriftFlokkur />} />
           
            <Route path="/uppskriftir/:id" element={<Card />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;
