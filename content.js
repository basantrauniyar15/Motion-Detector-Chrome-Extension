navigator.mediaDevices.getUserMedia({ video: true })
  .then(function(stream) {
    const videoElement = document.querySelector('video');
    videoElement.srcObject = stream;
  })
  .catch(function(err) {
    console.error("Error accessing webcam:", err.name, err.message);
  });
