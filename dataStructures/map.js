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
console.log("-------------------------------Map------------------------------------");
//map is similer to object with key value pair

let contacts = new Map()
contacts.set('Jessie', {phone: "213-555-1234", address: "123 N 1st Ave"});
console.log("new map =>", contacts);

console.log("\n--------------------Baisc Map Methods------------------------------------");

console.log("contacts.has('Jessie') => ", contacts.has('Jessie')); // true
console.log("contacts.get('Hilary') => ", contacts.get('Hilary')); // undefined
contacts.set('Hilary', {phone: "617-555-4321", address: "321 S 2nd St"})
console.log("getting data of Jessie with .get method=> ", contacts.get('Jessie')); // {phone: "213-555-1234", address: "123 N 1st Ave"}

//contacts.delete('mahipal') // false
//contacts.delete('Jessie') // true
console.log("contacts.size => ", contacts.size) // 1

console.log("clear all keys in map => ", contacts.clear()); // undef  and now map is empty as {}
console.log("\n--------------------Map setting keys as ANY------------------------------------");

let myMap = new Map()

let keyString = 'a string'
let keyObj    = {}
let keyFunc   = function() {}

// setting the values
myMap.set(keyString, "value associated with 'a string'")
myMap.set(keyObj, 'value associated with keyObj')
myMap.set(keyFunc, 'value associated with keyFunc')
myMap.set(NaN, 'not a number')

myMap.size              // 4

// getting the values
myMap.get(keyString)    // "value associated with 'a string'"
myMap.get(keyObj)       // "value associated with keyObj"
myMap.get(keyFunc)      // "value associated with keyFunc"
myMap.get(NaN)      // not a number
myMap.get(Math.sqrt('sdsds'))   // not a number

myMap.get('a string')    // "value associated with 'a string'"
                         // because keyString === 'a string'
myMap.get({})            // undefined, because keyObj !== {}
myMap.get(function() {}) // undefined, because keyFunc !== function () {}

console.log("\n--------------------Iterating Map with for..of------------------------------------");

let myMap2 = new Map()
myMap2.set(0, 'zero')
myMap2.set(1, 'one')

for (let [key, value] of myMap2) {
  console.log(key + ' = ' + value)
}
// 0 = zero
// 1 = one
///////or you can do 

// for (let [key, value] of myMap2.entries()) {
//   console.log(key + ' = ' + value)
// }

///////or you can do 
// myMap.forEach(function(value, key) {
//     console.log(key + ' = ' + value)
//   })

console.log("\n--------------------Map Relation with Array------------------------------------");
let kvArray = [['key1', 'value1'], ['key2', 'value2']]
let arrayMap = new Map(kvArray);
console.log("map from array => ", arrayMap);
console.log("array from map => ", Array.from(arrayMap));
console.log("array from map => ", [...arrayMap]);

console.log("console.log(Array.from(arrayMap.keys()))", Array.from(arrayMap.keys()));

console.log("\n--------------------Merging Map------------------------------------");
let first = new Map([
    [1, 'one'],
    [2, 'two'],
    [3, 'three'],
  ])
  
  let second = new Map([
    [1, 'uno'],
    [2, 'dos']
  ])

  let merged = new Map([...first, ...second]);
  console.log("Merged Map => ", merged);
  console.log("new merged => ", new Map([...first, ...second, [1, 'eins'], [4, 'fours']]));