import express from "express";
import esp32Test from "../../../apiClient/ESP32Client.js";

const ESP32Router = new express.Router();

ESP32Router.get("/", async (req, res) => {
  const response = esp32Test()
  console.log(response)
  return res.status(201).json( {ESP32response: response });
});

export default ESP32Router