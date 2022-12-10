import './style.css'
import './providers/freetogame-api.js'
import { getAll } from './providers/freetogame-api.js'
import { card } from './components/card'

const $main = document.querySelector('main'),
  $cardContainer = document.querySelector('.card-container')

window.addEventListener('DOMContentLoaded', async e => {
  const data = await getAll(),
    game = card(data[0])
  console.log(data[0])
  $cardContainer.innerHTML = game
})
