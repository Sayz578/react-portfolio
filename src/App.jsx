import { Routes, Route } from "react-router"
import Layout from "./components/Layout"
import Home from "./pages/Home"
import About from "./pages/About"
import Servise from "./pages/Servise"
import NotFound from "./pages/NotFound"
import Portfolio from "./pages/Portfolio"


function App() {

  return (
    <>
      <Routes>
        <Route element = {<Layout/>}>
          <Route index element= {<Home/>}/>
          <Route path="about" element= {<About/>}/>
          <Route path="service" element= {<Servise/>}/>
          <Route path="portfolio" element= {<Portfolio/>}/>
        </Route>
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </>
  )
}

export default App
