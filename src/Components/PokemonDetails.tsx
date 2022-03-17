import { Pokemon } from '../Util/usePokemon'
import styles from './PokemonDetails.module.css'

interface Props {
  pokemon: Pokemon | null
}

export default function PokemonDetails ({ pokemon }: Props) {
  return (
    <div className={styles.detailsWrapper}>
      <div className={styles.splitViewContainer}>
        <div className={styles.imageWrapper}>
          <img className={styles.detailImage} src={pokemon?.imgUrl} alt={pokemon?.name} />
        </div>
        <div className={styles.entryWrapper}>
          <h1 className={styles.title}>
            {pokemon?.name}
          </h1>
        </div>
        <div className={styles.entryWrapper}>
          <h2 className={styles.title}>
            Description
          </h2>
          <p className={styles.description}>
            {pokemon?.description}
          </p>
        </div>
      </div>
      <div className={styles.splitViewContainer}>
        <div className={styles.entryWrapper}>
          <h2 className={styles.title}>
            Info
          </h2>
        </div>
        <div className={styles.entryWrapper}>
          <h2 className={styles.title}>
            Types
          </h2>
          <div className={styles.typeWrapper}>
            {pokemon?.types.map((type, index) =>
              <h3 className={`${styles.type} ${type.toLowerCase()}`} key={index}>{type}</h3>
            )}
          </div>
        </div>
        <div className={styles.entryWrapper}>
          <h2 className={styles.title}>
            Abilities
          </h2>
            {pokemon?.abilities.map((ability, index) =>
              <h3 className={styles.type} key={index}>{ability}</h3>
            )}
        </div>
        <div className={styles.entryWrapper}>
          <h2 className={styles.title}>
            Details
          </h2>
          <p className={styles.description}>
            Height: {pokemon?.height} cm
          </p>
          <p className={styles.description}>
            Weight: {pokemon?.weight} kg
          </p>
        </div>
      </div>
    </div>
  )
}
