
function theBeatlesPlay(musicians, instrument) {
  var arrayPlays = []
  for (let i = musicians.length; i > 0; i--) {
    arrayPlays.unshift(`${musicians.pop()} plays ${instrument.pop()}`)
  }
  return arrayPlays
}

function johnLennonFacts(array) {
  var arrayExclamation = []
  var arrLength = array.length
  while (arrLength > 0) {
    arrayExclamation.push(array[arrLength])
    arrLength--
  }
  return arrayExclamation
}
