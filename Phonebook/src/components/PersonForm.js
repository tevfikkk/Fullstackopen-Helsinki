const PersonForm = ({
  addPerson,
  newName,
  newNumber,
  handleNumberChange,
  handlePersonChange
}) => {
  return (
    <div>
      <form onSubmit={addPerson}>
        <div>
          Name: <input value={newName} onChange={handlePersonChange} />
        </div>
        <br />
        <div>
          Number: <input value={newNumber} onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit"> Add </button>
        </div>
      </form>
    </div>
  )
}

export default PersonForm
