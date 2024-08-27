export default function bs_list(haystack: number[], needle: number): boolean {

  let low = 0;
  let high = haystack.length;

  do {
    const midpoint = Math.floor(low + (high - low) / 2);
    const value = haystack[midpoint]

    if (value === needle) {
      return true;
    } else if (value > needle) {
      low = midpoint + 1
    } else high = midpoint
  } while (low < high)

  return false;
  // or -1
}