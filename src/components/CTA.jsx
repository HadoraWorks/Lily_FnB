import { WHATSAPP_LINK } from '../utils/constants'

function CTA() {
  return (
    <section id="reserve" className="section cta">
      <div className="container">
        <div className="cta-card" data-animate="reveal">
          <h2>Reserve Your Table Today</h2>
          <p>
            Secure your spot and enjoy a relaxed dining experience at Lily Cafe n
            Resto.
          </p>
          <a
            className="btn btn--accent"
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noreferrer"
          >
            WhatsApp Reservation
          </a>
        </div>
      </div>
    </section>
  )
}

export default CTA
