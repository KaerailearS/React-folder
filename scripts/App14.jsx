import React from "react"

export default function App() {
    /**
     * Challenge: 
     * Create state to track our count value (initial value is 0)
     * Don't forget to replace the hard-coded "0" with your new state

     * Challenge: 
     * Create a function called `add` that runs
     * when the + button is clicked. (Can just console.log("add") for now)

     * Challenge: 
     * See if you can think of a way to add 1 to the count
     * every time the + button is clicked
     * 
     * Challenge: 
     * Add functionality to the minus button
     */
    const [count, setCount] = React.useState(0)
    function addCount(){
        setCount(prevCount=> prevCount+1)
    }
    function reduceCount(){
        setCount(prevCount=> prevCount-1)
    }
    return (
        <main className="container">
            <h1>How many times will Bob say "state" in this section?</h1>
            <div className="counter">
                <button className="minus" aria-label="Decrease count" onClick={reduceCount}>–</button>
                <h2 className="count">{count}</h2>
                <button className="plus" aria-label="Increase count" onClick={addCount}>+</button>
            </div>
        </main>
    )
}
