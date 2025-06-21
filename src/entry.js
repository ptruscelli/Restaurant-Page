import "./styles.css";

import { loadHomePage } from "./home.js";
import { loadAboutPage } from "./about.js";
import { loadMenuPage } from "./menu.js";

console.log("did someone say steaks??");

loadHomePage(); // open home page when user first loads website, instead of blank page

const homeBtn = document.querySelector("#home-button");
const aboutBtn = document.querySelector("#about-button");
const menuBtn = document.querySelector("#menu-button");

homeBtn.addEventListener("click", loadHomePage);
aboutBtn.addEventListener("click", loadAboutPage);
menuBtn.addEventListener("click", loadMenuPage);