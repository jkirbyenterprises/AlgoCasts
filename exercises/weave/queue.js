// --- Directions
// Implement a 'peek' method in this Queue class.
// Peek should return the last element (the next
// one to be returned) from the queue *without*
// removing it.

class Queue {
  constructor() {
    this.data = [];
  }

  add(record) {
    this.data.unshift(record);
  }

  remove() {
    return this.data.pop();
  }

  peek() {
    const index = this.data.length-1;
    if(this.data.length == 0 || index < 0 || index > this.data.length) {
      return null;
    }
    return this.data[index];
  }
}

module.exports = Queue;
