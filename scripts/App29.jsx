import React from "react"
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
     */
    const [array, setArray] = React.useState(pads)
    const buttonDarkMode={
        backgroundColor:"#222222"
    }
    const buttonLightMode={
        backgroundColor:"#cccccc"
    }
    const buttonElements = array.map(pad=>(
        <button style={props.darkMode ? buttonDarkMode : buttonLightMode}key={pad.id}></button>
    ))
    return (
        <main>
            <div className="pad-container">
                {buttonElements}
            </div>
        </main>
    )
}
