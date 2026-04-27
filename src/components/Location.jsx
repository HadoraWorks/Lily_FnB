import { Clock3, MapPin } from 'lucide-react'
import {
  ADDRESS,
  MAPS_EMBED,
  MAPS_LINK,
  OPEN_HOURS,
  WHATSAPP_LINK,
} from '../utils/constants'

function Location() {
  return (
    <section id="location" className="section section--neutral">
      <div className="container location">
        <div className="location__content" data-animate="reveal">
          <h2>Visit Us</h2>
          <p>
            Lily Cafe n Resto is located in a convenient and accessible area,
            perfect for both quick visits and relaxed dining.
          </p>

          <div className="location__details">
            <div>
              <h3>
                <MapPin size={18} aria-hidden="true" /> Address
              </h3>
              <p>{ADDRESS}</p>
            </div>
            <div>
              <h3>
                <Clock3 size={18} aria-hidden="true" /> Open Hours
              </h3>
              <p>{OPEN_HOURS}</p>
            </div>
          </div>

          <div className="location__actions">
            <a className="btn btn--outline" href={MAPS_LINK} target="_blank" rel="noreferrer">
              Open in Google Maps
            </a>
            <a
              className="btn btn--primary"
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noreferrer"
            >
              Reserve via WhatsApp
            </a>
          </div>
        </div>

        <div className="location__map" data-animate="reveal">
          <iframe
            title="Lily Cafe n Resto map"
            src={MAPS_EMBED}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  )
}

export default Location
