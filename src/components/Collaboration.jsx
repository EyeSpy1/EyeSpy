import { eyespy_logo, check } from "../assets";
import React, { useState } from "react";
import { collabApps, collabContent, collabText } from "../constants";
import Button from "./Button";
import Section from "./Section";
import Heading from "./Heading";
import { LeftCurve, RightCurve } from "./design/Collaboration";
import axios from "axios";
import "../App.css";  // Ensure the CSS file is imported

const Collaboration = () => {
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  // Start detection
  const startDetection = async () => {
    setLoading(true);
    try {
      const response = await axios.post("https://drowsiness-app.onrender.com/start-detection");
      setStatus("Started");
      console.log("Detection started:", response.data);
    } catch (error) {
      console.error("Error starting detection:", error);
      alert("There was an error starting the detection. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // Stop detection
  const stopDetection = async () => {
    setLoading(true);
    try {
      const response = await axios.post("https://drowsiness-app.onrender.com/stop-detection");
      setStatus("Stopped");
      console.log("Detection stopped:", response.data);
    } catch (error) {
      console.error("Error stopping detection:", error);
      alert("There was an error stopping the detection. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Section crosses id="working">
      <div className="container lg:flex">
        <div className="max-w-[25rem]">
          <h2 className="h2 mb-4 md:mb-8">The Technology Powering Eyespy</h2>

          <ul className="max-w-[22rem] mb-10 md:mb-14">
            {collabContent.map((item) => (
              <li className="mb-3 py-3" key={item.id}>
                <div className="flex items-center">
                  <img src={check} width={24} height={24} alt="check" />
                  <h6 className="body-2 ml-5">{item.title}</h6>
                </div>
                {item.text && (
                  <p className="body-2 mt-3 text-n-4">{item.text}</p>
                )}
              </li>
            ))}
          </ul>

          <div className="flex gap-4">
            <Button onClick={startDetection} disabled={loading}>
              {loading ? (
                <>
                  <div className="spinner"></div>
                  Starting Detection...
                </>
              ) : (
                "Start Detection"
              )}
            </Button>

            <Button onClick={stopDetection} disabled={loading}>
              {loading ? (
                <>
                  <div className="spinner"></div>
                  Stopping...
                </>
              ) : (
                "Stop Detection"
              )}
            </Button>
          </div>

          {status && <p className="mt-4 text-green-600">Status: {status}</p>}
        </div>

        <div className="lg:ml-auto xl:w-[38rem] mt-4">
          <p className="body-2 mb-8 text-n-4 md:mb-16 lg:mb-32 lg:w-[22rem] lg:mx-auto">
            {collabText}
          </p>

          <div className="relative left-1/2 flex w-[22rem] aspect-square border border-n-6 rounded-full -translate-x-1/2 scale:75 md:scale-100">
            <div className="flex w-60 aspect-square m-auto border border-n-6 rounded-full">
              <div className="w-[6rem] aspect-square m-auto p-[0.2rem] bg-conic-gradient rounded-full">
                <div className="flex items-center justify-center w-full h-full bg-n-8 rounded-full">
                  <img
                    src={eyespy_logo}
                    width={70}
                    height={80}
                    alt="eyespy-logo"
                  />
                </div>
              </div>
            </div>

            <ul>
              {collabApps.map((app, index) => (
                <li
                  key={app.id}
                  className={`absolute top-0 left-1/2 h-1/2 -ml-[1.6rem] origin-bottom rotate-${index * 45}`}
                >
                  <div
                    className={`relative -top-[1.6rem] flex w-[3.2rem] h-[3.2rem] bg-n-7 border border-n-1/15 rounded-xl -rotate-${index * 45}`}
                  >
                    <img
                      className="m-auto"
                      width={app.width}
                      height={app.height}
                      alt={app.title}
                      src={app.icon}
                    />
                  </div>
                </li>
              ))}
            </ul>

            <LeftCurve />
            <RightCurve />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Collaboration;
