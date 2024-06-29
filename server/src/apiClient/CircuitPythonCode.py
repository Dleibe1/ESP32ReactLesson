import board
import digitalio
import wifi
import socketpool
import microcontroller
import os

# Set up our connection.  Don't worry about this part for now.

pool = socketpool.SocketPool(wifi.radio)
sock = pool.socket(pool.AF_INET, pool.SOCK_STREAM)
# sock.bind(('0.0.0.0', 8080))
sock.bind(('0.0.0.0', 8081))
sock.listen(1)

print("Server is listening")


# Create a variable called 'led' we can use to control our led light.
# We could give this variable any name, as long as it's the name we
# use from now on.

led = digitalio.DigitalInOut(board.D2)  # Onboard blue LED
led.direction = digitalio.Direction.OUTPUT





# Repeat forever
while True:
    

    # This part gets the ESP32 ready to send and receive messages from the internet!
    # Don't worry about this part for now, we will learn more about it another day...
    
    conn, addr = sock.accept()
    print("Connection from", addr)
    buffer = bytearray(1024)
    bytes_read = conn.recv_into(buffer)
    request_str = str(buffer[:bytes_read], 'utf-8')
    print("Request:", request_str)








    





    # Our IF statement:

    # What to do IF the message "led_on" is in the message...
    if 'GET /led_on' in request_str:

        #How about... If we get the message "led_on" turn on that led.
        
        # Student code here:
        led.value = True
        # End student code


        # Now Let's send a message back to let our user know what happened.
        
        # Send a message back that basically says: 
        
        # "Dear Mr. Google chrome, prepare yourself for some text... 
        # Okay here goes... "LED is now ON"
       
        response = "HTTP/1.1 200 OK\r\nContent-Type: text/html\r\n\r\nLED is now ON"


    #If the message "led_off" is in the get request...
    elif 'GET /led_off' in request_str:

        #Student code here:
        led.value = False
        ##End student code

        #Send a message back: "LED is now OFF"
        response = "HTTP/1.1 200 OK\r\nContent-Type: text/html\r\n\r\nLED is now OFF"

    #If you sent a message and I don't know what to do with it:
    else:
        response = "HTTP/1.1 404 Not Found\r\nContent-Type: text/html\r\n\r\nPage not found"



    
    conn.send(response.encode('utf-8'))
    conn.close()






    
