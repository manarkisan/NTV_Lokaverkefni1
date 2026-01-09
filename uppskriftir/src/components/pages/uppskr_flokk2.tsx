import { act, useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import type { ReactNode } from "react";
// import { useParams } from "react-router-dom";
import type { Meals, MealsByCat } from "../utils";

export default function UppskriftFlokkur2() {
  const URL_CATEGORIES =
    "https://www.themealdb.com/api/json/v1/1/categories.php";
  const URL_RECIPIES = "https://www.themealdb.com/api/json/v1/1/filter.php?c=";
  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [meals, setMeals] = useState<Meals[] | []>([]);

  const [mealsByCat, setMealsByCat] = useState<MealsByCat[] | []>([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch(URL_CATEGORIES);
        const data = await res.json();
        setCategories(data.categories.slice(0, 9));
        setCategories(data.meals.map((c: any) => c.strCategory));
      } catch (error) {
        setError("Ekki náðist að ná í flokka");
      } finally {
        setLoading(false);
      }
    };
    fetchCategories();
  }, []);

  useEffect(() => {
    const fetchRecipies = async () => {
      try {
        const res = await fetch(`${URL_RECIPIES}${activeCategory}`);
        const data = await res.json();
        setMealsByCat(data.meals ?? []);
        setRecipes(data.meals.slice(0, 11));
      } catch (error) {
        setError("Ekki náðist að ná í flokka");
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    activeCategory && fetchRecipies();
  }, [activeCategory]);

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
          {categories.map((cat) => (
            <button
              className="btnLetter"
              key={activeCategory}
              onClick={() => setCategories(categories)}
            >
              {activeCategory}
            </button>
          ))}
        </nav>
        {loading && <p>Hleð...</p>}
      </>
      <div>Hér koma uppskriftir 🐒 TAKA 2!</div>
      <div className="uppskrift">
        <h1>{activeCategory} uppskriftir:</h1>
        <div>
          {mealsByCat.map((mealcat) => (
            <>
              <img src={mealcat.strCategoryThumb} />
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
              <p>ID: {mealcat.idCategory}</p>
            </>
          ))}
        </div>
        <div>
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

              <p>Country of origin: {meal.strArea}</p>
              <p>
                Type: <i>{meal.strCategory}</i>
              </p>
              <p>
                <b>Ingredients: </b>
                <br />
                {meal.strIngredient1}, {meal.strIngredient2},{" "}
                {meal.strIngredient3},{meal.strIngredient4},{" "}
                {meal.strIngredient5}, {meal.strIngredient6},
                {meal.strIngredient7}, {meal.strIngredient8},{" "}
                {meal.strIngredient9}, {meal.strIngredient10},{" "}
                {meal.strIngredient11}, {meal.strIngredient12},{" "}
                {meal.strIngredient13}, {meal.strIngredient14}.
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
        </div>
        {error && <div>{error}</div>}
      </div>
    </>
  );
}
