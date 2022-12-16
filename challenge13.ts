function getFilesToBackup(lastBackup: number, changes: Array<Array<number>>) {
  const res = changes.filter((change) => change[1] > lastBackup).map((change) => change[0]).sort((a, b) => a - b)
  return [...new Set(res)]
}
