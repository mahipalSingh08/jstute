console.clear();
let name = {
    firstName : "mahipal",
    lastName : "singh",
    checkThis : this,
    printName : function () {
        console.log("this", this);
        console.log("Full Name is " + this.firstName + " " + this.lastName);
        dd();
        function dd() {
            console.log("inside this", this);
        }
    }
}
console.log("checking this", name.checkThis);
name.printName();

let name2 = {
    firstName : "anjali",
    lastName : "singh"
}

//in name2 object we need fullName method as well so we will use call
//call is function borrowing
console.log("----------------------call()------------------------");
name.printName.call(name2);
//another way

let obj1 = {
    firstName : "anjali2",
    lastName : "singh2"
}

function printObj() {
    console.log("this of printObj", this);
    console.log("Full Name is " + this.firstName + " " + this.lastName);
}

printObj();

function printObjWithAddress(address) {
    console.log("Full Name is " + this.firstName + " " + this.lastName + " from " + address);
}

printObj.call(obj1);
printObj.call(name);
printObjWithAddress.call(name, "dehradun") //first arg get assign to this keyword in main borrowed function

console.log("---------------------apply()------------------------");
//only difference of call and apply is that way of passing agrs
function printObjwithLongAddress(addressline1, addressline2) {
    console.log("Full Name is " + this.firstName + " " + this.lastName + " from " + addressline1 + ", " + addressline2);
}

printObjwithLongAddress.apply(name, ["NY","USA"])

console.log("----------------------bind()------------------------");
let add = printObjwithLongAddress.bind(name, "NY","USA");
printObjwithLongAddress.bind(name, "NY","USA")();
console.log(add());


