import { Star } from 'lucide-react'
import { testimonialData } from '../data/testimonialData'

function Testimonial() {
  const marqueeItems = [...testimonialData, ...testimonialData]

  return (
    <section id="testimonials" className="section">
      <div className="container testimonials">
        <div className="section-heading" data-animate="reveal">
          <h2>What Our Guests Say</h2>
          <p>Stories from guests who enjoyed their moments at Lily Cafe n Resto.</p>
        </div>

        <div className="testimonial-marquee" data-animate="reveal">
          <div className="testimonial-grid">
            {marqueeItems.map((item, index) => (
              <article
                key={`${item.author}-${index}`}
                className="testimonial-card"
                aria-hidden={index >= testimonialData.length}
              >
                <p className="testimonial-card__stars" aria-label="5 out of 5 stars">
                  {Array.from({ length: 5 }).map((_, starIndex) => (
                    <Star key={starIndex} size={14} fill="currentColor" aria-hidden="true" />
                  ))}
                </p>
                <p className="testimonial-card__quote">&ldquo;{item.quote}&rdquo;</p>
                <p className="testimonial-card__author">{item.author}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonial
