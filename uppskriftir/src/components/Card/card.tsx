
import type { Meals } from "../utils";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import classes from './card.styles.module.css'

export default function Card () {
    const [recipe, setRecipe] = useState<Meals | null>(null);
    const [ingredient, setIngredient] = useState<string[]>([]);
    const [measures, setMeasures] = useState<string[]>([]);
    const URL_DETAILS = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=';
    const {id} = useParams();
    
    useEffect(() => {
        const fetchRecipeDetail = async() => {
            try{
                const res = await fetch(`${URL_DETAILS}${id}`)
                const data = await res.json()
                console.log(data.meals[0])
                setRecipe(data.meals[0])

                Object.keys(data.meals[0]).forEach((key) => {
                    if(key.includes('strIngredient') && data.meals[0][key] !== ''){
                        setIngredient(prev => {
                            if(prev.length === 0) return [data.meals[0][key]]
                            else return [...prev, data.meals[0][key]]
                        })
                    }

                    if(key.includes('strMeasure') && data.meals[0][key] !== ''){
                        setMeasures(prev => {
                            if(prev.length === 0) return [data.meals[0][key]]
                            else return [...prev, data.meals[0][key]]
                        })
                    }
                })
            } catch (error) {
                console.error(error)
            } finally {

            }
        }
        fetchRecipeDetail()
    }, [id])

    return (
        <>
        <div className="recipe_card">
           
            
                 <div className={classes.container}>
            <div className={classes.wrapper}>
                <h2>meal detail</h2>
                <div className={classes.recipe}>
                    <img src={recipe?.strMealThumb}/>
                    <div className={classes.metadata}>
                        Title: {recipe?.strMeal}
                    </div>
                    <h3>Ingredients</h3>
                    <div className={classes.ingredient}>
                        {ingredient.map((ing, i) => (
                            <div key={ing} className={classes.ingredient}>
                                <span>{ing}</span>
                                -
                                <span>{ing} - {measures[i]}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>

          
        </div>
        
       
        
        </>
    )
}
