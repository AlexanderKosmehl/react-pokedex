import styles from './Sidebar.module.css'
import SidebarTile from './SidebarTile'

interface Props {
  selectedPokemonID: number
  setSelectedPokemonID: (id: number) => void
}

export default function Sidebar ({ selectedPokemonID, setSelectedPokemonID }: Props) {
  const pokemonIDs = new Array(151).fill(0).map((_, index) => {
    return index + 1
  })

  return (
    <div className={styles.sidebarContainer}>
      <h1 className={styles.sidebarHeader}>
        Pokédex Entries
      </h1>
      <div className={styles.scrollContainer}>
        {pokemonIDs.map(id => {
          return (
            <div onClick={() => setSelectedPokemonID(id)} key={id}>
              <SidebarTile id={id} isSelected={id === selectedPokemonID} />
            </div>
          )
        })}
      </div>
    </div>
  )
}
