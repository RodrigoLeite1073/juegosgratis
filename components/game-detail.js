import { getById } from "../providers/freetogame-api";
import { heroImage } from "./hero-image";

export function showDetail(infoData) {
  const $main = document.querySelector("main"),
    data = infoData,
    $section = document.createElement("section");

  const heroImgSrc = data.thumbnail;

  const template = `
      <article class = "game-detail">
        <img class = 'game-detail__hero-img' src = '${data.thumbnail}' alt = 'game image'>
        <h2>${data.title}</h2>
        </div>
        <div class="props">
        <h4>Genero: ${data.genre}</h4>
        <h4>Plataforma: ${data.platform}</h4>
        </div>
        <div class="description-container">
        <p>
          ${data.description}
        </p>
        </div>
        <a href="${data.game_url}" target="_blank">
          <div class="play-btn">JUGAR</div>
        </a>
    </article>
      `;
  $main.innerHTML = template;
}
