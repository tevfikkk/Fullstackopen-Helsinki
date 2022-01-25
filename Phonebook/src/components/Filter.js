const Filter = ({ filterName, setFilterName }) => {
  return (
    <div>
      <input
        value={filterName}
        onChange={(e) => setFilterName(e.target.value)}
      />
    </div>
  )
}

export default Filter
