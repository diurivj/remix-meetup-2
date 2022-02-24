import { LinksFunction, LoaderFunction, MetaFunction, redirect, useLoaderData } from 'remix'
import { Card } from '~/components/Card'
import { Character } from '~/types/character.type'
import { fetchCharacterById } from '~/utils/ricknmorty.server'
import styles from '~/css/details.css'

type LoadData = {
  character: Character
}

export const meta: MetaFunction = ({ data }) => {
  return {
    title: `${data.character.name} | Rick and Morty`
  }
}

export const loader: LoaderFunction = async ({ params }) => {
  const { id } = params

  if (typeof id !== 'string') {
    return redirect('/')
  }

  const character = await fetchCharacterById(id)
  const data: LoadData = {
    character
  }

  return data
}

export const links: LinksFunction = () => {
  return [
    {
      rel: 'stylesheet',
      href: styles
    }
  ]
}

export default function CharacterId() {
  const { character } = useLoaderData<LoadData>()
  return (
    <main>
      <Card character={character} showLink={false} />
    </main>
  )
}
