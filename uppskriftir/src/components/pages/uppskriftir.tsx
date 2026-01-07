import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import type { ReactNode } from "react";
// import { useParams } from "react-router-dom";
import type { Meals } from "../utils";

export default function Uppskriftir() {
  const [meals, setMeals] = useState<Meals[] | []>([]);
  const [page, usePage] = useState(1);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMeals = async () => {
      try {
        const response = await fetch(
          `https://www.themealdb.com/api/json/v1/1/random.php`
        );
        const data = await response.json();
        setMeals(data.meals);
      } catch {
        setError("Villa kom upp!");
      } finally {
        setLoading(false);
      }
    };

    fetchMeals();
  }, []);

  if (loading) return <p>Sæki uppskrift...</p>;
  if (error) return <p>Villa: {error}</p>;

  return (
    <>
      <>
        <nav>
          Leita eftir:
          <a href="uppskr_stafur">Staf</a>
          <a href="uppskr_flokkur">Flokki</a>
          <a href="uppskr_flokk2">Flokki2</a>
          <a href="uppskrift_numer">Einkennisnúmeri</a>
        </nav>
      </>
      <div>Hér koma uppskriftir 🐒</div>
      <div className="uppskrift">
        <h1>Uppskrift dagsins:</h1>
        {meals.map((meal) => (
          <>
          <img className="mealImg" src={meal.strMealThumb}  />
            <p
              style={{
                textDecoration: "underline",
                fontSize: "25px",
                fontWeight: "bold",
              }}
            >
              {meal.strMeal}
            </p>
            
            <p>Country of origin: {meal.strArea}</p>
            <p>
              Type: <i>{meal.strCategory}</i>
            </p>
            <p>
              <b>Ingredients: </b>
              <br />
              {meal.strIngredient1}, {meal.strIngredient2},{" "}
              {meal.strIngredient3},{meal.strIngredient4}, {meal.strIngredient5},{" "}
              {meal.strIngredient6},{meal.strIngredient7},{" "}
              {meal.strIngredient8}, {meal.strIngredient9},{" "}
              {meal.strIngredient10}, {meal.strIngredient11},{" "}
              {meal.strIngredient12}, {meal.strIngredient13},{" "}
              {meal.strIngredient14}.
            </p>
            <p>
              -Instructions-
              <br />
              {meal.strInstructions}
            </p>

            <p>{meal.strMeasures}</p>
            <p>Meal database: ID{meal.idMeal}</p>
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
