
function theBeatlesPlay(musicians, instrument) {
  var arrayPlays = []
  for (let i = musicians.length; i > 0; i--) {
    arrayPlays.push(`${musicians.pop} plays ${instrument}`)
  }
  return arrayPlays
}
