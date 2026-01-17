import { useState } from "react";
import type { Meals } from "../utils";

export default function Finna() {
  const [meals, setMeals] = useState<Meals[]>([]);
  const [query, setQuery] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [searchPress, setSearchPress] = useState(false);

  const fetchMeals = async () => {
    if (!query.trim()) return;

    setSearchPress(true);
    setError(null);
    setLoading(true);

    try {
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
      );
      const data = await res.json();
      setMeals(data.meals ?? []);
    } catch {
      setError("Leitin mistókst");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div id="search">
        Finna máltíð:
        <input id="input"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setSearchPress(false);
          }}
        />
        <button className="next_btn" onClick={fetchMeals}>Leita</button>
        {loading && <p>Leitar...</p>}
        {error && <p>{error}</p>}
        {searchPress && !loading && meals.length === 0 && query && (
          <p>Fann ekkert...</p>
        )}
      </div>

      <div className="searchResults">
        {meals.map((meal) => (
          <div  key={meal.idMeal}>
            <a href={`/uppskriftir/${meal.idMeal}`}>
              {meal.strMeal}
              <br />
              <img src={meal.strMealThumb} width={200} />
            </a>
          </div>
        ))}
      </div>
    </>
  );
}
