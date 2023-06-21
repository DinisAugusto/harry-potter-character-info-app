import { useEffect, useState } from "react"
import { useParams, } from "react-router-dom"

import styles from './Character.module.css';

export function Character() {
    const {id} = useParams()
    const [character, setCharacter] = useState([])
    useEffect(() => {
        
        fetch(`https://hp-api.onrender.com/api/character/${id}`)
        .then( response => response.json())
        .then((data) => setCharacter(data))

    }, [id])
    return(
            <div>
                {character?.map((character, index) => (
                    <div key={index}>

                        <img className= {styles.img} src={character.image} alt={character.name}/>

                        <div className={styles.CharacterInfo}>
                            Name: {character.name}
                        </div>
                        <div className={styles.CharacterInfo}>
                            Actor: {character.actor}
                        </div>
                        <div className={styles.CharacterInfo}>
                            Hogwarts House: {character.house}
                        </div>
                        <div className={styles.CharacterInfo}>
                            Date of Birth: {character.dateOfBirth}
                        </div>
                        <div className={styles.CharacterInfo}>
                            Patronus: {character.patronus}
                        </div>
                        <div className={styles.CharacterInfo}>
                            Ancestry: {character.ancestry}
                        </div>
                        <div className={styles.CharacterInfo}>
                            Species: {character.species}
                        </div>
                    </div>
                ))}
            </div>
        
    )
}
