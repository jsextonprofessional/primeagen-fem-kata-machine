const hasUnvisited = (seen: boolean[], dists: number[]): boolean => {
  return seen.some((s, i) => !s && dists[i] < Infinity)
}

const getLowestUnvisited = (seen: boolean[], dists: number[]): number => {
  let index = -1;
  let lowestDistance = Infinity;

  for (let i = 0; i < seen.length; ++i) {
    if (seen[i]) {
      continue;
    }
    if (lowestDistance > dists[i]) {
      lowestDistance = dists[i];
      index = i;
    }
  }
  return index;
}

export default function dijkstra_list(
  source: number,
  sink: number,
  arr: WeightedAdjacencyList
): number[] {

  const seen = new Array(arr.length).fill(false);
  const prev = new Array(arr.length).fill(-1);
  const dists = new Array(arr.length).fill(Infinity);

  dists[source] = 0;

  while (hasUnvisited(seen, dists)) {
    const current = getLowestUnvisited(seen, dists);
    seen[current] = true;

    const adjacencies = arr[current];
    for (let i = 0; i < adjacencies.length; ++i) {
      const edge = adjacencies[i];
      if (seen[edge.to]) {
        continue;
      }

      const dist = dists[current] + edge.weight;
      if (dist < dists[edge.to]) {
        dists[edge.to] = dist;
        prev[edge.to] = current;
      }
    }
  }

  const out: number[] = [];
  let current = sink;

  while (prev[current] !== -1) {
    out.push(current);
    current = prev[current]
  }

  out.push(source);
  return out.reverse();
}