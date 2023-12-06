// console.log("events");
// const grand = document.querySelector(".grand");
// const parent = document.querySelector(".parent");
// const child = document.querySelector(".child");

// //default is bubbling

// grand.addEventListener("click", e => {

//     console.log("grand");
//     console.log(e);
//     // console.log(e.target); //main div
// });

// parent.addEventListener("click", e => {
//     console.log("parent");
//     console.log(e);
// });

// parent.removeEventListener("click", e => {
//     console.log("parent event removed");
// });


// child.addEventListener("click", e => {
//     console.log("child");
//     console.log(e);
// }, {once : true}); //will run once and will remove this event


// document.addEventListener("click", e => {
//     console.log("document");
//     console.log(e);
// })

// // //making this capture

// // grand.addEventListener("click", e => {
// //     console.log("grand");
// //     console.log(e);
// //     // console.log(e.target); //main div
// // }, {capture : true});

// // parent.addEventListener("click", e => {
// //     console.log("parent");
// //     e.stopPropagation();
// //     console.log(e);
// // }, {capture : true});
// // //code will stop here by adding stopPropagation

// // child.addEventListener("click", e => {
// //     console.log("child");
// //     console.log(e);
// // }, {capture : true});


// // document.addEventListener("click", e => {
// //     console.log("document");
// //     console.log(e);
// // }, {capture : true});


//event delegation
const divs = document.querySelectorAll("div");

divs.forEach(div => {
    div.addEventListener("click", e =>  {
        console.log("div clicked");
    })
}) //this will not work after adding new div

//way to work this

document.addEventListener("click" , e => {
    if(e.target.matches("div")){
        console.log("div clicked");
    }
}); //this will work 

//now adding one more div
const newDiv = document.createElement("div");
newDiv.style.width =  "50px";
newDiv.style.height =  "50px";
newDiv.style.background =  "blue";
document.body.append(newDiv);

//making global event listner

function globalEventListener(type, selector, callback) {
    document.addEventListener(type, e => {
        if(e.target.matches(selector)) callback(e);
    })
}

console.log(this);
