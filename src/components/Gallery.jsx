import { GALLERY_IMAGES } from '../utils/constants'

function Gallery() {
  return (
    <section id="gallery" className="section">
      <div className="container gallery">
        <div className="section-heading" data-animate="reveal">
          <h2>Ambience &amp; Experience</h2>
          <p>A glimpse into the atmosphere we create for every guest.</p>
        </div>

        <div className="gallery-grid" data-animate="stagger">
          {GALLERY_IMAGES.map((image) => (
            <figure key={image.src} className="gallery-item" data-stagger-item>
              <img src={image.src} alt={image.alt} loading="lazy" decoding="async" />
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Gallery
