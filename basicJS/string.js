console.clear();
///////////////////////////////////////////Javascript string//////////////////////////////////////////
console.log("--------------------------------Javascript string------------------------------------");

var str1 = "this is a new string";
var str = "this is a new string";
var str2 = "2nd string";
var strObj = new String("this is a String as a object");

console.log(str1);
//console.log(typeof str); //string
console.log(strObj);
//console.log(typeof string4); //object

/////////////////////////////////////////////////////////////////////////////////////
console.log("\n--------------------------------string mthods------------------------------------");
console.log("--------------------------------Return Char------------------------------------");
///////////////////////////////////Return Char//////////////////////////////////////////////////

console.log("str.charAt => ", str1.charAt("sadfasfasdfsa")); //t //NaN = 0, -1 & greater length return nothing
console.log("str.charCodeAt => ", str1.charCodeAt(0)); //116 //return charCode
//lastChar = str.slice(-1) or str1.charAt(str.length -1 );

console.log("\n--------------------------------Return String------------------------------------");

//str1.concat(str2, str3, str4, .......)
var str = "The rain in SPAIN stays mainly in the plain"; 
console.log("str.match(/ain/g) => ", str.match(/ain/g));
//str.match(/ain/gi) // ain,AIN,ain,ain
//string.slice(start, end)

console.log("\n--------------------------------Return Boolean------------------------------------");
console.log("string endsWith => ", str.endsWith("ing")); //string.endsWith(searchvalue, length)
console.log("string includes => ", str.includes("hi"));  //string.includes(searchvalue, start)

console.log("\n--------------------------------Return index------------------------------------");
//string.indexOf(searchvalue, start)
//str.lastIndexOf(searchvalue, start)



console.log("\n--------------------------------Complex operations---------------------------------");
 //replacing some chars
var name1 = 'SunnyCloudy';
var name2 = name1.replace(/[A-Z][a-z]*/g, str => '-' + str.toLowerCase());
console.log("SunnyCloudy => ", name2.substring(1)); //SunnyCloudy => sunny-cloudy

//shuffle chars
var shuffled = "mahipal singh".split('').sort(function(){return 0.5-Math.random()}).join('');
console.log("shuffled of 'mahipal singh' => ", shuffled);

//shuffle word only with keeping space and chars
var shuffled = "mahipal singh is the auther of this file".split(' ').sort(function(){return 0.5-Math.random()}).join(' ');
console.log("shuffled of 'mahipal singh is the auther of this file' => ", shuffled);

//shuffle with KEEPING SPACE but not chars
var arr = "mahipal singh is the auther of this file".split(' ');
shuffledArr = [];
arr.forEach((elem) => {
    shuffledArr.push(elem.split('').sort(function(){return 0.5-Math.random()}).join(''));
})

console.log("shuffled of 'mahipal singh is the auther of this file' => ", shuffledArr.join(' '));









