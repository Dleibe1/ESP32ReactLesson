import wifi
import socketpool
import time

# Function to create and close a socket on a specific port
def close_port(port):
    pool = socketpool.SocketPool(wifi.radio)
    try:
        sock = pool.socket(pool.AF_INET, pool.SOCK_STREAM)
        sock.bind(('0.0.0.0', port))
        sock.listen(1)
        print(f"Port {port} successfully opened. Now closing it.")
        sock.close()
    except OSError as e:
        if e.errno == 112:  # EADDRINUSE
            print(f"Port {port} is in use, attempting to close it.")
            try:
                sock.close()
                print(f"Port {port} closed successfully.")
            except Exception as close_error:
                print(f"Failed to close port {port}: {close_error}")
        else:
            print(f"Unexpected error on port {port}: {e}")

# List of ports to check and close
ports_to_check = [8080, 8081, 80]

# Iterate through the ports and attempt to close them
for port in ports_to_check:
    close_port(port)
    time.sleep(1)  # Wait for a second before checking the next port

print("Port cleanup completed.")
