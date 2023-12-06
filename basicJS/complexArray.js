//////////////////////////Complex Javascript arrays opearations//////////////////////////////////////
console.clear();
console.log(" /```  /``/  |``/| |__) |    |__  /_/                 | /__` ");
console.log("/__,  /__/   |   | |    |___ |___ / /               __/ .__/ ");
console.log("       __   __                                    __   __   __   ");
console.log("|``|  |__) |__)  |``|  |__/  /__`                /  / |__) /__`  ");
console.log("|``|  |  ? |  ?  |``|    /  .__/                /__/  |    .__/  ");
console.log("    ");

console.log("----------------------Convert array to Obejct------------------------");
//Array.reduce(function(accumulator, item, index, array) { your operation and return  }, {}) and passing {} at the end as accumulator
var numbers = [1, 2, 3, 4, 5];
console.log("numbers", numbers);
var numberObj;
numberObj = numbers.reduce((accumulator , elem) => {
    accumulator [`keyOf_` + elem] = elem;
    return accumulator;
}, {});
console.log("numberObj", numberObj);

console.log("------------------Convert array to Obejct1 using forEach---------------");
var numberObj1 = {};
numbers.forEach((elem, index) => {
    numberObj1[numbers.length-index] = elem;
});
console.log("numberObj1", numberObj1);

console.log("----------------------Convert array to Obejct2------------------------");

var numberObj2;
numberObj2 = numbers.reduce((accumulator , elem) => {
    let newPasser = {};
    newPasser[`keyOf_` + elem] = elem;
    accumulator .push(newPasser);
    return accumulator ;
}, []);
console.log("numberObj2", numberObj2);
console.log("----------------------Convert array to Obejct3------------------------");
var numberObj3 ={};
numberObj3 = Object.assign({}, numbers);
console.log("Object.assign({}, numbers)", numberObj3);
console.log("{...numbers}", {...numbers}); //ES8
console.log("----------------------Convert array to Obejct4------------------------");
var numbers2 = [{ a: 1},{ b: 2},{ c: 3}];
console.log("second array with object", numbers2);
var numberObj4 = {};
numberObj4 = numbers2.reduce((accumulator, elem) => {
   // console.log(elem);
    let key = Object.keys(elem)[0];   //Object.keys return array of passing object
   // console.log(key);
    accumulator[key] = elem[key];
    return accumulator ;
}, {});
console.log(numberObj4);
console.log("----------------------Convert array to Obejct5------------------------");
console.log("same as above but key as value and value as key");
var numberObj5 = {};
numberObj5 = numbers2.reduce((accumulator, elem) => {
   // console.log(elem);
    let key = Object.keys(elem)[0];   //Object.keys return array of passing object
   // console.log(key);
    accumulator[elem[key]] = key;
    return accumulator ;
}, {});
console.log(numberObj5);
//try special with [1, 2, 3, 4, 5, 5];

console.log("----------------------Convert array to Obejct6------------------------");
var input2 = [ 
  { key : '11', value : '1100', $$hashKey : '00X' },
  { key : '22', value : '2200', $$hashKey : '018' }
];
var output2 = {};
output2 = input2.reduce((accumulator, elem, index) => {
    //console.log(elem);
    accumulator[elem.key] = elem.value;
    return accumulator;
}, {})
console.log("input =>", input2);
console.log("output =>", output2);

///////////////////////////////////////////Objects to Array//////////////////////////////////////////
console.log("-------------------------------Objects to Array-----------------------------------");
var newNumberObj =  { '1': 'a', '2': 'b', '3': 'c' };
console.log("Object => ", newNumberObj);
var numberArr = [];
Object.entries(newNumberObj).forEach((elem) => {
   // console.log(elem); //this is array now
    numberArr.push(elem[0]); //this is key
    numberArr.push(elem[1]); //this is value
});
console.log("output array is => ",numberArr);
console.log("-------------------------------Objects to Array2-----------------------------------");

var input = {
    x_1: 25,
    x_2: 19,
    x_3: 31,
    y_1: 34,
    y_2: 57,
  };
  
  var output = Object.entries(input).reduce((acc, curr) => {
    var key = curr[0];
  
    var variable = key.substr(0, key.indexOf('_'));
  
    if (!acc[variable]) {
      acc[variable] = [];
    }
  
    acc[variable].push(curr[1]);
  
    return acc;
  }, {});
  console.log("input => ", input);
  console.log("output => ", output);
  console.log("-------------------------------Objects to Array3-----------------------------------");
var input3 = {"1":5,"2":7,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0}
var output3 = [];
Object.entries(input3).reduce((accumulator ,elem) => {
   // console.log(elem);
    return output3.push(elem);
}, {});
console.log("input => ", input3);
console.log("output => ", output3);
console.log("-------------unique---------------");
// arr.filter((elem, index)=>{
//   return arr.indexOf(elem, index+1) > index
// });
// arr.filter((elem, index)=>{
//   return arr.includes(elem, index+1)
// });
// arr.filter((elem, index)=>{
//   return arr.slice(index+1).includes(elem)
// });
// arr.filter((elem, index)=>{
//   return (arr2.lastIndexOf(elem)) != index;
// });




