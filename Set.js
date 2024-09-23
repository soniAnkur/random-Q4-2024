// TODO 
// 1. curry set
// 2. improve union and intersection
// 3. Every


class Set {
    size = 0
    constructor() {
        this.__collection = [];
    }

    add(el) {
        if(!this.has(el)) {
            this.__collection.push(el);
        }
    }

    remove(el) {
        if(this.has(el)) {
            this.__collection.splice(this.__collection.indexOf(el), 1);
            this.size --;
        }
    }

    size() {
        return this.size;
    }

    has(el) {
        return (this.__collection.indexOf(el) !== -1) 
    }

    
    intesection() {
    }

    values() {
        return this.__collection;
    }

}

const union = (a,b) => {
    const resp = new Set();
    const push = function(set) {
        for(let value of set.values()) {
            resp.add(value);
        }
    }
    push(a);
    push(b);
    return resp;
}



let set = new Set();
set.add(1)
set.add(22)
set.add(3)
set.add(56)

console.log(set.values());
set.remove(56);
console.log(set.values(), set.has(56));


// console.log(set1.values());




let set1 = new Set();
set1.add(1)
set1.add(22)
set1.add(3)
set1.add(56);


let set2 = new Set();
set2.add(1)
set2.add(212)
set2.add(3)
set2.add(516);

console.log(union(set1, set2).values());






