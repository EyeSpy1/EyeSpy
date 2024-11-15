// src/DrowsinessDetection.js
import React, { useState, useEffect } from 'react';
import { startDetection, stopDetection, checkAlert } from './api';

const DrowsinessDetection = () => {
  const [alert, setAlert] = useState(false);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      checkAlertStatus();
    }, 2000); // Check for alert every 2 seconds

    return () => clearInterval(interval);
  }, []);

  const checkAlertStatus = async () => {
    const data = await checkAlert();
    setAlert(data.alert);
  };

  const handleStart = async () => {
    const response = await startDetection();
    if (response.status === 'Drowsiness detection started') {
      setIsRunning(true);
    }
  };

  const handleStop = async () => {
    const response = await stopDetection();
    if (response.status === 'Drowsiness detection stopped') {
      setIsRunning(false);
    }
  };

  return (
    <div>
      <h1>Drowsiness Detection</h1>
      <div>
        <button onClick={handleStart} disabled={isRunning}>Start Detection</button>
        <button onClick={handleStop} disabled={!isRunning}>Stop Detection</button>
      </div>
      <div>
        <p>Status: {isRunning ? 'Detection Running' : 'Detection Stopped'}</p>
        {alert && <p>ALERT! Drowsiness detected!</p>}
      </div>
    </div>
  );
};

export default DrowsinessDetection;
