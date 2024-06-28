import board
import digitalio
import wifi
import socketpool
import microcontroller

# Set up the LED
led = digitalio.DigitalInOut(board.D2)  # Onboard blue LED
led.direction = digitalio.Direction.OUTPUT

# Connect to WiFi
# print("Connecting to WiFi...")
# wifi.radio.connect("your_SSID", "your_PASSWORD")
# print("Connected to WiFi!")
# print("IP address:", wifi.radio.ipv4_address)

# Create a server socket on port 8080
pool = socketpool.SocketPool(wifi.radio)
sock = pool.socket(pool.AF_INET, pool.SOCK_STREAM)
sock.bind(('0.0.0.0', 8080))
sock.listen(1)

print("Server listening on port 8080")

while True:
    conn, addr = sock.accept()
    print("Connection from", addr)
    buffer = bytearray(1024)
    bytes_read = conn.recv_into(buffer)
    request_str = str(buffer[:bytes_read], 'utf-8')
    print("Request:", request_str)

    if 'GET /led_on' in request_str:
        led.value = True
        response = "HTTP/1.1 200 OK\r\nContent-Type: text/html\r\n\r\nLED is now ON"
    elif 'GET /led_off' in request_str:
        led.value = False
        response = "HTTP/1.1 200 OK\r\nContent-Type: text/html\r\n\r\nLED is now OFF"
    else:
        response = "HTTP/1.1 404 Not Found\r\nContent-Type: text/html\r\n\r\nPage not found"

    conn.send(response.encode('utf-8'))
    conn.close()
