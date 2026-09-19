import { Icon } from './Icons.jsx'

const stats = [
  ['users', '10K+', 'Community', 'Members'],
  ['building', '50+', 'Projects', 'Executed'],
  ['trophy', '100+', 'Events &', 'Tournaments'],
  ['chart', '∞', 'Possibilities', 'Ahead'],
]

export default function Stats() {
  return (
    <section className="stats-strip" aria-label="Company statistics">
      <div className="container stats-grid">
        {stats.map(([icon, number, line1, line2]) => (
          <div className="stat" key={number + line1}>
            <span className="stat-icon"><Icon name={icon} size={35} /></span>
            <div>
              <strong>{number}</strong>
              <span>{line1}<br />{line2}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
