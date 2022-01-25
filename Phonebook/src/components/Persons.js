import Notes from "./Notes"
import { map } from "ramda"

const Persons = ({ filteredNames }) => {
  return (
    <div>
      <ul>
        {map(
          (contact) => (
            <Notes
              key={contact.id}
              note={contact.name}
              number={contact.number}
            />
          ),
          filteredNames
        )}
      </ul>
    </div>
  )
}

export default Persons
