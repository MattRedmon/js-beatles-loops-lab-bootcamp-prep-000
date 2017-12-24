
function theBeatlesPlay(musicians, instrument) {
  var arrayPlays = []
  for (let i = musicians.length; i > 0; i--) {
    arrayPlays.unshift(`${musicians.pop()} plays ${instrument.pop()}`)
  }
  return arrayPlays
}

