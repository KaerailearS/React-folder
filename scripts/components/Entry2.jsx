export default function Entry2(props){
  return (
    <article className="article3">
      <div className="image3-container">
        <img className="image3"
          src={props.img.src}
          alt={props.img.alt}
        />
      </div>
      <div>
        <img className="image3-2" src="../../images/marker.png" alt="Map marker icon" />
        <span className="span3">{props.country}</span>
        <a className="anchor3" href={props.googleMapsLink}>View on Google Maps</a>
        <h2 className="heading3">{props.title}</h2>
        <p className="paragraph3">{props.dates}</p>
        <p className="paragraph3-2">{props.text}</p>
      </div>
    </article>
  )
}