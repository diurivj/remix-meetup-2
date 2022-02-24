import { json, LinksFunction, LoaderFunction, MetaFunction, useLoaderData } from 'remix'
import { Card } from '~/components/Card'
import { Character } from '~/types/character.type'
import { fetchRandomCharacters } from '~/utils/ricknmorty.server'
import styles from '~/css/index.css'

type LoadData = {
  characters: Character[]
}

export const meta: MetaFunction = () => {
  return {
    title: 'Rick & Morty'
  }
}

export const links: LinksFunction = () => {
  return [
    {
      rel: 'stylesheet',
      href: styles
    }
  ]
}

export const loader: LoaderFunction = async () => {
  const characters = await fetchRandomCharacters()
  const data: LoadData = {
    characters
  }
  return data
}

// Componente de React
export default function Index() {
  const { characters } = useLoaderData<LoadData>()

  return (
    <section className="grid">
      {characters.map(character => (
        <Card key={character.id} character={character} />
      ))}
    </section>
  )
}
