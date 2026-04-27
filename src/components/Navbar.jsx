import { BRAND_NAME, NAV_LINKS, WHATSAPP_LINK } from '../utils/constants'

function Navbar() {
  return (
    <header className="navbar">
      <div className="container navbar__inner" data-animate="reveal">
        <a className="brand" href="#home">
          {BRAND_NAME}
        </a>

        <nav className="navbar__links" aria-label="Primary navigation">
          {NAV_LINKS.map((link) => (
            <a key={link.href} className="navbar__link" href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <a
          className="btn btn--primary navbar__cta"
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noreferrer"
        >
          Reserve via WhatsApp
        </a>
      </div>
    </header>
  )
}

export default Navbar
