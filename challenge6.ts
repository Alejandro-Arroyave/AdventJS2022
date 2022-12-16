function createCube(size: number) {
  if (size === 0) return ''

  let cubeFront = ''
  let cubeBack = ''

  for (let i = 1; i <= size; i++) {
    const spaces = " ".repeat(size - i)

    cubeFront += spaces
      + "/\\".repeat(i)
      + "_\\".repeat(size) + `\n`

    cubeBack = spaces
      + "\\/".repeat(i)
      + "_/".repeat(size) + `\n`
      + cubeBack
  }

  return (cubeFront + cubeBack).slice(0, -1)
}
