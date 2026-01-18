import "./layout.styles.css";

import { Link } from "react-router-dom";
import type { ReactNode } from "react";
// import { Children } from "react";
import Randomjoke from "../pages/randomjoke";


export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="layout">
      <header>
        <nav>
          <Link to="/">Heim</Link>
          <Link to="/uppskriftir">Máltíðir</Link>
          <Link to="/uppskr_finna">Leita að máltíð</Link>
          <Link to="/about">Um Vesen</Link>
         
          
        </nav>
      </header>
      <main>
        {children}

        <div id="vesenTitle">
          Vesen
          <br />
          Restaurant
        </div>
        <div className="random_joke">
          <Randomjoke />
        </div>
      </main>
      <footer>© 2025-2026 Inga G. Vald. <Link to="/dsf">Kalli Kokkur ehf</Link></footer>
    </div>
  );
}
