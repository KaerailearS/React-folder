import {createRoot} from "react-dom/client"
import App from "./App39.jsx"
/**
 * Challenge:
 * - Create a Contact component in another file
 * - Move one of the contact card articles below into that file
 * - import and render 4 instances of that contact card
 *     - Think ahead: what's the problem with doing it this way?
 * ---
 * Hardcoding 4 of the same infoblock?
 * ---
 * Note; Did not import image files; images will not work
 */

const root = createRoot(document.getElementById("root"))
root.render(<App />)