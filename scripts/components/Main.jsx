/**
 * Challenge: Build out the main content section!
 * 
 * For now, skip 2 aspects of the design and we'll work on them later:
 *   1. The colored bullets in the list
 *   2. The larger gray React logo on the side
 */

export default function Main() {
  return (
      <main className="main">
      <h1 className="mainheading">Fun facts about React</h1>
      <ul className="facts-list">
        <li className="list-item">Was first released in 2013</li>
        <li className="list-item">Was originally created by Jordan Walke</li>
        <li className="list-item">Has well over 200k stars on GitHub</li>
        <li className="list-item">Is maintained by Meta</li>
        <li className="list-item">Powers thousands of enterprise apps, including mobile apps</li>
      </ul>
      </main>
  )
}