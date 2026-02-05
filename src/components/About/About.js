import uniqid from 'uniqid'
import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import DescriptionIcon from '@material-ui/icons/Description'
import MailIcon from '@material-ui/icons/Mail'
import TwitterIcon from '@material-ui/icons/Twitter'
import { about, contact } from '../../portfolio'
import './About.css'

const renderBold = (text) => {
  const parts = text.split(/\*\*(.+?)\*\*/g)
  return parts.map((part, i) =>
    i % 2 === 1 ? <strong key={uniqid()}>{part}</strong> : part
  )
}

const About = () => {
  const { name, role, description, resume, social, picture } = about

  return (
    <div className='about center'>
      <div className='about__header'>
        <div className='about__intro'>
          {name && (
            <h1>
               <span className='about__name'>{name}</span>
            </h1>
          )}

          {role && <h2 className='about__role'>{role}</h2>}
        </div>

        <div className='about__header-content'>
          {picture && (
            <img
              src={
                picture.startsWith('http')
                  ? picture
                  : `${process.env.PUBLIC_URL || ''}/images/${picture}`.replace(
                      /\/+/g,
                      '/'
                    )
              }
              alt={name}
              className='about__picture'
            />
          )}

          <div className='about__desc'>
            {description &&
              description.split('\n\n').map((paragraph) => (
                <p key={paragraph}>{renderBold(paragraph)}</p>
              ))}
          </div>
        </div>
      </div>

      <div className='about__contact center'>
        {resume && (
          <a
            href={resume}
            target='_blank'
            rel='noopener noreferrer'
            aria-label='resume'
            className='link link--icon link--resume'
          >
            <span className='resume-text'>View Resume</span>
            <DescriptionIcon />
          </a>
        )}

        {contact.email && (
          <a
            href={`mailto:${contact.email}`}
            aria-label='email'
            className='link link--icon'
          >
            <MailIcon />
          </a>
        )}

        {social && (
          <>
            {social.github && (
              <a
                href={social.github}
                aria-label='github'
                className='link link--icon'
              >
                <GitHubIcon />
              </a>
            )}

            {social.linkedin && (
              <a
                href={social.linkedin}
                aria-label='linkedin'
                className='link link--icon'
              >
                <LinkedInIcon />
              </a>
            )}

            {social.twitter && (
              <a
                href={social.twitter}
                aria-label='twitter'
                className='link link--icon'
              >
                <TwitterIcon />
              </a>
            )}
          </>
        )}
      </div>
    </div>
  )
}

export default About
