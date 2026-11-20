import http.server
import socket
import os
import sys

PORT = int(os.environ.get("PORT", 8080))
DIRECTORY = os.path.dirname(os.path.abspath(__file__))

class Handler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

    def log_message(self, format, *args):
        sys.stderr.write(f"[{self.log_date_time_string()}] {format % args}\n")

    def end_headers(self):
        # Prevent caching during development so changes reflect instantly
        self.send_header('Cache-Control', 'no-cache, no-store, must-revalidate')
        self.send_header('Pragma', 'no-cache')
        self.send_header('Expires', '0')
        super().end_headers()

def is_port_in_use(port):
    with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
        return s.connect_ex(('127.0.0.1', port)) == 0

def find_available_port(start_port):
    port = start_port
    while port < start_port + 50:
        if not is_port_in_use(port):
            return port
        port += 1
    return start_port

def start_server():
    os.chdir(DIRECTORY)
    env_port = os.environ.get("PORT")
    port = int(env_port) if env_port else find_available_port(PORT)
    url = f"http://localhost:{port}"

    print("=" * 65)
    print("🚀 Solvify Hub — 'How To' Solutions Portal Server")
    print(f"🌐 Serving directory: {DIRECTORY}")
    print(f"🔗 Local URL:        {url}")
    print("=" * 65)
    print("Press Ctrl+C to stop the server.\n")

    # Optional: only open browser if explicitly requested via command line argument '--open'
    if "--open" in sys.argv:
        try:
            import webbrowser
            webbrowser.open(url)
        except Exception as e:
            print(f"Could not open browser automatically: {e}")

    server = http.server.ThreadingHTTPServer(("", port), Handler)
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        print("\nShutting down server cleanly. Goodbye!")
        server.server_close()

if __name__ == "__main__":
    start_server()
