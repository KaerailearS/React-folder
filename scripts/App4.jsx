import Contact from "./components/Contact"

/**
 * Challenge (I'm sorry!): Add all the rest of the
 * data to the contact card instances. 😈
 */

export default function App() {
  return (
    <div className="contacts">
            <Contact
              img="./images/mr-whiskerson.png"
              alt="Photo of Mr. Whiskerson"
              name="Mr. Whiskerson"
              phone="(212) 555-1234"
              email="mr.whiskaz@catnap.meow"
            />
            <Contact
              img="./images/fluffykins.png"
              alt="Photo of Fluffykins"
              name="Fluffykin"
              phone="(212) 555-2345"
              email="fluff@me.com"
            />
            <Contact
              img="./images/felix.png"
              alt="Photo of Felix"
              name="Felix"
              phone="(212) 555-4567"
              email="thecat@hotmail.com"
            />
            <Contact
              img="./images/pumpkin.png"
              alt="Photo of Pumpkin"
              name="Pumpkin"
              phone="(0800) CAT KING"
              email="pumpkin@scrimba.com"
            />
        </div>
  )
}
