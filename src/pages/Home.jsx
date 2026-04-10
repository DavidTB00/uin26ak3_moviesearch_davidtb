//Notater fra Ann-Charlott sin time der henne ga oss litt gratis, Tatt mye fra Rick and Morty notatene og hjelp fra studenter og en venn.
import { useState, useEffect } from 'react'
import History from '../components/History'
import MovieCard from '../components/MovieCard'

export default function Home() {
    const [search, setSearch] = useState("")
    const [movies, setMovies]  = useState([])
    const storedHistory = localStorage.getItem("history")
    const [focused, setFocused] = useState(false) 
    const [error, setFail] = useState("")
    const [history, setHistory] = useState(storedHistory ? JSON.parse(storedHistory) : [])
    const baseUrl = `https://www.omdbapi.com/?apikey=`
    //gjør sånn
    const apiKey = import.meta.env.VITE_APP_API_KEY 

    useEffect(() => { localStorage.setItem("history", JSON.stringify (history)) })
    useEffect(() => {getMovies("James Bond")}, [])

    
    const getMovies = async (search) => {
        try {
            const response = await fetch(`${baseUrl}${apiKey}&s=${search}`)
            const data = await response.json()
            setMovies(data.Search)
        }
        catch (err) {
            console.error(err)
        }
    }   

    const handleChange = (e)=>{
        const value = e.target.value
        setSearch(value)
            if (value.length >=3) {
                setFail("")
           } else {
            setFail("Minimum 3 tegn for å søke")
        }
    }  
    
    const handleSubmit = (e) => {
        e.preventDefault()
            if (search.length < 3) {
                setFail("Minimum 3 tegn for å søke")
                    return
    }
        setFail("")
        getMovies(search)
        setHistory((prev) => [...prev, search])
}

    return (
    <main>
        <h1>Forside</h1>
        <form onSubmit={handleSubmit}>Søk etter en film her<input type="search" placeholder="James Bond" onChange={handleChange} onFocus={()=> setFocused(true)} />
            {error && <p>{error}</p>}
            <button type="submit">Søk</button>
        </form>
        {focused ? <History history={history} setSearch={setSearch} />:null}
        <section>
            {movies?.map(movie => (<MovieCard key={movie.imdbID} title={movie.Title} poster={movie.Poster} year={movie.Year}/>
            ))}
        </section>
    </main>
    )
}