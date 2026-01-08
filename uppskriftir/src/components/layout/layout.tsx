import "./layout.styles.css";
import { useEffect, useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import type { ReactNode } from "react";
import { Children } from "react";
import Randomjoke from "../pages/randomjoke";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="layout">
      <header>
        <nav>
          <Link to="/">Heim</Link>
          <Link to="/uppskriftir">Uppskriftir</Link>
          <Link to="/about">Um</Link>
          <Link to="/uppskr_finna">Leita að uppskrift</Link>
        </nav>
      </header>
      <main>
        {children}

        <div className="random_joke">
          <Randomjoke/>
        </div>
      </main>
      <footer>© 2025-2026 Inga G. Vald.</footer>
    </div>
  );
}
