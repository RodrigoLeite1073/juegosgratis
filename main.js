import "./reset_css/reset.css";
import "./style.css";
import "./providers/freetogame-api.js";
import { getRating, rating } from "./components/star-rating";
import router from "./helpers/router";
import { setRect } from "./helpers/rectManager";
import { heroImage } from "./components/hero-image";

const $cardContainer = document.querySelector(".card-container");

window.addEventListener("DOMContentLoaded", e => {
  //index();
  router();
});

window.addEventListener("click", e => {
  if (e.target.matches(".star")) {
    const parentId = e.target.parentNode.parentNode,
      ratingAmount = e.target.dataset.rating;
    rating(ratingAmount, parentId);
  } else if (e.target.matches(".to-game > *")) {
    e.preventDefault();
    const parent = e.target.parentNode.parentNode;
    const id = parent.dataset.id;
    const $img = parent.querySelector(".img-card");
    const urlString = e.target.parentNode.href;
    heroImage($img, id);
    window.history.pushState(
      {
        pagina: history.length - 1,
      },
      "pagina 1",
      urlString
    );
  }
});

window.onpopstate = function (e) {
  router();
};
