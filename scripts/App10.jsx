import Header from "./components/Header"
import Entry3 from "./components/Entry3"
import travelData from "./data/travelData"

/**
 * Challenge:
 * - import the array of data from data.js
 * - map over the array to create an <Entry /> component
 *   for every item in the data array.
 * - display the array of Entry components in place of the current
 *   hard-coded <Entry /> instance.
 */

export default function App10() {
    const entryElements = travelData.map((location)=>{
        return <Entry3 
            key={location.id}
            location={location}
        />
    })
    return (
        <>
            <Header />
            <main className="container">
                {entryElements}
            </main>
        </>
    )
}