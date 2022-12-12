import "./appStyles.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { Movies } from "./pages/Movies/Movies";
import { Series } from "./pages/Series/Series";

// import { Header } from "./components/Header/Header";

function App() {

  return (
    <div className="App">
      {/* <h1>CONTENIDO</h1> */}
      {/* <Home/> */}
      {/* <Header/> */}
      <BrowserRouter>
        <Routes>
          <Route index element={<Home/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/movies" element={<Movies/>}/>
          <Route path="/series" element={<Series/>}/>
        </Routes>
      </BrowserRouter> 
    </div>
  )
}

export default App
