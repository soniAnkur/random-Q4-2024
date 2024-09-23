// for priority Q just add the element at the specific position based on priority

class Queue {
    constructor() {
        this.__collection = [];
        this.size = 0;
    }

    // Queue is first in first out
    add(el) {
        this.__collection.push(el);
        this.size++;
    }
    get() {
        return this.__collection;
    }
    remove() {
        this.__collection.shift();
        this.size--;
    }
    front() {
        return this.__collection[0];
    }
}

let q = new Queue();
q.add(123);
q.add(234);
console.log(q, q.get(), q.size, q.front())

q.add(2345);
console.log(q, q.get(), q.size)

q.remove();
console.log(q, q.get(), q.size)
