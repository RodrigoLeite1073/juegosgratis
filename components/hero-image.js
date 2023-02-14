import anime from "animejs/lib/anime.es.js";
import { getRect } from "../helpers/rectManager";
import { getById } from "../providers/freetogame-api";
import { showDetail } from "./game-detail";

export async function heroImage($img, id) {
  const rectOrigin = $img.getBoundingClientRect();
  const data = await getById(id);
  const $heroImg = document.createElement("img");
  const $main = document.querySelector("main");
  $heroImg.setAttribute("class", "hero-img");
  $heroImg.src = data.thumbnail;
  $heroImg.setAttribute(
    "style",
    `position: fixed; top: ${rectOrigin.top}px; left:${rectOrigin.left}px; width: ${rectOrigin.width}px; height: ${rectOrigin.height}px; `
  );
  $main.innerHTML = "";
  window.scrollTo(0, 0);
  $main.appendChild($heroImg);
  heroAnimation(rectOrigin, data);
}

export function heroAnimation(rectOrigin, data) {
  const $header = document.querySelector("header");
  const rectHeader = $header.getBoundingClientRect();
  //const $heroImg = document.querySelector(".hero-img");
  const vw = window.innerWidth;
  //const vh = window.innerHeight;
  const scaleFact = (vw * 0.7) / rectOrigin.width;
  const endPosX = (vw - rectOrigin.width) / 2;
  const endPosY =
    (rectOrigin.height * scaleFact - rectOrigin.height) / 2 +
    rectHeader.height +
    16;
  const distX = endPosX - rectOrigin.left;
  const distY = endPosY - rectOrigin.top;

  anime({
    easing: "easeInOutCubic",
    targets: ".hero-img",
    translateX: distX,
    translateY: distY,
    scale: scaleFact,
    duration: 500,
    complete: anim => {
      showDetail(data);
    },
  });
}
