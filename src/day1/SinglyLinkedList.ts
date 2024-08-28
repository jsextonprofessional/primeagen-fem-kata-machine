type Node<T> = {
  value: T,
  next?: Node<T>
}

export default class SinglyLinkedList<T> {
  public length: number;
  private head?: Node<T>;
  private tail?: Node<T>;

  constructor() {
    this.head = this.tail = undefined;
    this.length = 0;
  }

  prepend(item: T): void {

  }
  insertAt(item: T, idx: number): void {

  }
  append(item: T): void {

  }
  remove(item: T): T | undefined {

  }
  get(idx: number): T | undefined {

  }
  removeAt(idx: number): T | undefined {

  }
}