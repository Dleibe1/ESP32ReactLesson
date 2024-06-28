import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { hot } from "react-hot-loader/root";

import "../assets/scss/main.scss";

import getCurrentUser from "../services/getCurrentUser";

import RegistrationForm from "./registration/RegistrationForm";
import SignInForm from "./authentication/SignInForm";
import TopBar from "./layout/TopBar";

const App = (props) => {

  const [infoFromESP32, setInfoFromESP32] = useState(undefined);

  const fetchESP32Data = async () => {
    const response = await fetch("/api/v1/ESP32");
    const ESP32ResponseData = await response.json()
    setInfoFromESP32(ESP32ResponseData.ESP32response)
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
