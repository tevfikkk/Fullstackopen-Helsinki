const CountryInfo = ({ country, showAll }) => {
  const componentRenderer = () =>
    showAll ? (
      <div>
        <h2>{country.name}</h2>
        <ul>
          <li>Capital: {country.capital}</li>
          <li>Population: {country.population}</li>
        </ul>
        <h3>Languages:</h3>
        <ul>
          {country.languages.map((language) => (
            <li key={language.name}>{language.name}</li>
          ))}
        </ul>
        <br />
        <img src={country.flag} width="45%" alt={country.name} />
      </div>
    ) : null

  return <div>{componentRenderer()}</div>
}

export default CountryInfo
