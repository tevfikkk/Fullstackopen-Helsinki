import React from "react"

const Notes = ({ note, number }) => {
  return (
    <li>
      <b>
        {" "}
        name : {note} number: {number}{" "}
      </b>
    </li>
  )
}

export default Notes
