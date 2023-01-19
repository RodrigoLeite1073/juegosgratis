import { shortDescriptionList } from "./components/short-description-list";
import { getRating } from "./components/star-rating";
import { getAll } from "./providers/freetogame-api";

export default async function index() {
  getRating();
  const $cardContainer = document.querySelector(".card-container");
  const data = await getAll();
  const template = shortDescriptionList(data);
  const $gameDetail = document.querySelector(".game-detail");
  /*if ($gameDetail) $gameDetail.remove();*/
  $cardContainer.innerHTML = template;
}
