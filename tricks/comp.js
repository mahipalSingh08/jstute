console.clear();
console.log('--comparing---- types: undefined, boolean, number, string, object --');
console.log(typeof undefined);  // undefined
console.log(typeof null);       // object
console.log(typeof NaN);        // number
console.log(typeof false);      // boolean
console.log(typeof 0);          // number
console.log(typeof "");         // string
console.log(typeof []);         // object
console.log(typeof {});         // object

console.log('-- Different values: NotExist, Falsy, NaN, [], {} --');
console.log('-- 1. NotExist values: undefined, null have same value --');
console.log(undefined == null); // true

console.log('-- 2. Falsy values: false, 0, "" have same value --');
console.log(false == 0);        // true
console.log(false == "");       // true
console.log(0 == "");           // true

console.log('-- 3. !NotExist, !Falsy, and !NaN return true --');
console.log(!undefined);        // true
console.log(!null);             // true

console.log(!false);            // true
console.log(!"");               // true
console.log(!0);                // true

console.log(!NaN);              // true

console.log('-- 4. [] is not falsy, but [] == false because [].toString() returns "" --');
console.log(false == []);       // true
console.log([].toString());     // ""

console.log(![]);               // false

console.log('-- 5. {} is not falsy, and {} != false, because {}.toString() returns "[object Object]" --');
console.log(false == {});       // false
console.log({}.toString());     // [object Object]

console.log(!{});               // false

console.log('-- Comparing --');
console.log('-- 1. string will be converted to number or NaN when comparing with a number, and "" will be converted to 0 --');
console.log(12 < "2");          // false
console.log("12" < "2");        // true
console.log("" < 2);            // true

console.log('-- 2. NaN can not be compared with any value, even if NaN itself, always return false --');
console.log(NaN == NaN);        // false

console.log(NaN == null);       // false
console.log(NaN == undefined);  // false
console.log(0 <= NaN);          // false
console.log(0 >= NaN);          // false
console.log(undefined <= NaN);  // false
console.log(undefined >= NaN);  // false
console.log(null <= NaN);       // false
console.log(null >= NaN);       // false

console.log(2 <= "2a");         // false, since "2a" is converted to NaN
console.log(2 >= "2a");         // false, since "2a" is converted to NaN

console.log('-- 3. undefined can only == null and == undefined, and can not do any other comparing even if <= undefined --');
console.log(undefined == null);         // true
console.log(undefined == undefined);    // true

console.log(undefined == "");           // false
console.log(undefined == false);        // false
console.log(undefined <= undefined);    // false
console.log(undefined <= null);         // false
console.log(undefined >= null);         // false
console.log(0 <= undefined);            // false
console.log(0 >= undefined);            // false

console.log('-- 4. null will be converted to "" when <, >, <=, >= comparing --');
console.log(12 <= null);        // false
console.log(12 >= null);        // true
console.log("12" <= null);      // false
console.log("12" >= null);      // true

console.log(0 == null);         // false
console.log("" == null);        // false

console.log('-- 5. object, including {}, [], will be call toString() when comparing --');
console.log(12 < {});           // false, since {}.toString() is "[object Object]", and then converted to NaN
console.log(12 > {});           // false, since {}.toString() is "[object Object]", and then converted to NaN
console.log("[a" < {});         // true, since {}.toString() is "[object Object]"
console.log("[a" > {});         // false, since {}.toString() is "[object Object]"
console.log(12 < []);           // false, since {}.toString() is "", and then converted to 0
console.log(12 > []);           // true, since {}.toString() is "", and then converted to 0
console.log("[a" < []);         // false, since {}.toString() is ""
console.log("[a" > []);         // true, since {}.toString() is ""

console.log('-- 6. According to 4 and 5, we can get below weird result: --');
console.log(null < []);         // false
console.log(null > []);         // false
console.log(null == []);        // false
console.log(null <= []);        // true
console.log(null >= []);        // true

