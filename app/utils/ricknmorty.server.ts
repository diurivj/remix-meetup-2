import { Character } from '~/types/character.type'

export const randomIds = (): [number, number, number] => {
  return [9, 7, 32]
}

export const fetchRandomCharacters = async (): Promise<Character[]> => {
  const [id1, id2, id3] = randomIds()
  const ENDPOINT = `https://rickandmortyapi.com/api/character/${id1},${id2},${id3}`
  const response = await (await fetch(ENDPOINT)).json()
  return response
}

export const fetchCharacterById = async (id: string): Promise<Character> => {
  const ENDPOINT = `https://rickandmortyapi.com/api/character/${id}`
  const response = await (await fetch(ENDPOINT)).json()
  return response
}
