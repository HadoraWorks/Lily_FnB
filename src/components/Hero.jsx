import { BRAND_NAME, WHATSAPP_LINK } from '../utils/constants'

const HERO_IMAGE =
  'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=80'

function Hero() {
  return (
    <section id="home" className="section hero">
      <div className="container hero__grid">
        <div className="hero__copy" data-animate="reveal">
          <p className="eyebrow">Welcome to</p>
          <h1>{BRAND_NAME}</h1>
          <p className="hero__lead">
            A warm and cozy dining space crafted for meaningful moments and
            honest flavors.
          </p>
          <div className="hero__actions">
            <a
              className="btn btn--primary"
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noreferrer"
            >
              Reserve via WhatsApp
            </a>
            <a className="btn btn--outline" href="#menu">
              View Menu
            </a>
          </div>
        </div>

        <figure className="hero__media" data-animate="reveal">
          <img
            src={HERO_IMAGE}
            alt="Plated dishes on a cozy dining table"
            loading="eager"
            decoding="async"
          />
        </figure>
      </div>
    </section>
  )
}

export default Hero
