# VidSync
🎯 Goal: Build a web app where users upload the same local video file and sync playback actions (play, pause, seek) via WebSocket.
## Features
- Upload and play local video files directly in the browser.
- Sync playback actions (play, pause, seek) across multiple users in real-time using WebSocket.
- Create or join watch party rooms with unique IDs.
- Ensure all participants use the same video file with optional file hash verification.
- Real-time updates for playback state and video position.
- Optional features like chat, host controls, and reconnect handling.

## Tech Stack
- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Node.js, Express, Socket.IO
- **Deployment**: Render, Vercel, or custom VPS

## Installation
1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/VidSync.git
    cd VidSync
    ```
2. Install dependencies:
    ```bash
    npm install
    ```
3. Start the server:
    ```bash
    npm start
    ```
4. Open the app in your browser at `http://localhost:3000`.

## Usage
1. Upload a local video file.
2. Create or join a watch party room.
3. Sync playback actions with other participants in real-time.

## Roadmap
- Add advanced UI with Tailwind CSS.
- Implement real-time chat functionality.
- Introduce host-only playback controls.
- Enhance playback sync with latency handling.

## Contributing
Contributions are welcome! Please fork the repository and submit a pull request.

## License
This project is licensed under the [MIT License](LICENSE).