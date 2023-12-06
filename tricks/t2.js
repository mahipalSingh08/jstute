console.clear();
console.log("-----------------string opeation------------------");

str1 = "a_new_module";
str2 = "anotherNewModule";

console.log(str1.replace(/_([a-z])/g, function(a,b,c) { return b.toUpperCase()})); //snake to camelcase
console.log(str2.replace(/[A-Z]/g, function(a) { return "_" + a.toLowerCase()})); //camelcase to snake




