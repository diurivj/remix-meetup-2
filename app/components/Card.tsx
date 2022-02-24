import { Link } from 'remix'
import { Character } from '~/types/character.type'

interface CardProps {
  character: Character
  showLink?: boolean
}

export const Card = (props: CardProps) => {
  const { character, showLink = true } = props
  return (
    <div className="card">
      <img src={character.image} alt={character.name} />
      <h3>{character.name}</h3>
      <div className="stats-container">
        <span className="species-container">
          <p>Species:</p>
          <h4>{character.species}</h4>
        </span>
        <span className="origin-container">
          <p>Origin:</p>
          <h4>{character.origin.name}</h4>
        </span>
      </div>
      {showLink && (
        <Link prefetch="intent" to={`character/${character.id}`}>
          View more...
        </Link>
      )}
    </div>
  )
}
