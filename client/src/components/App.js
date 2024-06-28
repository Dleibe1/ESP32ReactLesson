import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { hot } from "react-hot-loader/root";

import "../assets/scss/main.scss";

const App = (props) => {

  const [infoFromESP32, setInfoFromESP32] = useState(undefined);

  const fetchESP32Data = async () => {
    const response = await fetch("/api/v1/ESP32");
    const ESP32ResponseData = await response.json()
    const messageFromESP32 = ESP32ResponseData.ESP32ResponseMessage
    setInfoFromESP32(messageFromESP32)
  };

  useEffect(() => {
    fetchESP32Data();
  }, []);

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <h2>{infoFromESP32}</h2>
        </Route>
      </Switch>
    </Router>
  );
};

export default hot(App);
