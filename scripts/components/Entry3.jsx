/**
 * Challenge: Fix our component! 😱
 */

export default function Entry3(props){
  return (
    <article className="article3">
      <div className="image3-container">
        <img className="image3"
          src={props.location.img.src}
          alt={props.location.img.alt}
        />
      </div>
      <div>
        <img className="image3-2" src="../../images/marker.png" alt="Map marker icon" />
        <span className="span3">{props.location.country}</span>
        <a className="anchor3" href={props.location.googleMapsLink}>View on Google Maps</a>
        <h2 className="heading3">{props.location.title}</h2>
        <p className="paragraph3">{props.location.dates}</p>
        <p className="paragraph3-2">{props.location.text}</p>
      </div>
    </article>
  )
}