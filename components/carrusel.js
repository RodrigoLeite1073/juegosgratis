export default function carrusel(images = []) {
  if (images.length > 0) {
    let carruselContent = "";
    let bullets = "";
    for (let i = 0; i < images.length; i++) {
      carruselContent += `
      <li class="glide__slide">
        <img class = "carousel__img" src = "${
          images[i]["image"]
        }" alt = "screenshot" data-index = '${i + 1}'>
      </li>
      `;
      bullets += `
<button class="glide__bullet" data-glide-dir="=${i}"></button>
      `;
    }
    const carrusel = `
<div class="glide">
  <div class="glide__track" data-glide-el="track">
    <ul class="glide__slides">
      ${carruselContent}
    </ul>
  </div>
  <div class="glide__arrows" data-glide-el="controls">
    <button class="glide__arrow glide__arrow--left" data-glide-dir="<"><span class="material-symbols-outlined">
arrow_back_ios
</span></button>
    <button class="glide__arrow glide__arrow--right" data-glide-dir=">"><span class="material-symbols-outlined">
arrow_forward_ios
</span></button>
  </div>
  <p>Toque la imagen para ampliarla</p>
  <div class="glide__bullets" data-glide-el="controls[nav]">
    ${bullets}
  </div>
</div>
    `;
    return carrusel;
  }
}
