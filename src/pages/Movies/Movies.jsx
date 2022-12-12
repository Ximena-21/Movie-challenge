import { useEffect, useState } from "react"
import { Card } from "../../components/Card/Card"
import { Header } from "../../components/Header/Header"
import { Pagination } from "../../components/Pagination/Pagination"
import { getData } from "../../lib/request"
import './styles.scss'


export function Movies() {

    const [movies, setMovies] = useState([])

    async function getListMovies() {
        const dataMovies = await getData('of the',1, 'movie')
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
            <div className="movies_filter">
                <select >
                    <option >Filtrar</option>
                    <option >Filtro 1</option>
                    <option >Filtro 2</option>
                </select>
            </div>

            {
                movies != []? 
                (
                    <div className="movies_container">
                    {
                        movies.map((movie) => {
                            return (
    
                                <Card element={movie} />
                            )
                        })
                    }
                  </div>
                ) 
                : (<div className="movies_loading">Loading ... </div>)
            }
           
            <Pagination/>

            {/* <button onClick={getData}>peliculas</button> */}
          
        </div>
    )
}