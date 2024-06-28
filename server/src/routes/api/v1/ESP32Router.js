import express from "express"
import esp32Test from "../../../apiClient/ESP32Client.js"

const ESP32Router = new express.Router()

ESP32Router.post("/", async (req, res) => {
  const { command } = req.body
  const response = await esp32Test(command)
  return res.status(200).json({ ESP32ResponseMessage: response })
})

export default ESP32Router
