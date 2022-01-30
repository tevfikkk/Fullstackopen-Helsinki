import { useState, useEffect } from "react"
import axios from "axios"
import SearchBar from "./components/SearchBar"
import ListOfCountries from "./components/ListOfCountries"

const App = () => {
  const [countries, setCountries] = useState([])
  const [filterCountries, setFilterCountries] = useState("")

  // fetches data
  useEffect(() => {
    axios
      .get("https://restcountries.com/v2/all")
      .then((res) => setCountries(res.data))
  }, [])

  return (
    <div>
      <div>
        <SearchBar filterer={setFilterCountries} />
        <ListOfCountries countries={countries} filterer={filterCountries} />
      </div>
    </div>
  )
}

export default App
