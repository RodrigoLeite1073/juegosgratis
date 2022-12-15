import './styles/card-container.css'
import { card } from './short-description-card'

export function shortDescriptionList(list) {
  let template = ''
  list.forEach(el => {
    template += card(el)
  })
  return template
}
