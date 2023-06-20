
import { useEffect } from "react"
import { useState } from "react"
import { CharacterCard } from "./CharacterCard"
import styles from './CharacterList.module.css'
import { Search } from './Search';

export function CharactersList() {

    const [characters, setCharacters] = useState([])
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [search, setSearch] = useState('');

    useEffect(() => {

        fetch("https://hp-api.onrender.com/api/characters")
            .then(response => response.json())
            .then((data) => {
            
                setCharacters(data);
                setIsLoading(false);
            })
            .catch((error) => {
                setError(error);
                setIsLoading(false);
            });
    }, [])

    const filteredCharacters = characters.filter(character =>
        character.name.toLowerCase().includes(search) && character.image !== ""
    );

    function getSearchValue(e) {
        e.preventDefault();
        setSearch(e.target.value.toLowerCase());
    }


    if (isLoading) {
        return <div>Loading........</div>
    } else if (error) {
        return { error }
    } else {
        
        return (
            <div>
                <Search
                    total={filteredCharacters.length}
                    search={getSearchValue}
                />

                <div className={styles.container}>
                    {filteredCharacters.map((character) => 
                    
                            <CharacterCard
                                key={character.id}
                                id={character.id}
                                name={character.name}
                                image={character.image}
                            />
                
                    )}
                </div>
            </div>
            
        )

    }

}
