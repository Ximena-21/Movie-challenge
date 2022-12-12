import { Link } from "react-router-dom"
import { Header } from "../../components/Header/Header"
import './styles.scss'


export function Home() {
    return (
        <div className="home">
            <Header />

            {/* <h2>home</h2> */}
            <div className="home_container">
                <h1 className="home_welcome">WELCOME TO THE CINEMA FROM YOUR HOME</h1>

                <p className="home_text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis odit quia cumque doloremque facilis iste nisi, vitae eos nam, officiis dolores dolorum quod tenetur maiores atque, nihil eveniet quae suscipit?</p>

                <Link to="/movies"> <button className="home_btn">VER AHORA</button></Link>
               

            </div>
        </div>
    )
}