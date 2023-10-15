import "bootstrap";
import "./style.css";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  document.querySelector("#nombresDominios").innerHTML = generatorDomainName();
};

let generatorDomainName = () => {
  let pronoun = ["the", "our", "my"];
  let adj = ["great", "big", "little"];
  let noun = ["jogger", "racoon", "cat"];
  let extensions = [".com", ".net", ".us", ".io"];
  let nombreDominio = "";
  for (let a = 0; a < pronoun.length; a++) {
    for (let b = 0; b < adj.length; b++) {
      for (let c = 0; c < noun.length; c++) {
        for (let d = 0; d < extensions.length; d++) {
          nombreDominio += `<li class="list-group-item"> ${pronoun[a]}${adj[b]}${noun[c]}${extensions[d]}</li>`;
        }
      }
    }
  }
  return nombreDominio;
};
