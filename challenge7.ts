function getGiftsToRefill(a1: Array<String>, a2: Array<String>, a3: Array<String>) {
  const finalArray = [
    ...new Set(a1),
    ...new Set(a2),
    ...new Set(a3)
  ]

  let result = [...finalArray]

  finalArray.forEach((item, index) => {
    const tempArr = finalArray.slice(index + 1)
    if (tempArr.includes(item)) 
      result = result.filter((tempItem) => tempItem !== item)
  })

  return result
}
