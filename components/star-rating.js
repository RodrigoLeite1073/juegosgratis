export function createStar(rating = 0) {
  let stars = ''
  for (let i = 1; i < 6; i++) {
    stars += `
      <img
        data-rating = "${i}"
        class="star"
        src="./public/star.svg"
        alt="star"
      />
    `
  }
  return stars
}

export function rating(star) {
  const val = star.dataset.rating,
    parent = star.parentNode.id,
    stars = document.querySelectorAll(`div[id = "${parent}"] .star`)

  for (let i = 0; i < 5; i++) {
    stars[i].setAttribute('src', 'public/star.svg')
  }
  for (let i = 0; i < val; i++) {
    stars[i].setAttribute('src', 'public/star_active.svg')
  }
}
