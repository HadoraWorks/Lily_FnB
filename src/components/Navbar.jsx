import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { BRAND_NAME, NAV_LINKS, WHATSAPP_LINK } from '../utils/constants'

const MOBILE_BREAKPOINT = 1100

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isMobileLayout, setIsMobileLayout] = useState(() => {
    if (typeof window === 'undefined') {
      return false
    }

    return window.innerWidth <= MOBILE_BREAKPOINT
  })

  useEffect(() => {
    const handleResize = () => {
      const isNowMobile = window.innerWidth <= MOBILE_BREAKPOINT
      setIsMobileLayout(isNowMobile)

      if (!isNowMobile) {
        setIsMenuOpen(false)
      }
    }

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false)
      }
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    window.addEventListener('orientationchange', handleResize)
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('orientationchange', handleResize)
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  useEffect(() => {
    document.body.classList.toggle(
      'has-open-mobile-menu',
      isMobileLayout && isMenuOpen,
    )

    return () => {
      document.body.classList.remove('has-open-mobile-menu')
    }
  }, [isMobileLayout, isMenuOpen])

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  const toggleMenu = () => {
    setIsMenuOpen((current) => !current)
  }

  return (
    <header className={isMenuOpen ? 'navbar is-menu-open' : 'navbar'}>
      <div className="container navbar__inner" data-animate="reveal">
        <a className="brand" href="#home" onClick={closeMenu}>
          {BRAND_NAME}
        </a>

        {!isMobileLayout ? (
          <>
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
          </>
        ) : null}

        {isMobileLayout ? (
          <button
            type="button"
            className="navbar__toggle"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            onClick={toggleMenu}
          >
            {isMenuOpen ? (
              <X size={20} aria-hidden="true" />
            ) : (
              <Menu size={20} aria-hidden="true" />
            )}
          </button>
        ) : null}
      </div>

      {isMobileLayout ? (
        <div
          id="mobile-navigation"
          className="navbar__mobile"
          aria-hidden={!isMenuOpen}
        >
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
      ) : null}
    </header>
  )
}

export default Navbar
