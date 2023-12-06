/*
 ____        _          ____  _                   _                       
|  _ \  __ _| |_ __ _  / ___|| |_ _ __ _   _  ___| |_ _   _ _ __ ___  ___ 
| | | |/ _` | __/ _` | \___ \| __| '__| | | |/ __| __| | | | '__/ _ \/ __|
| |_| | (_| | || (_| |  ___) | |_| |  | |_| | (__| |_| |_| | | |  __/\__ \
|____/ \__,_|\__\__,_| |____/ \__|_|   \__,_|\___|\__|\__,_|_|  \___||___/

*/
console.clear();
console.log("------------------------Data Structures------------------------------------");
console.log("-------------------------------primary------------------------------------");
console.log("--Array, sets, Objects, Map---");
console.log("-------------------------------Set------------------------------------");

//set is array with no duplicates
var numberArr = [1,2,3,4,5,4,3,2,1]; //1. array 
var numberObj = { a: 1, b: 2 }; //2. Object

var numberSet = new Set();
numberSet.add(1);
numberSet.add(2);
numberSet.add(2);
console.log("set => " , numberSet);  // Set(2) { 1, 2 }
numberSet.add('some text');
console.log("set => " , numberSet);  // Set(3)  { 1, 2, 'some text' }
numberSet.add({a: 1, b: 2}) 
const obj = {a: 1, b: 2}
numberSet.add(obj)
console.log("set => " , numberSet);  //  Set(5) { 1, 2, 'some text', { a: 1, b: 2 }, { a: 1, b: 2 } }
// logs Set(4) [ 1, "some text", {…}, {…} ] in Firefox
// logs Set(4) { 1, "some text", {…}, {…} } in Chrome
console.log("console.log(set) => [.....] in firefox but {.....} in chrome");

console.log("\n-------------------------------Set methods------------------------------------");
console.log("numberSet.has(1) => ", numberSet.has(1)); // true
console.log("numberSet.has(Math.sqrt(4)) => ", numberSet.has(Math.sqrt(4))); // true
console.log("numberSet.has(obj) => ", numberSet.has(obj)); // true
console.log("numberSet.has('Some Text'.toLowerCase()) => ", numberSet.has('Some Text'.toLowerCase())); // true

console.log("numberSet.size => ", numberSet.size); // 5
console.log("numberSet.delete(1) => ", numberSet.delete(1)); // true
console.log("numberSet.delete(1) => ", numberSet.delete(0)); // false
console.log("now size is numberSet.size => ", numberSet.size); // 5


console.log("\n-------------------------------Iterating Sets------------------------------------");
for (let item of numberSet) console.log(item)
const myArr = Array.from(numberSet);
console.log("array from set => ", myArr); //[ 2, 'some text', { a: 1, b: 2 }, { a: 1, b: 2 } ]
// converting between Set from Array
myArr.push(2); // [ 2, 'some text', { a: 1, b: 2 }, { a: 1, b: 2 }, 2 ]
const mySet2 = new Set(myArr)
console.log("New set from array => ", mySet2);
console.log("  ");
var chars = ['A', 'B', 'A', 'C', 'B'];
var uniqueChars = [...new Set(chars)];
console.log("removed duplicates from array =>", uniqueChars);
//for looping
// mySet2.forEach(function(value) {
//     console.log(value)
//   })

console.log("\n-------------------------------Sets String operations------------------------------------");
let text1 = 'Firefox';
let text2 = 'firefox';

const text1set = new Set(text1)  
const text2set = new Set(text2)  

console.log("text1set => ", text1set); // Set(7) { "F", "i", "r", "e", "f", "o", "x" }
console.log("text2set => ", text2set); // Set(6) { "f", "i", "r", "e", "o", "x" }
console.log("\n-----------------Implementing basic set operations-------------------------");
const setA = new Set([1, 2, 3, 4]);
const setB = new Set([2, 3]);
const setC = new Set([3, 4, 5, 6]);
console.log("\n-----------------1. intersection of set-------------------------");
function intersection(setA, setB) {
    let _intersection = new Set()
    for (let elem of setB) {
        if (setA.has(elem)) {
            _intersection.add(elem)
        }
    }
    return _intersection
}
console.log("intersection(setA, setC) => ", intersection(setA, setC));
console.log("\n-----------------2. union of set-------------------------");
function union(setA, setB) {
    let _union = new Set(setA)
    for (let elem of setB) {
        _union.add(elem)
    }
    return _union
}
console.log("union(setA, setC) => ", union(setA, setC));

console.log("\n-----------------3. difference of set-------------------------");
function difference(setA, setB) {
    let _difference = new Set(setA)
    for (let elem of setB) {
        _difference.delete(elem)
    }
    return _difference
}
console.log("difference(setA, setC) => ", difference(setA, setC));

console.log("\n-----------------4. symmetricDifference of set-------------------------");
function symmetricDifference(setA, setB) {
    let _difference = new Set(setA)
    for (let elem of setB) {
        if (_difference.has(elem)) {
            _difference.delete(elem)
        } else {
            _difference.add(elem)
        }
    }
    return _difference
}
console.log("symmetricDifference(setA, setC) => ", symmetricDifference(setA, setC));

console.log("\n-----------------5. Superset of set-------------------------");
function isSuperset(set, subset) {
    for (let elem of subset) {
        if (!set.has(elem)) {
            return false
        }
    }
    return true
}
console.log("Superset(setA, setB) => ", isSuperset(setA, setB));





