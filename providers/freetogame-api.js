export async function getAll() {
  const options = {
    headers: {
      'X-RapidAPI-Key': '15cbb2ed7amsh8dd5fda7e2688fap122f1djsn4a6ac2c2c23f',
      'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com',
    },
  }
  let games = await fetch(
    'https://free-to-play-games-database.p.rapidapi.com/api/games',
    options
  )
    .then(res => res.json())
    .then(data => data)
    .catch(err => console.log('error', err))

  return games
}

export async function getById(id = 0) {
  const options = {
    headers: {
      'X-RapidAPI-Key': '15cbb2ed7amsh8dd5fda7e2688fap122f1djsn4a6ac2c2c23f',
      'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com',
    },
  }
  let detail = await fetch(
    `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`,
    options
  )
    .then(res => res.json())
    .then(data => data)
    .catch(err => console.log('error', err))

  return detail
}
