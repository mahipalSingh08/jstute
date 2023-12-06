///////////////////////////////////////////Javascript arrays//////////////////////////////////////////
console.clear();
console.log("--------------------------------Javascript arrays------------------------------------");
var fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log('our array is fruits = ', fruits);
console.log("typeof fruits", typeof fruits);;    //object 
console.log("Array.isArray(fruits)", Array.isArray(fruits));   //true 

function isArray(myArray) {
    return myArray.constructor.toString().indexOf("Array") > -1;
  }
console.log("function isArray(myArray)", isArray(fruits)); //true   
console.log("fruits instanceof Array", fruits instanceof Array); // returns true 

console.log("fruits.toString()", fruits.toString()); //Banana,Orange,Apple,Mango
console.log("fruits.join(' <A> ')", fruits.join(" <A> ")); //Banana <A> Orange <A> Apple <A> Mango
delete fruits[0];
console.log("delete fruits[0]", fruits[0]); // undefined
delete fruits[1];
console.log("delete fruits[0], delete fruits[1]", fruits); // [ <2 empty items>, 'Apple', 'Mango' ]
fruits[0] = "Banana";
fruits[1] = "Orange";
fruits[6] = "Orange";
console.log("fruits[6] = 'Orange';", fruits); // [ 'Banana', 'Orange', 'Apple', 'Mango', <2 empty items>, 'Orange' ]
//shift vs pop vs delete => shift remove first element and pop removes last
//unshift vs push => adds element at index 0 and last

//////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////Add and subtract arrays//////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////
console.log("/////////////////////////////////////////////////////////////////////////////////////");
console.log("--------------------------Add and subtract arrays------------------------------------");
console.log("/////////////////////////////////////////////////////////////////////////////////////");
var A = ["A", "A"];
var B = ["B", "B", "B"];
var D = ["D", "D", "D", "D"];
var C = A.concat(B);
console.log("A.concat(B)", C); //[ 'A', 'A', 'B', 'B', 'B' ]
console.log("A.concat(B, D)", A.concat(B, D)); // ['A', 'A', 'B','B', 'B', 'D','D', 'D', 'D']

var a1 = ['a', 'b', 'e', 'f'];
var a2 = ['a', 'b', 'c', 'd'];

console.log("------------subtract-------------");
console.log(a1);
console.log(a2);
console.log("a1 intersection/common a2 =>", a1.filter(x=> a2.includes(x)));
console.log("a1 minus a2 =>", a1.filter(x => !a2.includes(x)));
console.log("a2 minus a1 =>", a2.filter(x => !a1.includes(x)));
console.log("a2 union of unCommon a1 =>", a1.filter(x => !a2.includes(x)).concat(a2.filter(x => !a1.includes(x))));

//////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////Imp Methods///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////
console.log("/////////////////////////////////////////////////////////////////////////////////////");
console.log("----------------------------------Imp Methods-----------------------------------------");
console.log("/////////////////////////////////////////////////////////////////////////////////////");

var ages = [10, 60, 90, 90, 110];
console.log("ages = ", ages);
console.log("\n1. Return boolen-----------------------------------------");
console.log("checks every elements with codn <50=> .every => ", ages.every(x=> x<50)); // false //every(elm, index, arr)
console.log("checks anyone of elements with codn <50 => .some => ", ages.some(x=> x<50)); // true //some(elm, index, arr)
console.log("check if element 90 is present in array after some index => ", ages.includes(90, 0)) //true //.includes(element, index)


console.log("\n2. Return Array-----------------------------------------");
console.log("filter element with cond <100 => ", ages.filter(x=> x < 100)); //return array  [ 10, 60, 90, 90 ]  //.filter(callback(element, index, arr), thisValue)
console.log("does operation of add 10, in each elem with map => ", ages.map(x => x+10));// [ 20, 70, 100, 100, 120 ] //.map(function(currentValue, index, arr), thisValue)
console.log("reverse order of parent araay => ", ages.reverse()); //[ 110, 90, 90, 60, 10 ]
console.log("sorting of parent araay => ", ages.sort(function(a, b){return a-b})); //[10, 60, 90, 90, 110]
console.log("shuffle Array => ", ages.sort(()=>{ return Math.random() - 0.5}));

console.log("\n3. Return Element-----------------------------------------");
console.log("return first element with matching condition <100 => ", ages.find(x=> x < 100)); //10 //.find(callback(element, index, arr), thisValue)



console.log("\n4. Return Index-----------------------------------------");
console.log("return index of element with matching condition <100 => ", ages.findIndex(x=> x < 100)); //0 //.findIndex(callback(element, index, arr), thisValue)
console.log("return index of element 90 => ", ages.indexOf(90)); //2 //.indexOf(elem, 4);
console.log("return last index of element 90 => ", ages.lastIndexOf(90)); //3 //.lastIndexOf(elem, 4);


console.log("\n5. Return Value-----------------------------------------");

console.log("does operation of add each elem, with reduce => ", ages.reduce((total, num) => total + num)); //.reduce(function(total, currentValue, currentIndex, arr), initialValue)
console.log("does operation of add each elem, with reduceRight => ", ages.reduceRight((total, num) => total + num)); //.reduceRight(function(total, currentValue, currentIndex, arr), initialValue)

//special case: try with [10, 60, 90, 90, 110, "a"];
//////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////Splice vs Slice///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////
console.log("\n/////////////////////////////////////////////////////////////////////////////////////");
console.log("----------------------------------Splice vs Slice------------------------------------");
console.log("/////////////////////////////////////////////////////////////////////////////////////");

var numbers=[1,2,3,4,5];
console.log("\n----------------------------------Slice------------------------------------");
console.log(".slice(2) => ", numbers.slice(2)); // [3, 4, 5], returned selected items and DOES NOT modify org array
// .slice(startIndex, MaxLengthToBeRead)
numbers=[1,2,3,4,5];
console.log(numbers);
var newNumbers = numbers.slice(2, 1)
console.log(".slice(2, 1) new arrys is => ", newNumbers);

numbers=[1,2,3,4,5];
console.log("\n----------------------------------Splice------------------------------------");

console.log(".splice(2) => ", numbers.splice(2)); // [3, 4, 5], returned removed items and modifies org array
console.log("now array is => ", numbers); // .splice(startIndex, lengthToBeRemoved, add items)
numbers=[1,2,3,4,5];
console.log(numbers);
var newNumbers = numbers.splice(2, 1, 'new1', 'new2')
console.log(".splice(2, 1, 'new1', 'new2') original arrys is => ", numbers);

console.log("\n----------------------------------Array copy------------------------------------");
const sheeps = [1,2,3,4];

// Old way
const cloneSheeps = sheeps.slice();

// ES6 way
const cloneSheepsES6 = [...sheeps];
//but these will not work with nested or multi-dimensional array
const orgNums = [[1, 2], [10]];

const cloneNums = [...orgNums];

//best way
const anotherCloneNums = Array.from(orgNums);


