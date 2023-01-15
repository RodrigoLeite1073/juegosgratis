import index from "..";
import { showDetail } from "../components/game-detail";

export default function router() {
  const loc = document.location;
  const href = loc.href;
  const hash = loc.hash;
  const regex = /\?.*/;
  if (!hash || hash === "#/") {
    index();
  } else if (hash.includes("?")) {
    const searchParams = new URLSearchParams(href.match(regex)[0]);
    const gameId = searchParams.get("game_id");
    showDetail(gameId);
  }
}
