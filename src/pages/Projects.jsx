import { Icon } from './Icons.jsx'
import projectTechhub from '../assets/project-techhub.jpg'
import projectGlxArena from '../assets/project-glx-arena.jpg'
import projectLuxury from '../assets/project-luxury.jpg'
import projectCommercial from '../assets/project-commercial.jpg'

const projects = [
  [projectTechhub, 'Tech Innovation Hub', 'Ongoing'],
  [projectGlxArena, 'GLX Arena', 'Completed'],
  [projectLuxury, 'Luxury Residence', 'Completed'],
  [projectCommercial, 'Commercial Complex', 'Ongoing'],
]

export default function Projects() {
  return (
    <section className="projects section" id="projects">
      <div className="container projects-layout">
        <div className="project-title">
          <p className="section-kicker">FEATURED PROJECTS</p>
          <h2>Building Landmarks.<br />Creating <span>Legacies.</span></h2>
        </div>

        <div className="project-row">
          {projects.map(([image, title, status]) => (
            <article className="project-card" key={title}>
              <img src={image} alt={`${title} visual`} />
              <div className="project-caption">
                <h3>{title}</h3>
                <p>{status}</p>
              </div>
            </article>
          ))}
          <button className="project-next" aria-label="Next projects"><Icon name="arrow" size={16} /></button>
        </div>
      </div>
    </section>
  )
}
