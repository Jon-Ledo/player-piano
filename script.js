const pianoKeys = document.querySelectorAll('.key')

pianoKeys.forEach((pianoKey, index) => {
  const number = index < 9 ? '0' + (index + 1) : index + 1
  const newUrl = 'Assets/key' + number + '.mp3'
  pianoKey.addEventListener('click', () => {
    playSound(newUrl)
  })
})

function playSound(url) {
  new Audio(url).play()
}
