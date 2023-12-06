console.clear();
///////////////////////////////////////////Javascript arrays//////////////////////////////////////////
console.log("--------------------------------Javascript Numbers------------------------------------");
console.log("absolute value  Math.abs(7.25) or Math.abs(-7.25) => ", Math.abs(7.25)); //7.25
console.log("cube and square root Math.cbrt(15625) and Math.sqrt(15625); => ", Math.cbrt(15625) +" and "+ Math.sqrt(15625)); // 25 and 125
console.log("remove decimal points of 3.45 Math.trunc()=> ", Math.trunc(3.45)); //3
console.log("round to closest integer of 3.45 Math.round()=> ", Math.round(3.45)); //3
console.log("round to closest lower integer number of 3.45 Math.floor()=> ", Math.floor(3.45)); //3
console.log("round to closest higher integer numbe of 3.45 Math.ceil()=> ", Math.ceil(3.45)); //4
console.log("floating to number to 32 bit precision levels  Math.fround(2.60);=> ",   Math.fround(2.60)); //2.5999999046325684
console.log("max number from given numbers Math.max(5, 10); => ", Math.max(5, 10)); //10
console.log("max number from given numbers Math.max(); => ", Math.max()); // -Infinity
console.log("checking sign of numerbs -100, 100 and 0 using Math.sign => ", Math.sign(-100) ,Math.sign(100) ,Math.sign(0) ); //-1 1 0

console.log("\n--------------------------------complex Numbers------------------------------------");
console.log("finding max value of array using max => ", Math.max.apply(null, [3,4])); // 4
console.log("finding max value of array using max => ", Math.max(...[3,4])); // 4 //this is the fastest way to find value in array
console.log("adding floar numbers 0.1 + 0.2 => ", 0.1 + 0.2); //  0.30000000000000004

console.log(this);





