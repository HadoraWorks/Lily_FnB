import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { BRAND_NAME, NAV_LINKS, WHATSAPP_LINK } from '../utils/constants'

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 960) {
        setIsMenuOpen(false)
      }
    }

    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  const toggleMenu = () => {
    setIsMenuOpen((current) => !current)
  }

  return (
    <header className="navbar">
      <div className="container navbar__inner" data-animate="reveal">
        <a className="brand" href="#home" onClick={closeMenu}>
          {BRAND_NAME}
        </a>

        <nav className="navbar__links" aria-label="Primary navigation">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              className="navbar__link"
              href={link.href}
              onClick={closeMenu}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          className="btn btn--primary navbar__cta navbar__cta--desktop"
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noreferrer"
        >
          Reserve via WhatsApp
        </a>

        <button
          type="button"
          className="navbar__toggle"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          onClick={toggleMenu}
        >
          {isMenuOpen ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
        </button>
      </div>

      <div id="mobile-navigation" className="navbar__mobile" hidden={!isMenuOpen}>
        <div className="container navbar__mobile-inner">
          <nav className="navbar__mobile-links" aria-label="Mobile navigation">
            {NAV_LINKS.map((link) => (
              <a
                key={`mobile-${link.href}`}
                className="navbar__link"
                href={link.href}
                onClick={closeMenu}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <a
            className="btn btn--primary navbar__cta navbar__mobile-cta"
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noreferrer"
            onClick={closeMenu}
          >
            Reserve via WhatsApp
          </a>
        </div>
      </div>
    </header>
  )
}

export default Navbar
