import { getById } from "../providers/freetogame-api";
import { heroImage } from "./hero-image";

export async function showDetail(id) {
  const $main = document.querySelector("main"),
    { thumbnail, title, genre, platform, description, game_url, screenshots } =
      await getById(id),
    $section = document.createElement("section");
  let $heroImg = document.querySelector(`#id_${id} img`);

  $section.classList.add("game-detail");
  $section.innerHTML = `
      <article>
        <img class = 'game-detail__hero-img' src = '${thumbnail}' alt = 'game image'>
        <h2>${title}</h2>
        </div>
        <div class="props">
        <h4>Genero: ${genre}</h4>
        <h4>Plataforma: ${platform}</h4>
        </div>
        <div class="description-container">
        <p>
          ${description}
        </p>
        </div>
        <a href="${game_url}" target="_blank">
          <div class="play-btn">JUGAR</div>
        </a>
    </article>
      `;
  if ($heroImg) {
    $main.appendChild($section);
    heroImage($heroImg, id);
  } else {
    $main.appendChild($section);
  }
}
