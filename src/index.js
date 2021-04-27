import { loadAnimation } from "lottie-web";
import "./reset.scss";
import "./main.scss";

const profile = loadAnimation({
  container: document.getElementById("profile"), // Required
  path: "public/profile.json", // Required
  renderer: "svg", // Required
  loop: true, // Optional
  autoplay: true, // Optional
});

const arrowDown = loadAnimation({
  container: document.getElementById("arrow-down"), // Required
  path: "public/arrow-down.json", // Required
  renderer: "svg", // Required
  loop: true, // Optional
  autoplay: true, // Optional
});
