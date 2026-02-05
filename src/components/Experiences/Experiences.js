import { useState } from 'react'
import uniqid from 'uniqid'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import ExpandLessIcon from '@material-ui/icons/ExpandLess'
import { experiences } from '../../portfolio'
import './Experiences.css'

const renderBold = (text) => {
  const parts = text.split(/\*\*(.+?)\*\*/g)
  return parts.map((part, i) =>
    i % 2 === 1 ? <strong key={uniqid()}>{part}</strong> : part
  )
}

const Experiences = () => {
  const [expanded, setExpanded] = useState(() => new Set())

  if (!experiences.length) return null

  const toggle = (index) => {
    setExpanded((prev) => {
      const next = new Set(prev)
      if (next.has(index)) next.delete(index)
      else next.add(index)
      return next
    })
  }

  return (
    <section id='experience' className='section experiences'>
      <h2 className='section__title'>Experience</h2>

      <div className='experiences__list experiences__timeline'>
        {experiences.map((exp, index) => {
          const isExpanded = expanded.has(index)
          return (
            <article
              key={uniqid()}
              className={`experiences__item ${isExpanded ? 'experiences__item--open' : ''}`}
            >
              <div className='experiences__item-marker' aria-hidden />
              <button
                type='button'
                className='experiences__trigger'
                onClick={() => toggle(index)}
                aria-expanded={isExpanded}
                aria-controls={`experience-bullets-${index}`}
                id={`experience-trigger-${index}`}
              >
                <header className='experiences__header'>
                  <h3 className='experiences__title'>{exp.title}</h3>
                  <span className='experiences__date'>{exp.dateRange}</span>
                  <span className='experiences__chevron'>
                    {isExpanded ? (
                      <ExpandLessIcon fontSize='small' />
                    ) : (
                      <ExpandMoreIcon fontSize='small' />
                    )}
                  </span>
                </header>
                <p className='experiences__company'>{exp.company}</p>
                <p className='experiences__location'>{exp.location}</p>
              </button>
              <div
                id={`experience-bullets-${index}`}
                className='experiences__content'
                role='region'
                aria-labelledby={`experience-trigger-${index}`}
              >
                <ul className='experiences__bullets'>
                  {exp.bullets.map((bullet) => (
                    <li key={uniqid()} className='experiences__bullet'>
                      {renderBold(bullet)}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default Experiences
