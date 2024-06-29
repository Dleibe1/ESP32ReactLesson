import got from "got"

const sendMessageToESP32 = async (message) => {




  //Change this to the "Hostname" from the circuit python site.
  const yourHostname = "cpy-dd5f50"

  try {  //Hopefully this works...

    //Send a 'get' message to the ESP32 AND store the response from our ESP32 in a variable!
    
    const response = await got.get(`http://${yourHostname}.local:8080/${message}`)
    
    /*
    We could stop here, we've already sent our message and 
    probably did what we wanted with our led light.
    
    But... our ESP32 is on the other side of the planet, who knows
    what really happened?
    
    Let's see what our ESP32 has to say about what happened when it got our message...
    */

    //Hopefully the "response.body" variable will say "LED is now ON"
    return response.body

  } catch (error) {

    //If something went wrong, our ESP32 sends an error message
    
    //Student code here (change this message)
    let myErrorMessage = " Double Check the message you sent!"

    return error.message + myErrorMessage
  }
 

  //Let's check out the body of the response for ourselves first...

  //Let's begin the journey of getting that response to show up in our browser...
}


export default sendMessageToESP32
