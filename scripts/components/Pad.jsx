import React from "react";

export default function Pad(props){
  const buttonStyles={
    backgroundColor:props.color
  };
  const buttonClass= props.on ? "on" : "";
  return (
    <button
      style={buttonStyles}
      className={buttonClass}
      onClick={()=>props.toggle(props.id)}
    ></button>
  )
}
/*
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
* Challenge part 3:
* Our buttons got turned off by default! Update the code
* so if the button is "on", it has the className of "on".
* 
* Challenge part 4: Create state controlling whether
* this pad is "on" or "off". Use the incoming
* `props.on` to determine the initial state.
* 
* Create an event listener so when the pad is clicked,
* it toggles from "on" to "off".
* 
* Goal: clicking each pad should toggle it on and off.
*/