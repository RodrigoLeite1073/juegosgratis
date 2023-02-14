import index from "..";
import { showDetail } from "../components/game-detail";
import { heroImage } from "../components/hero-image";
import { getById } from "../providers/freetogame-api";

export default async function router() {
  const loc = document.location;
  const href = loc.href;
  const hash = loc.hash;
  const regex = /\?.*/;
  if (!hash || hash === "#/") {
    index();
  } else if (hash.includes("?")) {
    const searchParams = new URLSearchParams(href.match(regex)[0]);
    const gameId = searchParams.get("game_id");
    const data = await getById(gameId);
    showDetail(data);
  }
}
