export function setRect(id) {
  const $heroImg = document.querySelector(`#id_${id} .img-card`);
  let rect = $heroImg.getBoundingClientRect();
  let imgSrc = { imgSrc: $heroImg.src };
  let objMerged = { ...imgSrc, ...rect };
  console.log("merged", objMerged);
  const rectString = JSON.stringify(rect);
  console.log("set", rect);
  localStorage.setItem("rect", rectString);
}

export function getRect() {
  const rectString = localStorage.getItem("rect");
  const rectJSON = JSON.parse(rectString);
  console.log("get", rectJSON);
  return rectJSON;
}
