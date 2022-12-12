// import { useState } from "react"
import './styles.scss'
import back from '../../assets/back.png'
import next from '../../assets/next.png'

export const Pagination = () => {

    // const [numberPages, setNumberPages] = useState([1,2,3,4,5,6])
    return (
        <div className="pageNumbering">
            <div className="pageNumbering_previus pageNumbering_box"><img className="pageNumbering_previus--img" src={back} alt="back" /></div>
            
            {/* <div className="pageNumbering_number">
                {
                    numberPages.map((number)=>
                    <div className="pageNumbering_number--items pageNumbering_box">{number}</div>
                    )
                }
            </div> */}

            <div className="pageNumbering_next pageNumbering_box"><img className="pageNumbering_previus--img" src={next} alt="next" /></div>

        </div>
    )
}