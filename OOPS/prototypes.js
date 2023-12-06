// function Particale(x, y) {
//     this.x = x;
//     this.y = y;
//     // this.show = function () {
//     //     point(this.x, this.y);
//     // }
// }

// Particale.prototype.show = function () {
//     point(this.x, this.y)
// }

// //new keywords says execute that function as contructor funtion and create object
// var p = new Particale(100, 200);

// console.log(p);
// console.log(p.show());




// var a = new Array();

// a.push(2)
// a.push(3)

// Array.prototype.sh = function () {
//     console.log(a.length);
// }
// console.log(a);
// console.log("----------------------------------------------------");
console.clear();
console.log("-------------------------protitype-------------------------");
function Book(title, author, year) {
    this.title = title
    this.author = author
    this.year = year;
}

Book.prototype.getSummary = function () {
    return `${this.title} was written by ${this.author} in year ${this.year}`
}

Book.prototype.getBookYear = function () {
    let years = new Date().getFullYear() - this.year;
    return `${this.title} was written by ${this.author} in ${years} year ago`
}

//initilize book
const book1 = new Book("autobio", "mahi", "2000");
console.log(book1.getSummary());
console.log(book1.getBookYear());


