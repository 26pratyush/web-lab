//Write a java script program to implement Stack and Queue using modules.

1. stacks.js:
// Stack implementation using an object
let stack = {
  items: [],

  push: function(element) {
    this.items.push(element);
  },

  pop: function() {
    if (this.isEmpty()) {
      return "Stack is empty";
    }
    return this.items.pop();
  },

  peek: function() {
    if (this.isEmpty()) {
      return "Stack is empty";
    }
    return this.items[this.items.length - 1];
  },

  isEmpty: function() {
    return this.items.length === 0;
  },

  size: function() {
    return this.items.length;
  },

  clear: function() {
    this.items = [];
  }
};

module.exports = stack;
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

2. queue.js:
// Queue implementation using an object
let queue = {
  items: [],

  enqueue: function(element) {
    this.items.push(element);
  },

  dequeue: function() {
    if (this.isEmpty()) {
      return "Queue is empty";
    }
    return this.items.shift();
  },

  front: function() {
    if (this.isEmpty()) {
      return "Queue is empty";
    }
    return this.items[0];
  },

  isEmpty: function() {
    return this.items.length === 0;
  },

  size: function() {
    return this.items.length;
  },

  clear: function() {
    this.items = [];
  }
};

module.exports = queue;
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

3. main.js:
// Import the Stack and Queue modules
const stack = require('./stack');
const queue = require('./queue');

// Stack operations
stack.push(10);
stack.push(20);
stack.push(30);
console.log("Stack after pushing 10, 20, 30:");
console.log(stack.peek()); // 30
console.log("Pop from stack: ", stack.pop()); // 30
console.log("Stack after pop:");
console.log(stack.peek()); // 20

// Queue operations
queue.enqueue(100);
queue.enqueue(200);
queue.enqueue(300);
console.log("\nQueue after enqueueing 100, 200, 300:");
console.log(queue.front()); // 100
console.log("Dequeue from queue: ", queue.dequeue()); // 100
console.log("Queue after dequeue:");
console.log(queue.front()); // 200
