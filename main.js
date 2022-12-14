import './style.css'
import './providers/freetogame-api.js'
import { getAll } from './providers/freetogame-api.js'
import { shortDescriptionList } from './components/short-description-list'
import { rating } from './components/star-rating'

const $main = document.querySelector('main'),
  $cardContainer = document.querySelector('.card-container')

window.addEventListener('DOMContentLoaded', async e => {
  const data = await getAll(),
    template = shortDescriptionList(data)
  $cardContainer.innerHTML = template
})

window.addEventListener('click', e => {
  if (!e.target.matches('.star')) {
    console.log('no es estrella')
    return false
  }
  rating(e.target)
})
