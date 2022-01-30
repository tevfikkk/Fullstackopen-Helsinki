import CountryInfo from "./CountryInfo"
import { useState } from "react"

const CountryComponent = ({ country }) => {
  const [showInfo, setShowInfo] = useState(false)

  return (
    <div>
      {country.name}
      <br />
      <button onClick={() => setShowInfo(!showInfo)}>
        {showInfo ? "Hide Information" : "Show Information"}
      </button>
      <br />
      <CountryInfo country={country} showAll={showInfo} />
    </div>
  )
}

export default CountryComponent
