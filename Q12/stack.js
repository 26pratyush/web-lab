// stack.js
export class Stack {
  constructor() {
    this.items = []; // this.items attaches the items array to the object created by this class
  }

  push(item) {
    this.items.push(item);  //.push() is inbuilt.
  }

  pop() {
    return this.items.pop();  //.pop() is also inbuilt
  }

  print() {
   //document.getElementById("stackOutput").innerHTML += "Stack: " + this.items.join(", ") + "<br>";
   document.getElementById("stackOutput").innerText += "Stack: " + this.items.join(", ") + "\n";
}

}
