import { Icon } from './Icons.jsx'
import heroBanner from '../assets/hero-banner.png'

const values = [
  ['spark', 'Innovation', 'Driven'],
  ['chip', 'Technology', 'Empowered'],
  ['target', 'Impact', 'Focused'],
  ['shield', 'Integrity', 'First'],
]

export default function Hero() {
  return (
    <section className="hero section" id="home">
      <div className="hero-glow hero-glow-one" />
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">THE LEADING LIGHT IN YOUR DIGITAL JOURNEY</p>
          <h1>
            BUILDING TODAY.<br />
            EMPOWERING TOMORROW.<br />
            SHAPING <span>LEGACIES.</span>
          </h1>
          <p className="hero-description">
            Acrux Sirius Technologies is a diversified company delivering innovative solutions in technology,
            gaming, and infrastructure development. Three companies. One vision. Limitless impact.
          </p>

          <div className="hero-actions">
            <a className="pill-button primary" href="#companies">
              <span>Discover Our Companies</span>
              <span className="button-arrow"><Icon name="arrow" size={15} /></span>
            </a>
            <a className="pill-button ghost" href="#projects">
              <span>Explore Our Projects</span>
              <span className="button-arrow"><Icon name="arrow" size={15} /></span>
            </a>
          </div>

          <div className="value-row">
            {values.map(([icon, top, bottom]) => (
              <div className="value-item" key={top}>
                <span className="value-icon"><Icon name={icon} size={25} /></span>
                <span>{top}<br />{bottom}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="hero-art" aria-label="Futuristic purple illuminated Acrux Sirius tower">
          <div className="hero-art-glow" />
          <img src={heroBanner} alt="Futuristic purple illuminated tower" />
        </div>
      </div>
    </section>
  )
}
