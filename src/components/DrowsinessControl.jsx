import React, { useState } from "react";
import axios from "axios";

const DrowsinessControl = () => {
  const [status, setStatus] = useState("Stopped");

  const startDetection = async () => {
    try {
      const response = await axios.post("http://localhost:5000/start-detection");
      setStatus("Started");
      console.log(response.data);
    } catch (error) {
      console.error("Error starting detection:", error);
    }
  };

  const stopDetection = async () => {
    try {
      const response = await axios.post("http://localhost:5000/stop-detection");
      setStatus("Stopped");
      console.log(response.data);
    } catch (error) {
      console.error("Error stopping detection:", error);
    }
  };

  return (
    <div>
      <h1>Drowsiness Detection Control</h1>
      <button onClick={startDetection}>Start Detection</button>
      <button onClick={stopDetection}>Stop Detection</button>
      <p>Status: {status}</p>
    </div>
  );
};

export default DrowsinessControl;
