import { StrictMode } from "react"
import ReactDOM from "react-dom"

import App from "./App"

const contacts = [
  {
    id: 1,
    name: "John Kane",
    number: 1312321
  }
]

const rootElement = document.getElementById("root")
ReactDOM.render(
  <StrictMode>
    <App contacts={contacts} />
  </StrictMode>,
  rootElement
)
