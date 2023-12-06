// //console.log(5<6<7); // true as => true < 7 and true is 1 so 1 < 7
// //console.log(5>6>7); // false

// //let a = () => arguments;  //functions
// let arg = (...n) => { return n};  //["hi"]

// console.log(arg("hi"));
// ///////////////////////////////////////////////////////
// const dynamic = 'color';
// var item = {
//     brand: 'Ford',
//     [dynamic]: 'Blue'
// }
// console.log(item); // { brand: "Ford", color: "Blue" }
// ////////////////////////////////////////////////////////
// let a = 1, b = 2;
// [a, b] = [b, a]
// console.log(a, b) // -> 2 , 1


// //OR

// // b = [b, a];
// // a = b[0];
// // b = b[1];

// ///////////////////////////////////////////////////////
// let hungry = true;
// function goToFridge(){ return null}

// if (hungry) { 
//     goToFridge(); 
// }

// hungry && goToFridge()

// ///////////////////////////////////////
// console.log(Math.max());  // -Infinity
// console.log(Math.min());  // Infinity

// //////////////////////////////////////

let arr =  ["a", "b", "c"];

arr.forEach(myFun)

function myFun(agr1, agr2, agr3) {
    console.log(agr1, agr2, agr3[agr2]);
}
 
//take example for indexOf

//https://stackoverflow.com/questions/7837456/how-to-compare-arrays-in-javascript
//https://stackoverflow.com/questions/5491605/empty-arrays-seem-to-equal-true-and-false-at-the-same-time

//





