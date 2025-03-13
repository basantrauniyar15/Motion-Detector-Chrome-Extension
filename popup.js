const video = document.getElementById("webcam");
const canvas = document.getElementById("motionCanvas");
const ctx = canvas.getContext("2d");
const status = document.getElementById("status");

let referenceFrame = null;

async function startWebcam() {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({ video: true });
    video.srcObject = stream;
    video.addEventListener("play", () => {
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      status.innerText = "Motion detection started.";
      detectMotion();
    });
  } catch (err) {
    console.error("Error accessing webcam:", err);
    status.innerText = `Error accessing webcam: ${err.name} - ${err.message}`;
  }
}

function detectMotion() {
  const drawFrame = () => {
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    const currentFrame = ctx.getImageData(0, 0, canvas.width, canvas.height);

    if (referenceFrame) {
      let motionCount = 0;
      for (let i = 0; i < currentFrame.data.length; i += 4) {
        const diff =
          Math.abs(currentFrame.data[i] - referenceFrame.data[i]) +
          Math.abs(currentFrame.data[i + 1] - referenceFrame.data[i + 1]) +
          Math.abs(currentFrame.data[i + 2] - referenceFrame.data[i + 2]);
        if (diff > 50) motionCount++;
      }

      status.innerText = motionCount > 5000 ? "Motion Detected!" : "No motion detected.";
    }

    referenceFrame = ctx.getImageData(0, 0, canvas.width, canvas.height);
    requestAnimationFrame(drawFrame);
  };

  drawFrame();
}

startWebcam();
