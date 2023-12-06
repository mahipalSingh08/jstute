let profile = {
    name : 'mahi'
};

profile.age = 3;

console.log(profile);  //{ name: 'mahi', age: 3 }
///////////////////////////////////////////////////////////////////
let profile2 = {
    name : 'mahi'
};

Object.freeze(profile2);

profile2.name = "df";  //does not matter
profile2.age = 3;  //does not matter

console.log(profile2);  //{ name: 'mahi' }
///////////////////////////////////////////////////////////////////
let profile3 = {
    name : 'mahi'
};

Object.defineProperty(profile3, 'age', {
    value : 3,
    writable: false
})

profile3.age = 4;  //does not matter
profile3.name = "mahipal";  //works

console.log(profile3);  //{ name: 'mahipal', age : 3 }
console.log("------------------coping object------------------------------");
var x = { a: 0 , b: { c: 0}};
var y = Object.assign({}, x);
x.b.c = 3;  //exception


//solution and another exception 
const parent = {
    string: 'string',
    number: 123,
    bool: false,
    nul: null,
    date: new Date(),  // stringified
    undef: undefined,  // lost
    inf: Infinity,  // forced to 'null'
    nesting : { a: 0 , b: { c: 0}}
  }
 
  console.log("this is parent ", parent);
  console.log("typeof parent.date", typeof parent.date);  // Date object
  const child = JSON.parse(JSON.stringify(parent));
  parent.nesting.b.c = 1;
  console.log("child", child);
  console.log("typeof child.date", typeof child.date);
  console.log("-----------------------");
  let anotherChild = {...parent}
  console.log(anotherChild);




