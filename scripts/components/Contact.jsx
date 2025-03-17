/**
 * Challenge: Fix the code below to use the `props`
 * object values in place of the hardcoded values below
 * 
 * Note: There will be a small bug in the code, so do your
 * best to squash it! 🐛

 * Challenge: fix the bug, now that we've 
 * destructured the props object
 */
export default function Contact({img, alt, name, phone, email}) {
  return (
      <article className="contact-card">
          <img
              src={img}
              alt={alt}
          />
          <h3>{name}</h3>
          <div className="info-group">
              <img
                  src="./images/phone-icon.png"
                  alt="phone icon"
              />
              <p>{phone}</p>
          </div>
          <div className="info-group">
              <img
                  src="./images/mail-icon.png"
                  alt="mail icon"
              />
              <p>{email}</p>
          </div>
      </article>
  )
}
