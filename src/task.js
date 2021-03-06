class Task {
  constructor(description, index, completed = false) {
    this.description = description;
    this.index = index;
    this.completed = completed;
  }

  static myTasks = [];
}

export function sortTasks(tArr, n) {
  let i;
  let key;
  let j;
  for (i = 1; i < n; i += 1) {
    key = tArr[i];
    j = i - 1;
    while (j >= 0 && tArr[j].index > key.index) {
      tArr[j + 1] = tArr[j];
      j -= 1;
    }
    tArr[j + 1] = key;
  }
  return tArr;
}

export { Task };
