class PriorityQueue {
  constructor(){
    this.values = [];
  }
  enqueue(val, priority) {
    this.values.push({val, priority});
    this.sort();
  };
  dequeue() {
    return this.values.shift();
  };
  sort() {
    this.values.sort((a, b) => a.priority - b.priority);
  };
}

var q= new PriorityQueue();
q.enqueue("a", 5);
q.enqueue("b", 3);
q.enqueue("c", 7);
q.enqueue("d", 4);
q.enqueue("e", 6);

