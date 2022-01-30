const SearchBar = ({ filterer }) => {
  return (
    <div>
      <b>Find countries</b>
      {"  "}
      <input onChange={(e) => filterer(e.target.value.toLowerCase())} />
    </div>
  )
}

export default SearchBar
