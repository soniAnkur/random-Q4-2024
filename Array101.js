// array splice with elemet/
let arr = [1,2,4,5,7,9]
console.log(arr);
arr.splice(2,0,3);
console.log(arr);
arr.splice(2,0,3);
console.log(arr);


// insert an element at kth position
function insertAtIndex(el, i) {
    const arr = [1,2,3,4];
    const curr = arr[i];

    arr.splice(i,0,el);
    console.log(arr);
}


insertAtIndex(0,3);

