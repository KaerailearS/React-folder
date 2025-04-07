import React from "react"
import Pad from './components/Pad.jsx'
import pads from "./data/pads.js"

export default function App(props) {
    /**
     * Challenge part 1:
     * Initialize state with the default value of the
     * array pulled in from pads.js
     * 
     * Map over that state array and display each one
     * as a <button> (CSS is already written for you)
     * (Don't worry about using the "on" or "color" 
     * properties yet)
     * 
     * Challenge: use a ternary to determine the backgroundColor
     * of the buttons
     * If darkMode is true, set them to "#222222"
     * If darkMode is false, set them to "#cccccc"
     * 
     * Challenge part 2:
     * 1. Create a separate component called "Pad" and
     *    replace the `button` above with our <Pad /> component
     * 2. Pass the Pad component a prop called `color` with the
     *    value of the same name from the `padsData` objects
     * 3. In the Pad component, apply an inline style to the <button>
     *    to set the backgroundColor of the button.
     * 
     * (We'll deal with the "on" property soon)
     */
    const [array, setArray] = React.useState(pads)
    const buttonElements = array.map(pad=>(
        <Pad 
            key={pads.id}
            color={pads.color}
        />
    ))
    return (
        <main>
            <div className="pad-container">
                {buttonElements}
            </div>
        </main>
    )
}
