import React, { useState } from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { hot } from "react-hot-loader/root"
import MessageSendingWebpage from "./MessageSendingWebpage"

import "../assets/scss/main.scss"

const App = (props) => {
  const [infoFromESP32, setInfoFromESP32] = useState(undefined)

  const sendMessage = async (message) => {
    const response = await fetch("/api/v1/ESP32", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message: message }),
    })
    const ESP32ResponseData = await response.json()
    const messageFromESP32 = ESP32ResponseData.ESP32ResponseMessage
    setInfoFromESP32(messageFromESP32)
  }

  console.log(infoFromESP32)
// Try changing the path
  return (
    <Router>
      <Switch> 
        <Route exact path="/">
          <MessageSendingWebpage receivedMessage={infoFromESP32} sendMessage={sendMessage} />
        </Route>
      </Switch>
    </Router>
  )
}

export default hot(App)
