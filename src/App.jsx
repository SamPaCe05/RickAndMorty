
import HomePage from "./Pages/HomePage"
import DetailsPage from './Pages/DetailsPage'
import About from './Pages/About'
import Layout from "./layouts/layout"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Humans from "./Pages/Humans"
import Aliens from "./Pages/Aliens"
import FindCharacter from "./Pages/FindCharacter"
import { useEffect, useState } from "react"
import ErrorPage from "./Pages/ErrorPage"

function App() {

  const [data, setData] = useState([]);
  const [err, setErr] = useState(null)
  const url = 'https://rickandmortyapi.com/api/character/'
  async function fetching(url) {
    try {
      const response = await fetch(url)
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const info = await response.json();
      setData(info.results)
    } catch (error) {
      console.log(`error de tipo ${error}`);
      setErr(error.message)
    }
  }

  useEffect(() => {
    fetching(url)
  }, [])
  return (
    <BrowserRouter>
      {

        err ? (
          <ErrorPage err={err} />
        ) :
          <Routes>

            <Route element={<Layout></Layout>}>

              <Route path="/" element={<HomePage data={data} />} />
              <Route path="/about" element={<About />} />
              <Route path="/details" element={<DetailsPage />} />
              <Route path="/humans" element={<Humans data={data.filter(item => item.species === "Human")} />} />
              <Route path="/aliens" element={<Aliens data={data.filter(item => item.species === "Alien")} />} />
              <Route path="/findCharacter" element={<FindCharacter data={data} />} />

            </Route>
          </Routes>
      }


    </BrowserRouter>
  )
}

export default App
