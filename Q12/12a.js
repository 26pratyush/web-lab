//Write a java script program to implement Stack and Queue using modules.

// 1st Option: npm init -y and in package.json add "type":"module"
//2nd Option: rename all files to .mjs including the imports in main.mjs

1. main.js
import {Stack} from './stack1.js';
import { Queue } from './queue1.js';

const s=new Stack();
s.push(1);
s.push(2);
s.push(3);
console.log("Stack Contents: "+s.print());
console.log("Popped: "+s.pop());
console.log("Stack Contents: "+s.print());

const q=new Queue();
q.enqueue("A");
q.enqueue("B");
q.enqueue("C");
console.log("Queue Contents: "+q.print());
console.log("Dequeued: "+q.dequeue());
console.log("Queue Contents: "+q.print());

============================================================

2.stack.js
export class Stack{
    constructor(){
        this.items=[];
    }

    push(item){
        this.items.push(item);
    }

    pop(){
        return this.items.pop();
    }

    print(){
        return this.items.join();
    }
}

============================================================

3.queue.js
export class Queue{
    constructor(){
        this.items=[];
    }

    enqueue(item){
        this.items.push(item);
    }

    dequeue(item){
        return this.items.shift();
    }

    print(){
        return this.items.join();
    }
}


