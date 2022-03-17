import { usePokemon } from '../Util/usePokemon'
import styles from './SidebarTile.module.css'

interface Props {
  id: number
  isSelected: boolean
}

export default function SidebarTile ({ id, isSelected }: Props) {
  const pokemon = usePokemon(id)

  return (
    <div className={`${styles.tileContainer} ${isSelected ? styles.selected : ''}`}>
      <div className={styles.imageWrapper}>
        <img className={styles.pokemonImage} src={pokemon?.imgUrl} alt={pokemon?.name}/>
      </div>
      <div className={styles.textWrapper}>
        <h2 className={styles.tileText}>No. {String(id).padStart(3, '0')}</h2>
        <h2 className={styles.tileText}>
          {pokemon === null
            ? 'Loading...'
            : pokemon.name
          }
        </h2>
      </div>
    </div>
  )
}
