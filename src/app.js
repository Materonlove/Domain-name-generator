/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");

  document.querySelector("button").addEventListener("click", ejecutar);
};

let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];

const ejecutar = () => {
  let texto;
  let parrafo;

  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      console.log(pronoun[i] + adj[j]);
      for (let k = 0; k < noun.length; k++) {
        console.log(pronoun[i] + adj[j] + noun[k]);
        parrafo = document.createElement("p");
        texto = document.createTextNode(pronoun[i] + adj[j] + noun[k] + ".com");
        parrafo.appendChild(texto);
        document.querySelector("#resultado-Dominios").appendChild(parrafo);
      }
    }
  }
};
