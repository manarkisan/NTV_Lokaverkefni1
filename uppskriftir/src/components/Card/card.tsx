import "/card.styles.css"
import type { Meals } from "../utils";
import { Link } from "react-router-dom";

export default function Card ({post}: { post: Meals }) {
    return (
        <div className="recipe_card">
            <Link to={`/uppskriftir/${post.idMeal}`} className="recipe_card_link">
            
            </Link>
        </div>
    )
}
