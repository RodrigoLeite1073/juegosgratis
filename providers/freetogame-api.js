export async function getAll() {
  const options = {
    headers: {
      'X-RapidAPI-Key': '15cbb2ed7amsh8dd5fda7e2688fap122f1djsn4a6ac2c2c23f',
      'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com',
    },
  }
  console.log('fetch')
  let games
  await fetch(
    'https://free-to-play-games-database.p.rapidapi.com/api/games',
    options
  )
    .then(res => res.json())
    .then(data => {
      console.log('data', data)
      games = data
    })
    .catch(err => console.log('error', err))

  return games
}
