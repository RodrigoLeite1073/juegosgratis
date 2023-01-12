import './styles/card-style.css'
import { createStar } from './star-rating'

export function card(obj) {
  const { id, title, thumbnail, short_description } = obj

  return `
  <article id="id_${id}" class="short-description-card" data-id=${id}>
      <img
        class = "img-card"
        src="${thumbnail}"
        alt="thumbnail"
      />
    <h3>${title}</h3>
      <p>${short_description}</p>
      <div  class="stars">
      ${createStar(id)}
      </div>
  </article>
  `
}
