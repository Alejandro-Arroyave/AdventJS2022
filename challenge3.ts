function distributeGifts(packOfGifts: Array<String>, reindeers: Array<String>) {
  const giftsWeight = packOfGifts.reduce<number>((accumulator, gift) => accumulator + gift.length, 0)
  const reindeersLimit = reindeers.reduce<number>((accumulator, reindeer) => accumulator + (reindeer.length * 2), 0)

  return Math.floor(reindeersLimit / giftsWeight)
}
