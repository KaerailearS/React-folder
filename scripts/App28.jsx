import React from "react"
import Header from "./components/Header6.jsx"
import Body from "./components/Body.jsx"

export default function App() {
    const [userName, setUserName] = React.useState("Joe")
    return (
        <main>
            <Header 
                name = {userName}
            />
            <Body
                name = {userName}
            />
        </main>
    )
}
