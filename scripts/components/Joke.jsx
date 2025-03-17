export default function Joke(props){
  return (
    <>
      {props.setup && <h1>Setup: {props.setup}</h1>}
      <h1>Punchline: {props.punchline}</h1>
      <hr />
    </>
  )
}