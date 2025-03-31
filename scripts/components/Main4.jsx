import React from "react"
export default function Main3() {
  /**
   * Challenge: Update our app so that when the user enters a
   * new ingredient and submits the form, it adds that new
   * ingredient to our list!
   */
  const [ingredients, setIngredients] = React.useState([])
  const ingredientsListItems = ingredients.map(ingredient=>(
    <li key={ingredient} className="mainLi">{ingredient}</li>
  ))
  function handleSubmit(event){
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const newIngredient = formData.get("ingredient")
    setIngredients(prevIngredients => [...prevIngredients, newIngredient])
  }
  return (
      <main className="main">
          <form
          className="mainForm"
          onSubmit={handleSubmit}>
              <input 
                  type="text"
                  className="mainInput"
                  placeholder="e.g. oregano"
                  aria-label="Add ingredient"
                  name="ingredient"
              />
              <button className="mainButton">Add ingredient</button>
          </form>
          <ul className="mainUl">
              {ingredientsListItems}
          </ul>
      </main>
  )
}