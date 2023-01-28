import "./styles/card-style.css";
import { createStar } from "./star-rating";

export function card(obj) {
  const { id, title, thumbnail, short_description } = obj;
  const hash = title.replace(/\s/g, "_");
  const base = location.pathname;
  const url = `${base}#/${hash}/?game_id=${id}`;

  return `
  <article id="id_${id}" class="short-description-card" data-id=${id}>
      <a class="to-game" href=${url}>
        <img
          class = "img-card"
          src="${thumbnail}"
          alt="thumbnail"
        />
      <h3>${title}</h3>
        <p>${short_description}</p>
      </a>
      <div  class="stars">
      ${createStar(id)}
      </div>
  </article>
  `;
}
