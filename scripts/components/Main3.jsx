export default function Main3() {
  const ingredients = ["Chicken", "Oregano", "Tomatoes"]
  /**
   * Review Challenge:
   * Map over the list of ingredients and render them as list items
   * 
   * Note: We're doing things a weird way here. Don't worry,
   * we're building up to learning the right way 🙂
   * 
   * Challenge:
   * Add an `onSubmit` event listener on the form. Have the function
   * simply console.log("Form submitted!") for now
   */
    
  const ingredientsListItems = ingredients.map(ingredient=>(
    <li key={ingredient}>{ingredient}</li>
  ))
  function handleSubmit(event){
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const newIngredient = formData.get("ingredient")
    ingredients.push(newIngredient)
    console.log(ingredients)
  }
  return (
      <main>
          <form
          className="add-ingredient-form"
          onSubmit={handleSubmit}>
              <input 
                  type="text"
                  placeholder="e.g. oregano"
                  aria-label="Add ingredient"
                  name="ingredient"
              />
              <button>Add ingredient</button>
          </form>
          <ul>
              {ingredientsListItems}
          </ul>
      </main>
  )
}