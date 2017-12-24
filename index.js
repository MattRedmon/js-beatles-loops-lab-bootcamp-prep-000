function theBeatlesPlay(musicians, instrument) {
  arrayPlays = []
  for (let i = musicians.length; i > 0; i--) {
    arrayPlays.push(`${musicians.pop} plays ${instrument}`)
  }
  return arrayPlays
}
