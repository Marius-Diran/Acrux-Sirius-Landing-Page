import { Icon } from './Icons.jsx'
import logoMark from '../assets/AcruxSiriuslogo-1.png'

const companies = [
  {
    kind: 'gaming',
    kicker: 'POWERED BY ACRUX SIRIUS',
    title: <>GamersLounge<span className="orange">X</span></>,
    copy: 'The ultimate gaming destination. We create immersive gaming experiences, tournaments, lounges and communities where champions are made.',
    bullets: ['Gaming Lounge', 'Tournaments & Events', 'Community & Esports', 'Merch & More'],
    cta: 'Explore GamersLoungeX',
    icon: 'gamepad',
  },
  {
    kind: 'tech',
    kicker: '',
    title: <>Acrux Sirius <small>Technologies</small></>,
    copy: 'We provide cutting-edge digital solutions that empower businesses, brands and individuals to thrive in the digital age.',
    bullets: ['Digital Solutions', 'AI & Tech Innovation', 'Digital Marketing', 'Capacity Building'],
    cta: 'Explore Technologies',
    icon: 'logo',
  },
  {
    kind: 'infra',
    kicker: '',
    title: <>Acrux Sirius <small>Asset & Infrastructure Manager</small></>,
    copy: 'Managing, renovating & constructing world-class assets and infrastructure that stand the test of time.',
    bullets: ['Asset Management', 'Renovation', 'Construction', 'Project Management'],
    cta: 'Explore Infrastructure',
    icon: 'building',
  },
]

function CompanyIcon({ company }) {
  if (company.icon === 'logo') {
    return <img className="company-logo-icon" src={logoMark} alt="Acrux Sirius Technologies logo" />
  }
  return <span className={`company-icon ${company.kind}`}><Icon name={company.icon} size={28} /></span>
}

export default function Ecosystem() {
  return (
    <section className="ecosystem section" id="companies">
      <div className="container">
        <div className="section-heading center">
          <p className="section-kicker">OUR ECOSYSTEM</p>
          <h2>Three Companies. <span>One Vision.</span></h2>
        </div>

        <div className="company-grid">
          {companies.map((company) => (
            <article className={`company-card ${company.kind}`} key={company.kind}>
              <CompanyIcon company={company} />
              {company.kicker && <p className="company-kicker">{company.kicker}</p>}
              <h3>{company.title}</h3>
              <p className="company-copy">{company.copy}</p>
              <ul>
                {company.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
              </ul>
              <a className="text-link" href="#contact">
                {company.cta}<span><Icon name="arrow" size={14} /></span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
