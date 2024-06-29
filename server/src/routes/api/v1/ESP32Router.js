import express from "express"
import sendMessageToESP32 from "../../../apiClient/SendMessageToESP32.js"

const ESP32Router = new express.Router()

ESP32Router.post("/", async (req, res) => {
  const message = req.body.message

    //Our message made it to our server that's talking to our browser!
    //Time to send it to the webpage.
    const response = await sendMessageToESP32(message)

    //Response (res) with the response we got from our ESP32
    return res.status(200).json({ ESP32ResponseMessage: response })
})

export default ESP32Router
