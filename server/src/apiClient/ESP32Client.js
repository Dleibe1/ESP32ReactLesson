import got from "got"

const sendMessageToESP32 = async (message) => {

    //Change this to the "Hostname" from the circuit python site.
    const yourHostname = "cpy-dd5f50"

    //Here we send a message to the ESP32 AND store the response in a variable!
    const response = await got.get(`http://${yourHostname}.local:8080/${message}`)

    /*

    We could stop here, we've already turned on our LED.
    But... We want our user to know that it worked.  Remember,
    they're on the other side of the planet.  For all they know,
    Anything could have happened.

    */

    //Let's check out the body of the response for ourselves first...
    console.log(response.body)

    //Let's begin the journey of getting that response to show up in our browser...
    return response.body

}

export default sendMessageToESP32
