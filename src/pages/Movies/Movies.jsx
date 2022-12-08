import { useEffect, useState } from "react"
import { Card } from "../../components/Card/Card"
import { Header } from "../../components/Header/Header"
import { getMovies } from "../../lib/request"
import './styles.scss'

export function Movies() {

    const [movies, setMovies] = useState([])

    async function getListMovies() {
        const dataMovies = await getMovies()
        setMovies(dataMovies);
    }
    useEffect(() => {

        getListMovies()
        
    }, [])

    console.log(movies);


    return (
        <div className="movies">
            <Header />

            {/* <h2>movies</h2> */}
            <select className="movies_filter" name="moviesFilter" >
                <option >Filtrar</option>
                <option >Filtro 1</option>
                <option >Filtro 2</option>
            </select>

            <div className="movies_container">
                {
                    movies.map((movie)=>{
                        return (
                            
                            <Card element={movie}/>
                        )
                    })
                }
                {/* <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/> */}

            </div>

            <button onClick={getMovies}>peliculas</button>
            {/* <button onClick={getSeries}>series</button> */}
        </div>
    )
}