import anime from "animejs/lib/anime.es.js";
import { showDetail } from "./game-detail";

export function heroImage(heroImg, parentId) {
  const rectOrigin = heroImg.getBoundingClientRect();
  const $heroImg = document.createElement("img");
  const $body = document.querySelector("body");
  $heroImg.setAttribute("class", "hero-img");
  $heroImg.src = heroImg.src;
  $heroImg.setAttribute(
    "style",
    `position: fixed; top: ${rectOrigin.top}px; left:${rectOrigin.left}px; width: ${rectOrigin.width}px; height: ${rectOrigin.height}px; `
  );
  $body.appendChild($heroImg);
  heroAnimation(rectOrigin);
}

export function heroAnimation(rectOrigin) {
  /*const $imgDesti = document.querySelector(`#id_${parentId}`);
  const rectDesti = $imgDesti.getBoundingClientRect();*/
  const $header = document.querySelector("header");
  const rectHeader = $header.getBoundingClientRect();
  const $heroImg = document.querySelector(".hero-img");
  const vw = window.innerWidth;
  const vh = window.innerHeight;
  const scaleFact = (vw * 0.7) / rectOrigin.width;
  const endPosX = (vw - rectOrigin.width) / 2;
  const endPosY =
    (rectOrigin.height * scaleFact - rectOrigin.height) / 2 +
    rectHeader.height +
    16;
  const distX = endPosX - rectOrigin.left;
  const distY = endPosY - rectOrigin.top;

  window.scrollTo(0, 0);
  anime
    .timeline({
      easing: "easeInOutCubic",
    })
    .add({
      targets: ".hero-img",
      translateX: distX,
      translateY: distY,
      scale: scaleFact,
      duration: 500,
      complete: () => {},
    })
    .add({
      targets: ".game-detail article",
      duration: 1000,
      opacity: 1,
      complete: () => $heroImg.remove(),
    });
}
