import React, { useState, useEffect } from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { hot } from "react-hot-loader/root"

import "../assets/scss/main.scss"

const App = (props) => {
  const [infoFromESP32, setInfoFromESP32] = useState(undefined)

  const fetchESP32Data = async (command) => {
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

  // Example usage
  // fetchESP32Data("led_on"); // To turn on the LED
  // fetchESP32Data("led_off"); // To turn off the LED

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <h2>{infoFromESP32}</h2>
          <h2
            onClick={() => {
              fetchESP32Data("led_on")
            }}
          >
            Click to turn on LED
          </h2>
          <h2
            onClick={() => {
              fetchESP32Data("led_off")
            }}
          >
            Click to turn off LED
          </h2>
        </Route>
      </Switch>
    </Router>
  )
}

export default hot(App)
