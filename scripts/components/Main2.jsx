/**
 * Challenge: Build out the main content section!
 * 
 * For now, skip 2 aspects of the design and we'll work on them later:
 *   1. The colored bullets in the list
 *   2. The larger gray React logo on the side
 */

export default function Main2() {
  return (
      <main className="main">
        <form className="mainForm">
          <input
          className="mainInput"
          type="text"
          placeholder="e.g. oregano"
          aria-label="Add ingredient"/>
          <button className="mainButton">Add ingredient</button>
        </form>
      </main>
  )
}