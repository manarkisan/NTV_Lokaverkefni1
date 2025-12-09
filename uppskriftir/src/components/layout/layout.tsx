import "./layout.styles.css";
import { useEffect, useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import type { ReactNode } from "react";
import Uppskriftir from "../pages/uppskriftir";
import { Children } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="layout">
      <header>
        <nav>
          <Link to="/">Heim</Link>
          <Link to="/uppskriftir">Uppskriftir</Link>
          <Link to="/">Um</Link>
        </nav>
      </header>
      <main>
        <div>Stuff that links into layout goes here</div>
        {children}
      </main>
      <footer>*footer*</footer>
    </div>
  );
}
