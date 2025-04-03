import React from "react"
export default function Main3() {
  /**
   * Challenge: use form action instead of onSubmit to
   * handle the data from the form
   */
  const [ingredients, setIngredients] = React.useState([])
  const ingredientsListItems = ingredients.map(ingredient=>(
    <li key={ingredient} className="mainLi">{ingredient}</li>
  ))
  function handleSubmit(formData){
    const newIngredient = formData.get("ingredient")
    setIngredients(prevIngredients => [...prevIngredients, newIngredient])
  }
  return (
      <main className="main">
          <form
          className="mainForm"
          action={handleSubmit}>
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