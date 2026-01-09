import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import type { ReactNode } from "react";
// import { useParams } from "react-router-dom";
// import type { Meals } from "../utils";
import type { Meals, MealsByCat } from "../utils";

export default function UppskriftFlokkur() {
  const URL_CATEGORIES =
    "https://www.themealdb.com/api/json/v1/1/list.php?c=list";
  const URL_RECIPES = "https://www.themealdb.com/api/json/v1/1/filter.php?c=";
  const [category, setCategory] = useState("");
  const [categories, setCategories] = useState([]);
  const [meals, setMeals] = useState<Meals[] | []>([]);
  const [mealsByCat, setMealsByCat] = useState<MealsByCat[] | []>([]);

  const [page, usePage] = useState(1);
  const pageSize = 5;

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(URL_CATEGORIES);
        const data = await response.json();
        setCategories(data.meals.slice(0, 9));
        setCategories(data.meals.map((c: any) => c.strCategory));
        console.log(data.categories);
      } catch {
        setError("Ekki náðist að ná í flokka");
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, [page]);

  useEffect(() => {
    if (!category) return;

    const fetchMealsByCategory = async () => {
      setLoading(true);
      try {
        const res = await fetch(`${URL_RECIPES}${category}&_limit=${pageSize}`);
        const data = await res.json();
        console.log(data);
        setMealsByCat(data.meals ?? []);
        setMeals(data.meals.slice(0, 5));
        setLoading(false);
      } catch {
        setError("Ekki náðist að ná í flokka :'(");
      } finally {
        setLoading(false);
      }
    };

    fetchMealsByCategory();
  }, [category]);

  if (loading) return <p>Sæki máltíðir...</p>;
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
          <a href="uppskr_flokk2">Flokki2</a>
          <a href="uppskrift_numer">Einkennisnúmeri</a>
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
        <h1>{category} máltíðir:</h1>
        <div>
          {mealsByCat.map((mealcat) => (
            <>
              {/* <img src={mealcat.strCategoryThumb} />
              <p
                style={{
                  textDecoration: "underline",
                  fontSize: "25px",
                  fontWeight: "bold",
                }}
              >
                {mealcat.strCategory} 
              </p>
              <p>{mealcat.strCategoryDescription}</p>
              <p>{mealcat.idCategory}</p> */}
            </>
          ))}

          {meals.map((meal) => (
            <>
              <img className="mealImg" src={meal.strMealThumb} />
              <p
                style={{
                  textDecoration: "underline",
                  fontSize: "25px",
                  fontWeight: "bold",
                }}
              >
                {meal.strMeal}
              </p>

            
              <p>Meal database: ID{meal.idMeal}</p>
            </>
          ))}
        </div>
        {error && <div>{error}</div>}
      </div>

      <div className="meal_buttons">
        <button
          disabled={page === 1}
          className="next_btn"
          onClick={() => usePage(page - 1)}
        >
          Fyrri uppskrift
        </button>
        Síða {page}
        <button className="next_btn" onClick={() => usePage(page + 1)}>
          Næsta uppskrift
        </button>
      </div>
    </>
  );
}
