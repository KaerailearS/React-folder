import Header from "./components/Header"
import Entry2 from "./components/Entry2"
import travelData from "./data/travelData"

/**
 * Challenge:
 * - import the array of data from data.js
 * - map over the array to create an <Entry /> component
 *   for every item in the data array.
 * - display the array of Entry components in place of the current
 *   hard-coded <Entry /> instance.
 */

export default function App9() {
    const entryElements = travelData.map((location)=>{
        return <Entry2 
            key={location.id}
            img={{
                src:location.img.src,
                alt:location.img.alt
            }}
            title={location.title}
            country={location.country}
            googleMapsLink={location.googleMapsLink}
            dates={location.dates}
            text={location.text}
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