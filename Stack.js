
// function push pop peek length/class Stacc

class Stack {
    constructor() {
        this.arr = [];
    }

    push(el) {
        return this.arr.push(el);
    }
    pop() {
        // return this.arr.splice(this.arr.length - 1, 1);
        return this.arr.pop();
    }
    peek() {
        return this.arr[length -1]
    }
}


let stack = new Stack();

stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);
console.log(stack);
console.log(stack.pop());