import { useState } from 'react'
import ReactCardFlip from 'react-card-flip'
import './styles.scss'
import poster from '../../assets/logo1.png'

export function Card({ element }) {

    const [flip, setflip] = useState(false)

    return (
        <ReactCardFlip className='card' isFlipped={flip} flipDirection='horizontal'>
            <div className='card_front' onClick={() => setflip(!flip)}>
                {/* FRONT
                <h6 className="card_front--title">{element.Title}</h6> */}
                {
                    element.Poster === "N/A" ?
                        <img className="card_front--img" src={poster} />
                        : <img className="card_front--img" src={element.Poster} />
                }
            </div>
            <div className='card_back' onClick={() => setflip(!flip)}>

                <h6 className="card_back--title">{element.Title}</h6>
                <p className="card_back--description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, optio illum! </p>
                <div className="card_back--characteristics">
                    <span className="card_back--item">{element.Year}</span>
                    <span className="card_back--item">{element.Type}</span>
                </div>
            </div>
        </ReactCardFlip>

    )
}

//Nulla numquam soluta architecto laborum voluptatem magna.