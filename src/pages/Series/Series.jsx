import { useEffect, useState } from "react"
import { Card } from "../../components/Card/Card"
import { Header } from "../../components/Header/Header"
import { Pagination } from "../../components/Pagination/Pagination"
import { getData } from "../../lib/request"


export function Series() {

    const [series, setSeries] = useState([])
    const [option, setOption] = useState('')
    const [page, setPage] = useState(1)

    async function getListSeries(filter, numberPage) {
        const dataSeries = await getData(filter, numberPage, 'series')
        setSeries(dataSeries);
    }
    useEffect(() => {
        const filterInit = dicOptions["Seleccione"]
        setOption(filterInit)
        getListSeries(filterInit, page)

    }, [])

    console.log(series);

    const dicOptions = {
        Seleccione: 'of the',
        Romance: 'love',
        Medicina: 'doctor',
        Navidad: 'christmas',
        // Halloween: 'halloween',
        Heroes: 'man',
        // Harry: 'harry potter',
        // Marvel: 'marvel'
    }

    function handleOption(e) {

        const filter = dicOptions[e.target.value]
        setOption(filter)
        setPage(1)
        getListSeries(filter, 1)
    }

    function changeNextPage() {
        if (page > 0) {

            const newPage = page + 1
            setPage(newPage)
            getListSeries(option, newPage)
        } else {
            setPage(1)
            getListSeries(option, 1)
        }
    }

    function changeBackPage() {

        if (page < 1) {
            setPage(1)
            getListSeries(option, 1)

        } else {

            const newPage = page - 1
            setPage(newPage)
            getListSeries(option, page)
        }
    }



    return (
        <div className="movies">
            <Header />

            {/* <h2>movies</h2> */}
            <div className="movies_filter">
                <select value={option} onChange={handleOption}>
                    <option >Seleccione</option>
                    <option >Romance</option>
                    <option >Medicina</option>
                    <option >Navidad</option>
                    <option >Heroes</option>
                </select>
            </div>

            {
                series.length !== 0 ?

                    <div className="movies_container">
                        {
                            series.map((serie) => {
                                return (

                                    <Card element={serie} />
                                )
                            })
                        }
                    </div>

                    : <div className="movies_loading">Loading ... </div>
            }

            <Pagination nextPage={changeNextPage} backPage={changeBackPage}/>

        </div>
    )
}