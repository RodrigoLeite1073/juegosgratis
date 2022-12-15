let ratingList = {}

export function createStar(id) {
  const ratingById = ratingList[id] || 0
  let stars = ''
  /*if (ratingById > 0) {
    for (let i = 1; i <= ratingById; i++) {
      stars += `
      <img
        data-rating = "${i}"
        class="star"
        src="./public/star_active.svg"
        alt="star"
      />
    `
    }
  }*/

  for (let i = 1; i < 6; i++) {
    let star
    if (i <= ratingById) {
      star = './public/star_active.svg'
    } else {
      star = './public/star.svg'
    }
    stars += `
      <img
        data-rating = "${i}"
        class="star"
        src= ${star}
        alt="star"
      />
    `
  }
  return stars
}

export function rating(ratingAmount, parentId) {
  const stars = document.querySelectorAll(`div[id = "${parentId}"] .star`)

  for (let i = 0; i < 5; i++) {
    stars[i].setAttribute('src', 'public/star.svg')
  }
  for (let i = 0; i < ratingAmount; i++) {
    stars[i].setAttribute('src', 'public/star_active.svg')
  }

  saveRating(parentId, ratingAmount)
}

function saveRating(id, rating) {
  ratingList[id] = rating
  const ratingListString = JSON.stringify(ratingList)

  localStorage.setItem('rating', ratingListString)
}

export function getRating() {
  const listString = localStorage.getItem('rating') || '{}'
  ratingList = JSON.parse(listString)
}

export function updateRating(id) {
  getRating()
  rating(ratingList[id], id)
}
