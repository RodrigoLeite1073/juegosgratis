import "./styles/card-container.css";
import { card } from "./short-description-card";

export function shortDescriptionList(list) {
  let template = "";
  if (list.length > 0) {
    list.forEach(el => {
      template += card(el);
    });
  } else {
    template = "<h2>Ocurrió un error, intentalo mas tarde</h2>";
  }
  return template;
}
