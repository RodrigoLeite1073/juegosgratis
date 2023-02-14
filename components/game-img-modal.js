export default function gameImgModal(imgUrl) {
  const $main = document.querySelector("main");
  const $modal = document.createElement("div");
  $modal.classList.add("game-img-modal");
  $modal.innerHTML = `
    <div class game-img-modal__container>
    <img src = '${imgUrl}' alt = 'imagen del juego'>
    </div>
  `;
  $main.insertAdjacentElement("beforeend", $modal);
}
