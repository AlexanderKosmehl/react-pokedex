import { useEffect, useState } from 'react'

export interface Pokemon {
  id: number
  name: string
  imgUrl: string
  types: string[]
  description: string
  height: number
  weight: number
  abilities: string[]
}

export function usePokemon (id: number): Pokemon | null {
  const [pokemon, setPokemon] = useState<Pokemon | null>(null)

  const toTitleCase = (string: string) => {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase()
  }

  useEffect(() => {
    async function updatePokemon () {
      const pokeResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      const speciesResponse = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}`)
      const pokeData = await pokeResponse.json()
      const speciesData = await speciesResponse.json()

      setPokemon({
        id: pokeData?.id,
        name: toTitleCase(pokeData?.name),
        imgUrl: pokeData?.sprites.front_default,
        types: pokeData?.types.map((typeObject: any) => toTitleCase(typeObject?.type?.name)),
        description: speciesData?.flavor_text_entries[0]?.flavor_text.replace(/\n|\f/g, ' '),
        height: Number(pokeData?.height) * 10,
        weight: Number(pokeData?.weight) / 10,
        abilities: pokeData?.abilities?.map((ability: any) => toTitleCase(ability?.ability?.name))
      })
    }

    updatePokemon()
  }, [id])

  return pokemon
}
