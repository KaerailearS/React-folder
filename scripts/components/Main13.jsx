import React from "react"
import ClaudeRecipe from "./ClaudeRecipe"
import IngredientsList from "./IngredientsList"
import { getRecipeFromMistral } from "../ai"
 /**
     * Challenge:
     * Add a new effect that calls `recipeSection.current.scrollIntoView()`
     * only if recipe is not an empty string and recipeSection.current is not null.
     * Think carefully about what value(s) you would want to include in
     * the dependencies array.
 */

export default function Main() {

    const [ingredients, setIngredients] = React.useState([])
    const [recipe, setRecipe] = React.useState("")
    const recipeSection = React.useRef(null)

    async function getRecipe(){
        const recipeMarkdown = await getRecipeFromMistral(ingredients)
        setRecipe(recipeMarkdown)
    }

    function addIngredient(formData) {
        const newIngredient = formData.get("ingredient")
        setIngredients(prevIngredients => [...prevIngredients, newIngredient])
    }
    React.useEffect(()=>{
        if(recipe !== "" && recipeSection.current !== null){
        recipeSection.current.scrollIntoView({behavior: "smooth"})
        }},[recipe]
    )
    return (
        <main>
            <form action={addIngredient} className="add-ingredient-form">
                <input
                    type="text"
                    placeholder="e.g. oregano"
                    aria-label="Add ingredient"
                    name="ingredient"
                />
                <button>Add ingredient</button>
            </form>
            {ingredients.length > 0 &&
            <IngredientsList
                ref={recipeSection}
                ingredients={ingredients}
                getRecipe={getRecipe}
                />}

            {recipe && <ClaudeRecipe recipe={recipe}/>}
        </main>
    )
}