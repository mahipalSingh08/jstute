// //method => obj
// //function => global

// const v = {
//     title : "a",
//     play(){
//         console.log(this);  //  { title: 'a', play: Function }   //refering to object itself 
//     }
// }

// v.play();
// golbalFunction();

// function golbalFunction() {
//     console.log(this);   //window or global object
// }

// function anotherFunction(title) {
//     this.title = title
//     console.log(this);   //window or global object
// }

// const another = anotherFunction("another");  //this shows windows or global
// const another2 = new anotherFunction("another2") // { title: 'another2' } as "new" created new objet


// const video = {
//     title : "title",
//     tags : ["a","b","c"],
//     showTags(){
//         this.tags.forEach((tag) => {
//             console.log(this.title, tag);
//         }, this);
//     }
// }

// video.showTags()

console.log("globalThis", this);
const obj = {
    name : "mahi",
    checkThis : function () {
        console.log("checkThis", this);
        let childObj = {
            insideName : "mahipal",
            feature :  function () {
                console.log("feature", this);
            }
            
        }
        console.log("childObj.feature()", childObj.feature());
        insideFun();
        function insideFun() {
            console.log("insideFun()", this);
        }
    }
}
obj.checkThis();

function checkingAnotherThis() {
    console.log(this);
}

obj2 = {
    a : 1,
    checkingAnotherThis,
}

checkingAnotherThis();
obj2.checkingAnotherThis();


