import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import type { ReactNode } from "react";
import { useParams } from "react-router-dom";
import type { Meals } from "../utils";

export default function UppskriftId() {
  const [letter, setLetter] = useState("a");
  const [meals, setMeals] = useState<Meals[] | []>([]);
  const [page, usePage] = useState(1);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMeals = async () => {
      try {
        const response = await fetch(
          `https://www.themealdb.com/api/json/v1/1/search.php?i=${mealId}`
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

  if (loading) return <p>Sæki uppskrift...</p>;
  if (error) return <p>Villa: {error}</p>;

  function toLowerCase(): any {
    throw new Error("Function not implemented.");
  }

  return (
    <>
      <>
        <nav>
          Leita eftir:
          <a href="uppskr_stafur">Staf</a>
          <a href="/">Staðsetningu</a>
          <a href="/">Flokki</a>
          <a href="uppskrift_numer">Einkennisnúmeri</a>
          <a href="/">asdfasdf</a>
        </nav>
        <nav className="byLetter">
          Stafur:
          {"ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").map((letter) => (
            <button className="btnLetter" key={letter} onClick={() => setLetter(letter)}>
              {letter}
            </button>
          ))}
        </nav>
        {loading && <p>Hleð...</p>}
      </>
      <div>Hér koma uppskriftir 🐒</div>
      <div className="uppskrift">
        <h1>Uppskriftir sem byrja á stafnum {letter}:</h1>
        {meals.map((meal) => (
          <>
            <p
              style={{
                textDecoration: "underline",
                fontSize: "25px",
                fontWeight: "bold",
              }}
            >
              {meal.strMeal}
            </p>
            <p>{meal.strImageSource}</p>
            <p>Country of origin: {meal.strArea}</p>
            <p>
              Type: <i>{meal.strCategory}</i>
            </p>
            <p>
              <b>Ingredients: </b>
              <br />
              {meal.strIngredient1}, {meal.strIngredient2},{" "}
              {meal.strIngredient3},{meal.strIngredient4}, {meal.strIngredient5}
              , {meal.strIngredient6},{meal.strIngredient7},{" "}
              {meal.strIngredient8}, {meal.strIngredient9},{" "}
              {meal.strIngredient10}, {meal.strIngredient11},{" "}
              {meal.strIngredient12}, {meal.strIngredient13},{" "}
              {meal.strIngredient14}.
            </p>
            <p>
              Type: <i>{meal.strCategory}</i>
            </p>
            <p>{meal.strInstructions}</p>
            <p>{meal.strImageSource}</p>
          </>
        ))}
        {error && <div>{error}</div>}
      </div>

      <div className="meal_buttons">
        <button className="next_btn" onClick={() => usePage(page - 1)}>
          Fyrri uppskrift
        </button>
        <button className="next_btn" onClick={() => usePage(page + 1)}>
          Næsta uppskrift
        </button>
      </div>
    </>
  );
}
