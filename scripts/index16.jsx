/* 
Challenge: Place the gray react logo in the background

Don't use an `img` element, but rather set it as the
`background-image` of the `main` element.

Hint: you'll need to use the following properties:
- background-image: url(...)
- background-repeat
- background-position

(Or the shorthand `background` property with values for all
those other properties)
*/

import { createRoot } from "react-dom/client"
import { App } from "./app.jsx";
const root = createRoot(document.getElementById("root"))

root.render(
  <>
    <App />
  </>
)