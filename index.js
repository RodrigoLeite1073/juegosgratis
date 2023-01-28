import { shortDescriptionList } from "./components/short-description-list";
import { getRating } from "./components/star-rating";
import { getAll } from "./providers/freetogame-api";

export default async function index() {
  getRating();
  const $main = document.querySelector("main");
  const $root = document.createElement("div");
  const data = await getAll();
  const template = shortDescriptionList(data);
  $root.classList.add("base");
  //const $gameDetail = document.querySelector(".game-detail");
  //if ($gameDetail) $gameDetail.remove();
  $root.innerHTML = template;
  $main.innerHTML = "";
  $main.appendChild($root);
}
