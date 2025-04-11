export function getDistinctByKey<T>(arr: T[] | undefined, key: keyof T): T[] {
  const seen = new Set()
  if (!arr) return []
  return arr.filter((item) => {
    const val = item[key]
    if (seen.has(val)) return false
    seen.add(val)
    return true
  })
}
