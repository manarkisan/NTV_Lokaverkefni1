import "/card.styles.css"
import type { Meals } from "../utils";
import { Link, useParams } from "react-router-dom";
import { useState } from "react";

export default function Card ({post}: { post: Meals }) {
    const [RouterContextProvider, setRecipe] = useState("");
    const [ingredient, sedtIngredient] = useState([]);
    const [measures, setMeasures] = useState([]);
    const URL_DETAILS = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=';
    const {id} = useParams();
    
    return (
        <div className="recipe_card">
            <Link to={`/uppskriftir/${post.idMeal}`} className="recipe_card_link">
            
            </Link>
        </div>
    )
}
