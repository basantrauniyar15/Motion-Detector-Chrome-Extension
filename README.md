# 👁️ Motion Detector - Chrome Extension

**Motion Detector** is a lightweight Chrome Extension that detects movement using your webcam. It compares real-time video frames and alerts you when motion is detected. This tool is ideal for quick monitoring or as a foundation for more advanced motion-based extensions.

---

## 📌 Features
- Real-time motion detection using webcam.
- Simple and clean UI.
- Displays status: "Motion Detected!" or "No motion detected."
- Easy to use – no complex setup required.

---

## 🛠️ Tech Stack
- JavaScript
- HTML
- CSS
- Chrome Extension APIs

---

## 🚀 Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/motion-detector-extension.git
cd motion-detector-extension

**### 2. Load the Extension in Chrome**
Open Chrome.
Go to chrome://extensions/.
Enable Developer Mode (top-right toggle).
Click on "Load unpacked".
Select the folder where your extension files are located.

📁 File Structure
motion-detector-extension/
│
├── manifest.json         # Chrome Extension config
├── popup.html            # Main interface
├── popup.js              # Webcam + Motion detection logic
├── content.js            # (Optional, can be empty or removed if unused)
├── style.css             # Styling
└── icon.png              # Extension icon

📷 How It Works
The webcam feed is drawn on a canvas.
Frame-by-frame pixel data is compared.
If a significant difference is detected, a motion alert is displayed.

📜 License
This project is licensed under the MIT License.
