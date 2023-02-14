import Glide from "@glidejs/glide";

export default function startGlid() {
  new Glide(".glide", {
    type: "carousel",
    startAt: 1,
    autoplay: 3000,
  }).mount();
}
