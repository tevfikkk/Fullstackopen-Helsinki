import React, { useState } from "react"
import { filter } from "ramda"
import PersonForm from "./components/PersonForm"
import Persons from "./components/Persons"
import Filter from "./components/Filter"

const App = (props) => {
  const [persons, setPersons] = useState(props.contacts)
  const [newName, setNewName] = useState("")
  const [newNumber, setNewNumber] = useState("")
  const [filterName, setFilterName] = useState("")

  //filters only the written contacts appear
  const filteredNames = filter(
    (ppl) => ppl.name.toLowerCase().includes(filterName.toLowerCase().trim()),
    persons
  )

  // checks if the same person in the contact
  const hasSameContact =
    filter(
      (person) => person.name.toLowerCase() === newName.toLowerCase(),
      persons
    ).length > 0

  // creates a new contact
  const addPerson = (event) => {
    event.preventDefault()
    const personObj = {
      name: newName,
      number: newNumber,
      id: persons.length + 1
    }
    hasSameContact
      ? alert(`${newName} is already added to phonebook`)
      : setPersons(persons.concat(personObj))
    setNewName("")
    setNewNumber("")
  }

  // event handler for persons
  const handlePersonChange = (event) => {
    setNewName(event.target.value)
  }

  // event handler for numbers
  const handleNumberChange = (e) => {
    setNewNumber(e.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filterName={filterName} setFilterName={setFilterName} />

      <h2>Add a new person</h2>
      <PersonForm
        addPerson={addPerson}
        newName={newName}
        handlePersonChange={handlePersonChange}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange}
      />

      <h2>Numbers</h2>
      <Persons filteredNames={filteredNames} />
    </div>
  )
}

export default App
