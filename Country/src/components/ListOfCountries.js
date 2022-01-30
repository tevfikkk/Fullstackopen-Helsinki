import { map, filter } from "ramda"
import CountryComponent from "./CountryComponent"

const ListOfCountries = ({ countries, filterer }) => {
  const listRender = () => {
    const filtered = countries.filter((country) =>
      country.name.toLowerCase().includes(filterer.toLowerCase().trim())
    )

    // lists countries
    const wholeMess = !filter ? (
      map(
        (country) => <CountryComponent key={country.name} country={country} />,
        countries
      )
    ) : filtered.length < 10 ? (
      map(
        (country) => <CountryComponent key={country.name} country={country} />,
        filtered
      )
    ) : (
      <h3>Too many countries, please specify</h3>
    )

    return wholeMess
  }

  return <div>{listRender()}</div>
}

export default ListOfCountries
