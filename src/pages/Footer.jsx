import { Icon } from './Icons.jsx'
import footerLogo from '../assets/AcruxSiriuslogo-1.png'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <div className="footer-lockup">
            <img src={footerLogo} alt="Acrux Sirius Technologies" />
            <div className="footer-brand-name">
              <strong>ACRUX SIRIUS</strong>
              <span>TECHNOLOGIES</span>
            </div>
          </div>
          <p>Building the future. Powering possibilities. Through innovation, technology, gaming and infrastructure, we create solutions that impact lives and transform communities.</p>
          <div className="socials">
            <a href="#" aria-label="LinkedIn"><Icon name="linkedin" size={17} /></a>
            <a href="#" aria-label="Instagram">◎</a>
            <a href="#" aria-label="X">𝕏</a>
            <a href="#" aria-label="YouTube">▶</a>
          </div>
        </div>

        <div className="footer-column">
          <h4>Quick Links</h4>
          <a href="#home">Home</a><a href="#about">About Us</a><a href="#companies">Our Companies</a>
          <a href="#services">Services</a><a href="#projects">Projects</a><a href="#insights">Insights</a><a href="#contact">Contact</a>
        </div>

        <div className="footer-column">
          <h4>Our Companies</h4>
          <a href="#companies">GamersLoungeX</a><a href="#companies">Acrux Sirius Technologies</a><a href="#companies">Acrux Sirius Asset & Infrastructure Manager</a>
        </div>

        <div className="footer-column">
          <h4>Services</h4>
          <a href="#services">Digital Solutions</a><a href="#services">Asset Management</a><a href="#services">Renovation</a>
          <a href="#services">Construction</a><a href="#services">Project Management</a><a href="#services">Consulting</a>
        </div>

        <div className="footer-column contact-column">
          <h4>Contact Us</h4>
          <p><Icon name="mail" size={14} /> <span>hello@acruxsirius.com</span></p>
          <p><Icon name="globe" size={14} /> <span>www.acruxsirius.com</span></p>
          <p><Icon name="pin" size={14} /> <span>Akure, Ondo State,<br />Nigeria.</span></p>
        </div>
      </div>
      <div className="container copyright">© 2026 Acrux Sirius Technologies. All Rights Reserved.</div>
    </footer>
  )
}
