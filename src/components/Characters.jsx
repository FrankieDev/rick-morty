import React from 'react'

export default function Character({ characters, setCharacters }) {
    const resetCharacters = () => {
        console.log('reseteando')
        setCharacters(null)
    }
    return (
        <div className="characters">
            <h1>Personajes</h1>
            <span className="back-home" onClick={resetCharacters}>
                Volver a Home
            </span>
            <div className="container-characters">
                {characters.map((character) => (
                    <div className="character-container" key={character.id}>
                        <div>
                            <img src={character.image} alt={character.name} />
                        </div>
                        <div>
                            <h3>{character.name}</h3>
                            <h6>
                                {character.status === 'Alive' ? (
                                    <>
                                        <span className="alive"></span> Alive
                                    </>
                                ) : (
                                    <>
                                        <span className="dead"></span> Dead
                                    </>
                                )}
                            </h6>
                            <p>
                                <span className="text-grey">Episodios: </span>
                                <span className="text-grey">
                                    {character.episode.length}
                                </span>
                            </p>
                            <p>
                                <span className="text-grey">Especie: </span>
                                <span className="text-grey">
                                    {character.species}
                                </span>
                            </p>
                        </div>
                    </div>
                ))}
            </div>
            <span className="back-home" onClick={resetCharacters}>
                Volver a Home
            </span>
        </div>
    )
}
