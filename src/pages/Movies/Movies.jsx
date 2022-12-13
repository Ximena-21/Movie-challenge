import { useEffect, useState } from "react"
import { Card } from "../../components/Card/Card"
import { Header } from "../../components/Header/Header"
import { Pagination } from "../../components/Pagination/Pagination"
import { getData } from "../../lib/request"
import './styles.scss'


export function Movies() {

    const [movies, setMovies] = useState([])
    const [option, setOption] = useState('')
    const [page, setPage] = useState(1)

    async function getListMovies(filter, numberPage) {
        const dataMovies = await getData(filter, numberPage, 'movie')
        setMovies(dataMovies);
    }
    useEffect(() => {

        const filterInit = dicOptions["Seleccione"]
        setOption(filterInit)
        getListMovies(filterInit, page)

    }, [])

    const dicOptions = {
        Seleccione: 'of the',
        Romance: 'love',
        Terror: 'demonic',
        Navidad: 'christmas',
        Halloween: 'halloween',
        Heroes: 'man',
        Harry: 'harry potter',
        Marvel: 'marvel'
    }


    function handleOption(e) {

        const filter = dicOptions[e.target.value]
        setOption(filter)
        setPage(1)
        getListMovies(filter, 1)
    }

    function changeNextPage() {
        if (page > 0) {

            const newPage = page + 1
            setPage(newPage)
            getListMovies(option, newPage)
        } else {
            setPage(1)
            getListMovies(option, 1)
        }
    }

    function changeBackPage() {

        if (page < 1) {
            setPage(1)
            getListMovies(option, 1)

        } else {

            const newPage = page - 1
            setPage(newPage)
            getListMovies(option, page)
        }
    }

    return (
        <div className="movies">
            <Header />

            <div className="movies_filter">
                <select value={option} onChange={handleOption}>
                    <option >Seleccione</option>
                    <option >Romance</option>
                    <option >Terror</option>
                    <option >Navidad</option>
                    <option >Halloween</option>
                    <option >Heroes</option>
                    <option >Harry</option>
                    <option >Marvel</option>
                </select>
            </div>

            {
                movies.length !== 0 ?

                    <div className="movies_container">
                        {
                            movies.map((movie) => {
                                return (

                                    <Card element={movie} />
                                )
                            })
                        }
                    </div>

                    : <div className="movies_loading">Loading ... </div>
            }

            <Pagination nextPage={changeNextPage} backPage={changeBackPage} />

        </div>
    )
}