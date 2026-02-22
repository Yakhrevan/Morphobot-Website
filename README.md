# 🤖 Morphobot Control Station v2.0

A professional, HUD-style WebRTC control station for the Morphobot Hybrid Rover/Drone.

## 🚀 Deployment Options

### 🌐 Web (Permanent Hosting)
The recommended "standard" deployment path:
1.  **Push to GitHub**: Create a repository and push your `M4 Website.html` (renamed to `index.html`) and `vercel.json`.
2.  **Connect to Vercel**: Import your GitHub repository to [Vercel](https://vercel.com) for a permanent, auto-updating public URL.

### 💻 Desktop (Standalone App)
Run the control station as a dedicated Windows application:
1.  **Install dependencies**: `npm install`
2.  **Build .exe**: `npm run build`
3.  **Run**: Launch the portable executable from the `dist/` folder.

## 📡 Connection Setup
- **Signaling Server**: Ensure `server.js` is running on your Raspberry Pi (or a public cloud server).
- **Robot Client**: Ensure `robot.js` and `bridge_node.py` are active on the Pi.
- **Link**: Enter your Pi's IP address (local) or your Cloud Server's URL (public) in the dashboard to connect.

## 🛠️ Tech Stack
- **Frontend**: Vanilla HTML5, CSS3, JavaScript
- **Backend**: Node.js, WebRTC, WebSocket
- **Integration**: ROS 2 (Robot Operating System)
