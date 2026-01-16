import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import type { ReactNode } from "react";
// import { useParams } from "react-router-dom";
import type { Meals } from "../utils";

export default function UppskriftStafur() {
  const [letter, setLetter] = useState("a");
  const [meals, setMeals] = useState<Meals[] | []>([]);
  

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMeals = async () => {
      try {
        const response = await fetch(
          `https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`
        );
        const data = await response.json();
        setMeals(data.meals ?? []);
      } catch {
        setError("Villa kom upp!");
      } finally {
        setLoading(false);
      }
    };

    fetchMeals();
  }, [letter]);

  if (loading) return <p>Sæki máltíð...</p>;
  if (error) return <p>Villa: {error}</p>;

  // function toLowerCase(): any {
  //   throw new Error("Function not implemented.");
  // }

  return (
    <>
      <>
        <nav>
          Leita eftir:
          <a href="uppskr_stafur">Staf</a>
          <a href="uppskr_flokkur">Flokki</a>
          <a href="uppskrift_numer">Einkennisnúmeri</a>
        </nav>
        <nav className="byLetter">
          Stafur:
          {"ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").map((letter) => (
            <button
              className="btnLetter"
              key={letter}
              onClick={() => setLetter(letter)}
            >
              {letter}
            </button>
          ))}
        </nav>
        {loading && <p>Hleð...</p>}
      </>
      <div>Leitið að máltíð eftir bókstaf 🐒</div>
      <div className="uppskrift">
        <h1>Máltíðir sem byrja á stafnum {letter}:</h1>
        {meals.map((meal) => (
          <>
          <div className="categories">
            <p
              style={{
                textDecoration: "underline",
                fontSize: "25px",
                fontWeight: "bold",
              }}
            >
              <a href={`/uppskriftir/${meal.idMeal}`}><img className="mealImg" src={meal.strMealThumb} />
              {meal.strMeal}</a>
            </p>

            <p>Meal database: ID{meal.idMeal}</p></div>
          </>
        ))}
        {error && <div>{error}</div>}
      </div>
    </>
  );
}
