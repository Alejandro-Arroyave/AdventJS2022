function countHours(year: number, holidays: Array<String>) {
  let extraHours = 0
  holidays.forEach((holiday) => {
    const dayOfWeek = new Date(`${holiday}/${year}`).getDay()
    if (dayOfWeek >= 1 && dayOfWeek <= 5)
      extraHours += 2
  })
  return extraHours
}
