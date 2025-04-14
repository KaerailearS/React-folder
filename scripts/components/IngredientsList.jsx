export default function IngredientsList(props){
  const ingredientsListItems = props.ingredients.map(ingredient => (
    <li key={ingredient}>{ingredient}</li>
))
  return (
    <section>
      <h2>Ingredients on hand:</h2>
        <ul className="ingredients-list" aria-live="polite">{ingredientsListItems}</ul>
        {props.ingredients.length > 3 && <div className="get-recipe-container">
            <div>
              <h3>Ready for a recipe?</h3>
              <p>Generate a recipe from your list of ingredients.</p>
            </div>
            <button onClick={props.getRecipe}>Get a recipe</button>
          </div>
        }
    </section>
  )
}

/* -- dumping site -- 

import React from "react"
import { getRecipeFromMistral } from "../ai"
const [recipe, setRecipe] = React.useState("")
const [loading, setLoading] = React.useState(false)
const handleGetRecipe = async ()=>{
setLoading(true)
const response = await getRecipeFromMistral(props.ingredients)
setRecipe(response)
setLoading(false)
}
(
<div className="get-recipe-container">
<div>
<h3>Ready for a recipe?</h3>
<p>Generate a recipe from your list of ingredients.</p>
</div>
<button onClick={handleGetRecipe}>Get a recipe</button>
</div>
)}
{loading && <p>Loading recipe...</p>}
{recipe && (
<section className="recipe">
<h3>Here's your recipe:</h3>
<div style={{whiteSpace: "pre-wrap"}}>{recipe}</div>
</section>
)}
*/