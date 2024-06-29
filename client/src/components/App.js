import React, { useState, useEffect } from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { hot } from "react-hot-loader/root"
import message from "./message"

import "../assets/scss/main.scss"

const App = (props) => {
  const [infoFromESP32, setInfoFromESP32] = useState(undefined)

  const communicateWithESP32 = async (command) => {
    const response = await fetch("/api/v1/ESP32", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ command: command }),
    })
    const ESP32ResponseData = await response.json()
    const messageFromESP32 = ESP32ResponseData.ESP32ResponseMessage
    setInfoFromESP32(messageFromESP32)
  }

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <h2>Response from ESP32 somewhere else on earth: {infoFromESP32}</h2>
          <h2
            onClick={() => {
              communicateWithESP32(message)
            }}
          >
            Send message to ESP32
          </h2>
        </Route>
      </Switch>
    </Router>
  )
}

export default hot(App)
