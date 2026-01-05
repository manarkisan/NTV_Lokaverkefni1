import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import type { ReactNode } from "react";
// import { useParams } from "react-router-dom";
// import type { Meals } from "../utils";
import type { MealsByCat } from "../utils";

export default function UppskriftFlokkur() {
  const [category, setCategory] = useState("");
  const [categories, setCategories] = useState([]);
  // const [meals, setMeals] = useState<Meals[] | []>([]);
  const [mealsByCat, setMealsByCat] = useState<MealsByCat[] | []>([]);
  const [page, usePage] = useState(1);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(
          `https://www.themealdb.com/api/json/v1/1/list.php?c=list`
        );
        const data = await response.json();
        setCategories(data.mealsbycat.map((c: any) => c.strCategory));
        console.log(data.categories)
      } catch {
        setError("Ekki náðist að ná í flokka");
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  useEffect(() => {
    if (!category) return;

    const fetchMealsByCategory = async () => {
      setLoading(true);

      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`
      );
      const data = await res.json();
console.log(data)
      setMealsByCat(data.mealsByCat ?? []);
      setLoading(false);
    };

    fetchMealsByCategory();
  }, [category]);

  if (loading) return <p>Sæki uppskrift...</p>;
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
          <a href="/">Staðsetningu</a>
          <a href="uppskr_flokkur">Flokki</a>
          <a href="uppskrift_numer">Einkennisnúmeri</a>
          <a href="/">asdfasdf</a>
        </nav>
        <nav className="byCategory">
          Flokkur:
          {categories.map((category) => (
            <button
              className="btnLetter"
              key={category}
              onClick={() => setCategory(category)}
            >
              {category}
            </button>
          ))}
        </nav>
        {loading && <p>Hleð...</p>}
      </>
      <div>Hér koma uppskriftir 🐒 jksdfhkjsdhfksslkfzjlz</div>
      <div className="uppskrift">
        <h1>{category} uppskriftir:</h1>
        {mealsByCat.map((meal) => (
          <>
            <p
              style={{
                textDecoration: "underline",
                fontSize: "25px",
                fontWeight: "bold",
              }}
            >
              {meal.idCategory}
            </p>
            
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
