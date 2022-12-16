function checkPart(part: String) {
  const checkPalidrome = (word: String) => word === word.split('').reverse().join('')
  if (checkPalidrome(part)) return true

  for (let i = 0; i < part.length; i++) {
    const slicedPart = part.slice(0, i) + part.slice(i + 1, part.length)
    if (checkPalidrome(slicedPart)) return true
  }

  return false
}
