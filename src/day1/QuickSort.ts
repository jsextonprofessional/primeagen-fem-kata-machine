const quickie = (array: number[], low: number, high: number): void => {
  if (low >= high) {
    return;
  }

  const pivotIndex = partition(array, low, high);

  quickie(array, low, pivotIndex - 1);
  quickie(array, pivotIndex + 1, high);
}

const partition = (array: number[], low: number, high: number): number => {
  const pivot = array[high];

  let index = low - 1;

  for (let i = low; i < high; ++i) {
    if (array[i] <= pivot) {
      index++;
      const temp = array[i];
      array[i] = array[index];
      array[index] = temp;
    }
  }

  index++;
  array[high] = array[index];
  array[index] = pivot;

  return index;
}

export default function quick_sort(arr: number[]): void {
  quickie(arr, 0, arr.length - 1)
}