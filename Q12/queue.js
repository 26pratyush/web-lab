// queue.js
export class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(item) {
    this.items.push(item);
  }

  dequeue() {
    return this.items.shift(); //built in method
  }

  print() {
  document.getElementById("queueOutput").innerText += "Queue: " + this.items.join(", ") + "\n";
}

}
