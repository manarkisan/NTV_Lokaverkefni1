import { useEffect, useState } from "react";
 import { Link } from "react-router-dom";
 import type { ReactNode } from "react";
 import { useParams } from "react-router-dom";
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
      <div>Hér koma uppskriftir 🐒</div>
      <div className="uppskrift">
        <h1>Uppskrift dagsins:</h1>
        {meals.map((meal) => (
          <><p>{meal.strMeal}</p>
          <p>{meal.strIngredients}</p>
          <p>{meal.strCategory}</p>
          <p>{meal.strInstructions}</p>
          </>
        ))}
        {error && <div>{error}</div>}
      </div>

      <div className="next_btn">
        <button onClick={() => usePage(page - 1)}>Fyrri uppskrift</button>
        <button onClick={() => usePage(page + 1)}>Næsta uppskrift</button>
      </div>
    </>
  );
}

