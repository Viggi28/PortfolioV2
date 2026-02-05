import uniqid from 'uniqid'
import { skills } from '../../portfolio'
import './Skills.css'

const Skills = () => {
  if (!skills.length) return null

  return (
    <section className='section skills' id='skills'>
      <h2 className='section__title'>Skills</h2>
      <div className='skills__container'>
        {skills.map((category) => (
          <div key={uniqid()} className='skills__category'>
            <h3 className='skills__category-title'>{category.category}</h3>
            <div className='skills__list'>
              {category.items.map((skill) => (
                <div key={uniqid()} className='skills__item'>
                  <img 
                    src={skill.icon} 
                    alt={skill.name}
                    className='skills__icon'
                    onError={(e) => { e.target.style.display = 'none' }}
                  />
                  <span className='skills__name'>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
