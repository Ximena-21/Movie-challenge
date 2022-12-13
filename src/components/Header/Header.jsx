import { Link } from 'react-router-dom'
import logo from '../../assets/logo1.png'
import "./styles.scss"

export const Header = () => {
    return (
        <header className="header">
            <Link to="/home">
                <img src={logo} alt="logo" className="header_logo" />
            </Link>

            <nav className="header_nav">
                <ul className="header_nav--ul">
                    <Link to="/home" className="header_nav--item"><li >Inicio</li></Link>
                    <Link to="/movies" className="header_nav--item"><li >Peliculas</li></Link>
                    <Link to="/series" className="header_nav--item"><li >Series</li></Link>
                </ul>
            </nav>
        </header>
    )
}