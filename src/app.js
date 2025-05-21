/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let pronouns = ["the", "our"];
let adjectives = ["great", "big"];
let nouns = ["jogger", "racoon"];
let extensions = [".com", ".net", ".us", ".io"];

let domains = [];

function generateAllDomains() {
  for (let i = 0; i < pronouns.length; i++) {
    for (let j = 0; j < adjectives.length; j++) {
      for (let k = 0; k < nouns.length; k++) {
        for (let l = 0; l < extensions.length; l++) {
          let word = pronouns[i] + adjectives[j] + nouns[k];
          let ext = extensions[l];

          if (word.endsWith(ext.substring(1))) {
            let hacked =
              word.substring(0, word.length - ext.length + 1) +
              "." +
              ext.substring(1);
            domains.push(hacked);
          } else {
            domains.push(word + ext);
          }
        }
      }
    }
  }
}

function getRandomDomain() {
  let index = Math.floor(Math.random() * domains.length);
  return domains[index];
}

window.onload = function() {
  console.log("Hello Rigo from the console!");

  generateAllDomains();

  const button = document.getElementById("generateBtn");
  const output = document.getElementById("domainOutput");

  button.addEventListener("click", function() {
    let randomDomain = getRandomDomain();
    output.textContent = randomDomain;
  });
};
