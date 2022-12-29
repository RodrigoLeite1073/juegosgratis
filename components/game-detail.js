import { getById } from '../providers/freetogame-api'

export async function showDetail(id) {
  const $main = document.querySelector('main'),
    { thumbnail, title, genre, platform, description, game_url, screenshots } =
      await getById(id),
    $section = document.createElement('section')
  $section.classList.add('game-detail')
  $section.innerHTML = `
      <h2>${title}</h2>
      <img
    src="${thumbnail}"
    alt="screenshots"
    />
      <div class="props">
      <h4>Genero: ${genre}</h4>
      <h4>Plataforma: ${platform}</h4>
      </div>
      <div class="description-container">
      <p>
        ${description}
      </p>
      </div>
      <a href="${game_url}">
        <div class="play-btn">JUGAR</div>
      </a>
      `
  console.log('seccion', $section)
  $main.appendChild($section)
}
