import { Icon } from './Icons.jsx'
import logoMark from '../assets/AcruxSiriuslogo-1.png'

export default function CTA() {
  return (
    <section className="cta-section" id="contact">
      <div className="container">
        <div className="cta-panel">
          <img src={logoMark} alt="Acrux Sirius Technologies logo" className="cta-logo" />
          <div className="cta-copy">
            <h2>Let's Build The Future Together</h2>
            <p>Whether you have a project in mind, want to partner or just want to say hello, we'd love to hear from you.</p>
          </div>
          <a className="pill-button primary cta-button" href="mailto:hello@acruxsirius.com">
            <span>Get In Touch</span>
            <span className="button-arrow"><Icon name="arrow" size={15} /></span>
          </a>
        </div>
      </div>
    </section>
  )
}
