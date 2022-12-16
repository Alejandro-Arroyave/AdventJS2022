function wrapping(gifts: Array<String>) {
  const wrap = "*"
  const wrappedGifts = []
  for (const gift of gifts) {
    const topAndBottomWrap = wrap.repeat(gift.length + 2)
    wrappedGifts.push(`${topAndBottomWrap}\n*${gift}*\n${topAndBottomWrap}`)
  }
  return wrappedGifts
}
