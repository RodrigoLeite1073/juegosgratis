export function card(obj) {
  const { id, title, thumbnail, short_description } = obj

  return `
  <article class="short-description-card">
      <img
        src="${thumbnail}"
        alt="thumbnail"
      />
    <h3>${title}</h3>
      <p>${short_description}</p>
      <div class="stars">
      <img
        id="star1"
        src="./public/white-star.svg"
        alt="star"
      />
      <img
        id="star2"
        src="./public/white-star.svg"
        alt="star"
      />
      <img
      id="star3"
        src="./public/white-star.svg"
        alt="star"
      />
      <img
      id="star4"
        src="./public/white-star.svg"
        alt="star"
      />
      <img
      id="star5"
        src="./public/white-star.svg"
        alt="star"
      />
      </div>
  </article>
  `
}
