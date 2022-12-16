interface Box { l: number, w: number, h: number }

function fitsInOneBox(boxes: Array<Box>) {
  const compareBoxes = (boxOne: Box, boxTwo: Box) =>
    (boxOne.h >= boxTwo.h || boxOne.l >= boxTwo.l || boxOne.w >= boxTwo.w)

  const sortBoxes = (boxOne: Box, boxTwo: Box) =>
    (boxOne.h + boxOne.l + boxOne.w) - (boxTwo.h + boxTwo.l + boxTwo.w)

  const sortedBoxes = boxes.sort(sortBoxes)

  for (let index = 0; index < sortedBoxes.length - 1; index++) {
    if (compareBoxes(sortedBoxes[index], sortedBoxes[index + 1]))
      return false
  }
  return true
}
