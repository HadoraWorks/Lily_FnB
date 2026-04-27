const highlights = [
  'Freshly prepared dishes',
  'Comfortable and warm ambience',
  'Suitable for family and casual gatherings',
]

function About() {
  return (
    <section id="about" className="section section--neutral">
      <div className="container about">
        <div className="section-heading" data-animate="reveal">
          <h2>A Place to Slow Down and Enjoy</h2>
          <p>
            Lily Cafe n Resto is designed as a comfortable escape from the pace
            of daily life. We serve thoughtfully prepared dishes using quality
            ingredients, bringing together familiar flavors with a refined touch.
            Whether you are here for a casual lunch, a family dinner, or a
            quiet coffee, every detail is made to feel welcoming.
          </p>
        </div>

        <ul className="about__highlights" data-animate="stagger">
          {highlights.map((item) => (
            <li key={item} data-stagger-item>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default About
