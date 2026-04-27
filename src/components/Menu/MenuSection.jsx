import { useEffect, useRef, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { menuCategories } from '../../data/menuData'
import { WHATSAPP_LINK } from '../../utils/constants'
import MenuItem from './MenuItem'
import MenuTabs from './MenuTabs'

function MenuSection() {
  const [activeTab, setActiveTab] = useState(menuCategories[0]?.id ?? '')
  const carouselRef = useRef(null)

  const activeCategory =
    menuCategories.find((category) => category.id === activeTab) ??
    menuCategories[0]

  const tabs = menuCategories.map(({ id, label }) => ({ id, label }))

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollTo({ left: 0, behavior: 'auto' })
    }
  }, [activeTab])

  if (!activeCategory) {
    return null
  }

  const scrollCarousel = (direction) => {
    const container = carouselRef.current
    if (!container) {
      return
    }

    const firstCard = container.querySelector('.menu-item')
    const cardWidth = firstCard?.getBoundingClientRect().width ?? 300
    const gapValue = getComputedStyle(container).gap
    const gap = Number.parseFloat(gapValue) || 14
    const step = cardWidth + gap
    const offset = direction === 'next' ? step : -step

    container.scrollBy({
      left: offset,
      behavior: 'smooth',
    })
  }

  return (
    <section id="menu" className="section">
      <div className="container menu">
        <div className="section-heading" data-animate="reveal">
          <h2>Our Menu</h2>
          <p>Choose your favorites from our thoughtfully prepared selections.</p>
        </div>

        <MenuTabs tabs={tabs} activeTab={activeTab} onChange={setActiveTab} />

        <div className="menu-carousel-controls" data-animate="reveal">
          <button
            type="button"
            className="menu-carousel-button"
            onClick={() => scrollCarousel('prev')}
            aria-label="Show previous menu items"
          >
            <ChevronLeft size={18} aria-hidden="true" />
          </button>
          <button
            type="button"
            className="menu-carousel-button"
            onClick={() => scrollCarousel('next')}
            aria-label="Show next menu items"
          >
            <ChevronRight size={18} aria-hidden="true" />
          </button>
        </div>

        <div
          id={`panel-${activeCategory.id}`}
          role="tabpanel"
          aria-labelledby={`tab-${activeCategory.id}`}
          className="menu-carousel"
          data-animate="stagger"
          ref={carouselRef}
        >
          {activeCategory.items.map((item) => (
            <MenuItem
              key={item.name}
              name={item.name}
              price={item.price}
              description={item.description}
              image={item.image}
              imageAlt={item.imageAlt}
            />
          ))}
        </div>

        <div className="menu__footer" data-animate="reveal">
          <a
            className="text-link"
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noreferrer"
          >
            View Full Menu
          </a>
        </div>
      </div>
    </section>
  )
}

export default MenuSection
