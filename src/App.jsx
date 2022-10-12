import { useState } from 'react'
import reactLogo from './assets/react.svg'
import imgRickMorty from '../public/images/rick-morty.png'
import './App.css'
import Characters from './components/Characters'

function App() {
    const [characters, setCharacters] = useState(null)
    const URL_API = 'https://rickandmortyapi.com/api/character'

    const reqAPI = async () => {
        const api = await fetch(URL_API)
        const characterApi = await api.json()
        console.log(characterApi)

        setCharacters(characterApi.results)
    }

    return (
        <div className="App">
            <header className="App-header">
                <h1 className="title">Rick & Morty</h1>

                {characters ? (
                    <Characters
                        characters={characters}
                        setCharacters={setCharacters}
                    ></Characters>
                ) : (
                    <>
                        <img
                            src={imgRickMorty}
                            alt="Rick & Morty"
                            className="img-home"
                        />
                        <button onClick={reqAPI} className="btn-search">
                            Buscar Personajes
                        </button>
                    </>
                )}
            </header>
        </div>
    )
}

export default App
