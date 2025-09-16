let a = 67;
let b = 69;

function add(a, b) {
    return a + b;
}

function findMax(a, b) {
    if (a > b) {
        return "A > B";
    } else if (a < b) {
        return "B > A";
    } else {
        return "A = B";
    }
}

function countElements(list){
    let i = 0;
    console.log("Elementy listy: ");
    while (i < list.length){
        console.log(list[i]);
        i++;
    }
    return i;
}
const list = [2, 4, 6, 12, 3242]

console.log(add(a, b));
console.log(findMax(a, b));
console.log("Number of elements -> " + countElements(list));