import {
  benefitAlert,
  benefitDrowsy,
  benefitEverywhere,
  benefitFocus,
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  benefitIntegration,
  benefitSafe,
  chromecast,
  disc02,
  image3,
  discordBlack,
  facebook,
  image1,
  file02,
  image7,
  homeSmile,
  instagram,

  image2,
  image5,
  plusSquare,
  image6,
  image8,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  image4,
  sliders04,
  telegram,
  twitter,
  yourlogo,
} from "../assets";

export const navigation = [
  {
    id: "0",
    title: "Features",
    url: "#features",
  },
 
  {
    id: "2",
    title: "Working",
    url: "#working",
  },
  {
    id: "3",
    title: "Motivation",
    url: "#roadmap",
  },

];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];



export const companyLogos = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo];

export const brainwaveServices = [
  "Drowsiness Detection",
  "Real-time Alerts",
  "Seamless Integration",
];

export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const roadmap = [
  {
    id: "0",
    title: "General Well-being:",
    text: "In today’s fast-paced world, maintaining focus and alertness is key to preventing accidents, improving productivity, and maintaining overall well-being. EyeSpy helps monitor drowsiness to keep people alert and safe in any situation.",
    imageUrl: roadmap1,
    colorful: true,
  },
  {
    id: "1",
    title: "Student Life:",
    text: "Long study sessions, late-night assignments, and constant screen time can lead to fatigue, impacting concentration and performance. EyeSpy helps students stay awake, focused, and productive, ensuring they make the most of their study time.",
    imageUrl: roadmap2,
    colorful: true,
  },
  {
    id: "2",
    title: "Driver Safety: ",
    text: "Drowsy driving is a major cause of road accidents. EyeSpy provides real-time alerts to drivers when signs of fatigue are detected, promoting safety on the road and reducing the risk of accidents caused by drowsiness.",
    imageUrl: roadmap3,
    colorful: true,
  },
  {
    id: "3",
    title: "Professional Life: ",
    text: "Professionals often face long working hours and high-pressure environments that can lead to mental fatigue. EyeSpy ensures that they stay sharp, improving focus and decision-making, which ultimately boosts productivity and prevents burnout.",
    imageUrl: roadmap4,
    colorful: true,
  },
];

export const collabText ="The Eyespy Drowsiness Detection model tracks eye behavior in real-time to detect drowsiness. It uses image processing and thresholds to trigger alerts, with OpenCV for video capture and landmark detection."
export const collabContent = [
  {
    id: "0",
    title: "Eye Detection:",
    text: "The model locates eyes using facial landmarks identified through a pre-trained dlib library detector.",
  },
  {
    id: "1",
    title: "Eye Aspect Ratio (EAR):",
    text: "Calculates distances between specific eye points to measure how open or closed the eye is."
  },
  {
    id: "2",
    title: "Alert Mechanism:",
    text: "If the EAR stays below a set threshold for too long, the system generates a voice or sound alert using pyttsx3 or playsound."
  },
];

export const collabApps = [
  {
    id: "0",
    title: "image1",
    icon: image1,
    width: 36,
    height: 36,
  },
  {
    id: "1",
    title: "image2",
    icon: image2,
    width: 36,
    height: 36,
  },
  {
    id: "2",
    title: "image3",
    icon: image3,
    width: 36,
    height: 36,
  },
  {
    id: "3",
    title: "image4",
    icon: image4,
    width: 36,
    height: 36,
  },
  {
    id: "4",
    title: "image5",
    icon: image5,
    width: 36,
    height: 36,
  },
  {
    id: "5",
    title: "image6",
    icon: image6,
    width: 36,
    height: 36,
  },
  {
    id: "6",
    title: "image7",
    icon: image7,
    width: 36,
    height: 36,
  },
  {
    id: "7",
    title: "image8",
    icon: image8,
    width: 36,
    height: 36,
  },
];


export const benefits = [
  {
    id: "0",
    title: "Drowsiness Detection",
    text: "Uses AI to accurately detect signs of drowsiness in students, drivers, and professionals, ensuring a safe experience.",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitDrowsy,
  },
  {
    id: "1",
    title: "Real-time Alerts",
    text: "Get instant notifications when drowsiness is detected, so you can take action before it leads to dangerous situations.",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitAlert,
    light: true,
  },
  {
    id: "2",
    title: "Works Everywhere",
    text: "Whether you’re a student, driver, or professional, our platform provides reliable drowsiness detection anytime, anywhere.",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitEverywhere,
  },
  {
    id: "3",
    title: "Improves Focus",
    text: "Helps users stay alert and focused, reducing the risks of fatigue and improving overall productivity.",
    backgroundUrl: "./src/assets/benefits/card-4.svg",
    iconUrl: benefitIcon4,
    imageUrl: benefitFocus,
    light: true,
  },
  {
    id: "4",
    title: "Stay Safe",
    text: "By preventing drowsiness-related accidents, users can drive or work safely with peace of mind.",
    backgroundUrl: "./src/assets/benefits/card-5.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitSafe,
  },
  {
    id: "5",
    title: "Seamless Integration",
    text: "Integrate with wearables and other devices for more accurate monitoring and improved detection capabilities.",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitIntegration,
  },
];
;
