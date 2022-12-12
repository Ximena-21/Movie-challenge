import { useEffect, useState } from "react"
import { Card } from "../../components/Card/Card"
import { Header } from "../../components/Header/Header"
import { Pagination } from "../../components/Pagination/Pagination"
import { getData } from "../../lib/request"


export function Series() {

    const [series, setSeries] = useState([])

    async function getListSeries() {
        const dataSeries = await getData('of the',1, 'series')
        setSeries(dataSeries);
    }
    useEffect(() => {

        getListSeries()

    }, [])

    console.log(series);


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
               series != []? 
                (
                    <div className="movies_container">
                    {
                       series.map((serie) => {
                            return (
    
                                <Card element={serie} />
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