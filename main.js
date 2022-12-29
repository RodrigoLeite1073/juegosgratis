import './style.css'
import './providers/freetogame-api.js'
import { getAll, getById } from './providers/freetogame-api.js'
import { shortDescriptionList } from './components/short-description-list'
import { getRating, rating } from './components/star-rating'
import { heroAnimation, heroImage } from './components/hero-image'
import { showDetail } from './components/game-detail'

const $cardContainer = document.querySelector('.card-container')

window.addEventListener('DOMContentLoaded', async e => {
  getRating()

  const data = await getAll(),
    template = shortDescriptionList(data)

  $cardContainer.innerHTML = template
})

window.addEventListener('click', e => {
  if (e.target.matches('.star')) {
    const parentId = e.target.parentNode.parentNode,
      ratingAmount = e.target.dataset.rating
    rating(ratingAmount, parentId)
  } else if (e.target.matches('.img-card')) {
    //const $heroImg = heroImage(e.target)
    const parentId = e.target.parentNode.id
    showDetail(parentId)
  } else {
    document.querySelector('.game-detail').remove()
  }
})
