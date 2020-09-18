import React, { useState } from "react"
import axios from "axios"

export default function Home() {
  const [name, setName] = useState({ first: "", last: "" })

  const handleSubmit = event => {
    event.preventDefault()
    const fetchData = async () => {
      const response = await axios.post(
        "http://localhost:8888/.netlify/functions/mongoDB/",
        { ...name }
      )
      console.log(response.data)
    }
    fetchData()
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          onChange={event => {
            setName({ ...name, first: event.target.value })
          }}
          value={name.first}
          type="text"
          name="first"
        />
        <input
          onChange={event => {
            setName({ ...name, last: event.target.value })
          }}
          type="text"
          name="last"
          value={name.last}
        />
        <button>Send</button>
      </form>
    </div>
  )
}
