import './style.css'
import './providers/freetogame-api.js'
import { getAll } from './providers/freetogame-api.js'
import { shortDescriptionList } from './components/short-description-list'

const $main = document.querySelector('main'),
  $cardContainer = document.querySelector('.card-container')

window.addEventListener('DOMContentLoaded', async e => {
  const data = await getAll(),
    template = shortDescriptionList(data)
  $cardContainer.innerHTML = template
})
