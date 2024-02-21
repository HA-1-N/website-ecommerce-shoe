export function removeDuplicates(array: any) {
  const seen = new Set();
  return array.filter((item: any) => {
    const key = `${item.id}_${item.name}`;
    return !seen.has(key) && seen.add(key);
  });
}
