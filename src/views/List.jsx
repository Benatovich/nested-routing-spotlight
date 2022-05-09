import { useEffect, useState } from 'react'
import { Route, Link, useLocation } from 'react-router-dom'
import Details from './Details'

export default function List() {
    const location = useLocation()
    const [characters, setCharacters] = useState([])


    useEffect(() => {
        const fetchCharacters = async () => {
            const url = 'https://rickandmortyapi.com/api/character'
            const res = await fetch(url);
            const { results } = await res.json()
            setCharacters(results)
        }
        fetchCharacters()
    }, [location.search])

  return (
    <>
            <div>
                <Route path='/characters/:id'>
                    <Details />
                </Route>
            </div>
            <div>
                <h1>Character List</h1>
                {characters.map((character) => (
                    <article key={character.id}>
                        <Link to={`/characters/${character.id}`}>
                            <h3>{character.name}</h3>
                        </Link>
                        <p>{character.species}</p>
                        <p>Status: {character.status}</p>
                    </article>
                ))}
            </div>
    </>
  )
}
