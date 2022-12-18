import anime from 'animejs/lib/anime.es.js'

export function heroImage(el) {
  const rect = el.getBoundingClientRect(),
    $heroImg = document.createElement('img'),
    $main = document.querySelector('main')
  $heroImg.src = el.src
  $heroImg.setAttribute('class', 'hero-img')
  $heroImg.setAttribute(
    'style',
    `position: fixed; top: ${rect.top}px; left:${rect.left}px; width: ${rect.width}px`
  )
  $main.appendChild($heroImg)
  heroAnimation(rect, $heroImg)
}

export function heroAnimation(rect, hero) {
  const endPosX = (window.innerWidth - rect.width) / 2,
    endPosY = (window.innerHeight - rect.height) / 2,
    distX = endPosX - rect.left,
    distY = endPosY - rect.top
  anime({
    targets: '.hero-img',
    translateX: distX,
    translateY: distY,
    scale: 4,
    duration: 1500,
    complete: anim => {
      //hero.setAttribute('style', 'display:none;')
      hero.remove()
    },
  })
}
