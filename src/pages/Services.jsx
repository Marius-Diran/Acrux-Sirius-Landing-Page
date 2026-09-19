import { Icon } from './Icons.jsx'
import serviceDigital from '../assets/service-digital.png'
import serviceGaming from '../assets/service-gaming.png'
import serviceInfra from '../assets/service-infra.png'
import serviceConsulting from '../assets/service-consulting.png'

const services = [
  [serviceDigital, 'code', 'Digital Solutions', 'Web, mobile and software solutions built to solve real problems.'],
  [serviceGaming, 'gamepad', 'Gaming Experiences', 'Creating unforgettable gaming environments and communities.'],
  [serviceInfra, 'building', 'Infrastructure Development', 'Managing, renovating and constructing assets that stand the test of time.'],
  [serviceConsulting, 'users', 'Consulting & Management', 'Strategic planning, project management and business development.'],
]

export default function Services() {
  return (
    <section className="services section" id="services">
      <div className="container">
        <div className="section-heading services-heading">
          <div>
            <p className="section-kicker">WHAT WE DO</p>
            <h2>Turning Ideas Into <span>Impact.</span></h2>
            <p className="section-subcopy">From digital solutions to world-class infrastructure, we deliver end-to-end services that drive growth and create lasting value.</p>
          </div>
          <a className="pill-button compact ghost" href="#services-grid">
            <span>View All Services</span>
            <span className="button-arrow"><Icon name="arrow" size={14} /></span>
          </a>
        </div>

        <div className="service-grid" id="services-grid">
          {services.map(([image, icon, title, copy]) => (
            <article className="service-card" key={title}>
              <div className="service-image-wrap">
                <img src={image} alt="" />
                <span className="service-icon"><Icon name={icon} size={21} /></span>
              </div>
              <div className="service-body">
                <h3>{title}</h3>
                <p>{copy}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
