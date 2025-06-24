// main.js
import { Stack } from './stack.js';   // imports the Stack class from stack.js file
import { Queue } from './queue.js';   // imports the Queue class from stack.js file

window.onload = () => {
// Stack operations
const s = new Stack();   //Creating Object s of Stack() class
s.push(11);
s.push(22);
s.push(33);
s.print();
s.pop();
s.print();

// Queue operations
const q = new Queue();   //Creating Object q of Queue() class
q.enqueue("Aa");
q.enqueue("Bb");
q.enqueue("Cc");
q.print();
q.dequeue();
q.print();
};