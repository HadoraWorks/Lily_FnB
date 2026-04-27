import { Camera, Globe, MapPin, MessageCircle, Music2, Users } from 'lucide-react'
import {
  ADDRESS,
  BRAND_NAME,
  NAV_LINKS,
  SOCIAL_LINKS,
  WHATSAPP_LINK,
} from '../utils/constants'

const socialIconMap = {
  Instagram: Camera,
  Facebook: Users,
  TikTok: Music2,
}

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div>
          <h3>{BRAND_NAME}</h3>
          <p>
            Warm meals, honest flavors, and a space designed for meaningful
            moments.
          </p>
        </div>

        <div>
          <h4>Navigation</h4>
          <ul>
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4>Contact</h4>
          <p className="footer__contact-item">
            <MapPin size={16} aria-hidden="true" /> {ADDRESS}
          </p>
          <a
            className="footer__contact-item"
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noreferrer"
          >
            <MessageCircle size={16} aria-hidden="true" /> WhatsApp Reservation
          </a>
        </div>

        <div>
          <h4>Social Media</h4>
          <ul>
            {SOCIAL_LINKS.map((social) => {
              const Icon = socialIconMap[social.label] ?? Globe
              return (
                <li key={social.label}>
                  <a href={social.href} target="_blank" rel="noreferrer">
                    <Icon size={16} aria-hidden="true" /> {social.label}
                  </a>
                </li>
              )
            })}
          </ul>
        </div>
      </div>

      <div className="container footer__bottom">
        <p>
          &copy; {currentYear} {BRAND_NAME}. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
