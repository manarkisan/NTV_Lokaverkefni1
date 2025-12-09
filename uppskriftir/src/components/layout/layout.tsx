import "./layout.styles.css";
import Uppskriftir from "../pages/uppskriftir";

export default function Layout() {
  return (
    <>
      <header>
        <nav>
            <a href="/">Heim</a>
            <a href="../pages/uppskriftir">Uppskriftir</a>
            <a href="/">Um</a>
        </nav>
      </header>
      <main>Stuff that links into layout goes here
        <Uppskriftir/>
      </main>
      <footer>*footer*</footer>
    </>
  );
}
