import uniqid from 'uniqid'
import GitHubIcon from '@material-ui/icons/GitHub'
import LaunchIcon from '@material-ui/icons/Launch'
import './ProjectContainer.css'

const renderBold = (text) => {
  if (!text) return null
  const parts = text.split(/\*\*(.+?)\*\*/g)
  return parts.map((part, i) =>
    i % 2 === 1 ? <strong key={uniqid()}>{part}</strong> : part
  )
}

const resolveImage = (image) => {
  if (!image) return null
  if (image.startsWith('http') || image.startsWith('data:') || image.startsWith('/')) {
    return image
  }
  if (image.includes('/')) {
    return `${process.env.PUBLIC_URL || ''}/${image}`.replace(/\/+/g, '/')
  }
  return `${process.env.PUBLIC_URL}/images/${image}`
}

const ProjectContainer = ({ project }) => (
  <div className='project'>
    {project.image && (
      <img
        src={resolveImage(project.image)}
        alt={`${project.name} screenshot`}
        className='project__image'
        loading='lazy'
      />
    )}

    <h3>{project.name}</h3>

    <p className='project__description'>{renderBold(project.description)}</p>
    {project.stack && (
      <ul className='project__stack'>
        {project.stack.map((item) => (
          <li key={uniqid()} className='project__stack-item'>
            {item}
          </li>
        ))}
      </ul>
    )}

    {project.sourceCode && (
      <a
        href={project.sourceCode}
        aria-label='source code'
        className='link link--icon'
      >
        <GitHubIcon />
      </a>
    )}

    {project.livePreview && (
      <a
        href={project.livePreview}
        aria-label='live preview'
        className='link link--icon'
      >
        <LaunchIcon />
      </a>
    )}
  </div>
)

export default ProjectContainer
