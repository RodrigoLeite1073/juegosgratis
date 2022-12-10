export function card(obj) {
  const { id, title, thumbnail, short_description } = obj

  return `
  <article>
      <img
        src="${thumbnail}"
        alt="thumbnail"
      />
    <h3>${title}</h3>
      <p>${short_description}</p>
  </article>
  `
}
