import { useState } from 'react'
import styles from './App.module.css'
import PokemonDetails from './Components/PokemonDetails'
import Sidebar from './Components/Sidebar'
import { usePokemon } from './Util/usePokemon'

export default function App () {
  const [selectedPokemonID, setSelectedPokemonID] = useState(1)
  const pokemon = usePokemon(selectedPokemonID)

  return (
    <div className={styles.appWrapper}>
      <div className={styles.header}>
        <h1 className={styles.headerTitle}>
          Pokedex
        </h1>
      </div>
      <div className={styles.container}>
        <PokemonDetails
          pokemon={pokemon}
          />
        <Sidebar
          selectedPokemonID={selectedPokemonID}
          setSelectedPokemonID={setSelectedPokemonID}
          />
      </div>
    </div>
  )
}
