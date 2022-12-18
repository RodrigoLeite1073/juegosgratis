import './styles/card-style.css'
import { createStar } from './star-rating'

export function card(obj) {
  const { id, title, thumbnail, short_description } = obj

  return `
  <article class="short-description-card">
      <img
        class = "img-card"
        src="${thumbnail}"
        alt="thumbnail"
      />
    <h3>${title}</h3>
      <p>${short_description}</p>
      <div id="${id}" class="stars">
      ${createStar(id)}
      </div>
  </article>
  `
}
