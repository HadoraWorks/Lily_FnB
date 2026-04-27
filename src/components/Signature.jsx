import { SIGNATURE_ITEMS } from '../utils/constants'

function Signature() {
  return (
    <section id="signature" className="section section--neutral">
      <div className="container signature">
        <div className="section-heading" data-animate="reveal">
          <h2>Chef&apos;s Recommendation</h2>
          <p>
            Discover our most loved dishes, crafted to bring out bold flavors
            and satisfying textures.
          </p>
        </div>

        <div className="signature-grid" data-animate="stagger">
          {SIGNATURE_ITEMS.map((item) => (
            <article key={item.title} className="signature-card" data-stagger-item>
              <img src={item.image} alt={item.title} loading="lazy" decoding="async" />
              <div className="signature-card__content">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Signature
