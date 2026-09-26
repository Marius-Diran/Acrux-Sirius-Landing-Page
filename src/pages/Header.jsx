import { useState } from 'react'
import { Icon } from './Icons.jsx'
import logoPrimary from '../assets/AcruxSiriuslogo-1.png'

const links = [
  ['Home', '#home'],
  ['About Us', '#about'],
  ['Our Companies', '#companies'],
  ['Services', '#services'],
  ['Projects', '#projects'],
  ['Founder', '#founder'],
  ['Insights', '#insights'],
  ['Contact', '#contact'],
]

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="site-header">
      <div className="container header-inner">
        <a href="#home" className="brand" aria-label="Acrux Sirius home">
          <img src={logoPrimary} alt="Acrux Sirius Technologies" />
          <span className="brand-name">
            <strong>ACRUX</strong>
            <span>SIRIUS</span>
          </span>
        </a>

        <nav className={`desktop-nav ${open ? 'mobile-open' : ''}`} aria-label="Primary navigation">
          {links.map(([label, href], index) => (
            <a key={label} className={index === 0 ? 'active' : ''} href={href} onClick={() => setOpen(false)}>
              {label}
            </a>
          ))}
        </nav>

        <a className="pill-button header-cta" href="#contact">
          <span>Let's Work Together</span>
          <span className="button-arrow"><Icon name="arrow" size={15} /></span>
        </a>

        <button className="menu-button" aria-label="Toggle navigation" onClick={() => setOpen(!open)}>
          <Icon name={open ? 'close' : 'menu'} size={24} />
        </button>
      </div>
    </header>
  )
}
