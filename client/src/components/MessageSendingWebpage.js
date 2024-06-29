import React, { useState } from "react"

const MessageSendingWebpage = ({ sendMessage, receivedMessage }) => {











//Below is the message we send to our ESP32 from the webpage!

//STUDENT CODE HERE.  Change the message below to what the ESP32 will "get"
let myMessage = "led_on"

//End student code

  
/*
    The code below is what Google Chrome figures out what to do with, then displays the result!
    This is what all websites really look like "under the hood"
*/

  return (

    //Try changing the white text below to something else!

    <>
      <h2>Welcome Franklin Students</h2>
      <h1>This site let's you send a message to your ESP32!</h1>

     {/* For a web page, "onClick" is called an "Event listener."  
      It works just like the Event block "When This Sprite Clicked" from Scratch! */}

      <button
        onClick={() => {
          sendMessage(myMessage)
        }}
      >

        Click this button to send your message "{myMessage}" to the ESP32

      </button>

      <h2>Meanwhile, somewhere on Earth (probably)...</h2>
      <h2>Our ESP32 sent this message back:</h2>

      <h3>{receivedMessage}</h3>
    </>
  )
}



export default MessageSendingWebpage
